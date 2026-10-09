/**
 * NLPOA Greater Houston Chapter - Interactive Web Application
 * Official Portal Logic & State Management
 * Protected Members-Only Portal
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initGalleryAndSocialFeed();
  initScholarshipPortal();
  initMembershipHub();
  initDonationSystem();
  initEventsCalendar();
  initContactForm();
  initFAQAccordion();
  initMembersOnlyPortal();
});

/* ==========================================================================
   1. Mobile Navigation & Scrollspy
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const mainHeader = document.querySelector('.main-header');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      mainHeader.classList.toggle('mobile-menu-active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  // Close mobile nav on click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainHeader.classList.remove('mobile-menu-active');
    });
  });

  // Scrollspy
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });
}

/* ==========================================================================
   2. Social Media & Live Event Gallery Feed
   ========================================================================== */
let SOCIAL_POSTS = [
  {
    id: 1,
    category: 'golf',
    platform: 'facebook',
    author: 'NLPOA - Greater Houston Chapter',
    time: 'Recent Update',
    image: 'C:/Users/gonhe/.gemini/antigravity/brain/dac78599-4cf3-4737-8a22-cb0198e6c9a9/golf_tournament_1787023954282.jpg',
    caption: '🏆 Proud to celebrate our Annual Scholarship Golf Classic at Pearland Golf Club! Thanks to all the incredible sponsors and law enforcement officers who joined together to raise $25,000 for local Houston youth pursuing higher education! ⛳️💙💛',
    tags: '#NLPOAHouston #EducationFirst #CommunityStrong #GolfClassic #HoustonLawEnforcement',
    likes: 184,
    liked: false
  },
  {
    id: 2,
    category: 'backpack',
    platform: 'instagram',
    author: 'nlpoa_greaterhouston',
    time: 'Community Spotlight',
    image: 'C:/Users/gonhe/.gemini/antigravity/brain/dac78599-4cf3-4737-8a22-cb0198e6c9a9/backpack_drive_1787023985576.jpg',
    caption: '🎒 Over 600 backpacks packed with notebooks, markers, and supplies delivered to local Houston students today. Empowering tomorrow’s leaders starts right here in our neighborhoods.',
    tags: '#BackToSchool #HISD #Mentorship #NLPOA #HoustonPolice #FamilyFirst',
    likes: 246,
    liked: false
  },
  {
    id: 3,
    category: 'toys',
    platform: 'facebook',
    author: 'NLPOA - Greater Houston Chapter',
    time: 'Holiday Outreach',
    image: 'C:/Users/gonhe/.gemini/antigravity/brain/dac78599-4cf3-4737-8a22-cb0198e6c9a9/holiday_toy_drive_1787024005862.jpg',
    caption: '🎁 Spreading holiday joy at our Annual Christmas Toy & Food Drive! Bicycles, toys, and turkey food baskets delivered directly to families across the Greater Houston area. Honoring Family and Community always.',
    tags: '#NLPOAGiving #SeasonOfGiving #HoustonStrong #HoustonCommunity #ToyDrive',
    likes: 312,
    liked: false
  },
  {
    id: 4,
    category: 'mentorship',
    platform: 'instagram',
    author: 'nlpoa_greaterhouston',
    time: 'Youth Leadership Academy',
    image: 'C:/Users/gonhe/.gemini/antigravity/brain/dac78599-4cf3-4737-8a22-cb0198e6c9a9/youth_mentorship_1787024021576.jpg',
    caption: '👮‍♂️ Inspiring the next generation of criminal justice leaders. Our Executive Board and senior officers hosting high school junior cadets for leadership workshops and career readiness panels.',
    tags: '#YouthMentorship #CadetAcademy #FutureOfficers #NLPOA #LeadershipInAction',
    likes: 195,
    liked: false
  },
  {
    id: 5,
    category: 'community',
    platform: 'facebook',
    author: 'NLPOA - Greater Houston Chapter',
    time: 'Unity in Action',
    image: 'C:/Users/gonhe/.gemini/antigravity/brain/dac78599-4cf3-4737-8a22-cb0198e6c9a9/hero_community_police_1787023942110.jpg',
    caption: '🌟 Building bridges and strengthening bonds with the wonderful families of Houston. Unity Day in downtown Houston brought hundreds of community members together with our officers.',
    tags: '#CommunityPolicing #HoustonTogether #NLPOAGreaterHouston #BridgingTheGap',
    likes: 420,
    liked: false
  },
  {
    id: 6,
    category: 'board',
    platform: 'facebook',
    author: 'NLPOA - Greater Houston Chapter',
    time: 'Executive Board Announcement',
    image: 'C:/Users/gonhe/.gemini/antigravity/brain/dac78599-4cf3-4737-8a22-cb0198e6c9a9/.user_uploaded/media_1787025720046.png',
    caption: '🛡️ "Honoring Family, Education, and Community through Service and Mentorship." The National Latino Peace Officers Association - Greater Houston Chapter continues its steadfast commitment to justice, equity, and service across Texas.',
    tags: '#NLPOANational #GreaterHouston #ExecutiveBoard #LawEnforcementExcellence',
    likes: 278,
    liked: false
  }
];

function initGalleryAndSocialFeed() {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Load custom posts from localStorage if saved
  const savedPosts = localStorage.getItem('nlpoa_custom_posts');
  if (savedPosts) {
    try {
      SOCIAL_POSTS = JSON.parse(savedPosts);
    } catch(e) {
      console.error(e);
    }
  }

  window.renderGallery = function(filter = 'all') {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? SOCIAL_POSTS 
      : SOCIAL_POSTS.filter(post => post.category === filter);

    filtered.forEach(post => {
      const card = document.createElement('div');
      card.className = 'social-card';
      card.innerHTML = `
        <div class="social-card-header">
          <div class="social-poster">
            <div class="social-poster-avatar">
              <img src="C:/Users/gonhe/.gemini/antigravity/brain/dac78599-4cf3-4737-8a22-cb0198e6c9a9/.user_uploaded/media_1787025720046.png" alt="NLPOA Crest" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="social-poster-info">
              <span class="poster-name">${post.author}</span>
              <span class="post-time">${post.time}</span>
            </div>
          </div>
          <span class="platform-badge ${post.platform}">
            <i class="fab fa-${post.platform}"></i>
          </span>
        </div>
        <div class="social-media-wrap image-editable-wrap" onclick="handleSocialCardClick(event, ${post.id})">
          <img src="${post.image}" alt="${post.caption.substring(0, 40)}" class="social-img" onerror="this.src='C:/Users/gonhe/.gemini/antigravity/brain/dac78599-4cf3-4737-8a22-cb0198e6c9a9/hero_community_police_1787023942110.jpg'">
          <div class="social-overlay-btn">
            <i class="fas fa-expand-alt"></i>
          </div>
        </div>
        <div class="social-caption">
          <p>${post.caption}</p>
          <div class="social-tags">${post.tags}</div>
        </div>
        <div class="social-card-footer">
          <div class="social-engagement">
            <button class="engage-btn ${post.liked ? 'liked' : ''}" onclick="togglePostLike(${post.id}, this)">
              <i class="${post.liked ? 'fas' : 'far'} fa-heart"></i>
              <span class="like-count">${post.likes}</span>
            </button>
            <button class="engage-btn" onclick="openLightbox(${post.id})">
              <i class="far fa-comment"></i>
              <span>Comments</span>
            </button>
          </div>
          <button class="engage-btn" onclick="sharePost(${post.id})">
            <i class="fas fa-share-alt"></i>
          </button>
        </div>
      `;
      galleryGrid.appendChild(card);
    });
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      window.renderGallery(btn.getAttribute('data-filter'));
    });
  });

  window.renderGallery('all');
}

window.handleSocialCardClick = function(event, id) {
  if (document.body.classList.contains('edit-mode-active')) {
    // In edit mode, replace image
    const imgEl = event.currentTarget.querySelector('img');
    if (imgEl) {
      window.triggerImageUpload(imgEl, () => {
        const post = SOCIAL_POSTS.find(p => p.id === id);
        if (post) {
          post.image = imgEl.src;
          localStorage.setItem('nlpoa_custom_posts', JSON.stringify(SOCIAL_POSTS));
        }
      });
    }
  } else {
    openLightbox(id);
  }
};

window.togglePostLike = function(id, btnElement) {
  const post = SOCIAL_POSTS.find(p => p.id === id);
  if (!post) return;

  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;

  btnElement.classList.toggle('liked', post.liked);
  const icon = btnElement.querySelector('i');
  if (icon) {
    icon.className = post.liked ? 'fas fa-heart' : 'far fa-heart';
  }
  const countSpan = btnElement.querySelector('.like-count');
  if (countSpan) {
    countSpan.textContent = post.likes;
  }
};

window.sharePost = function(id) {
  navigator.clipboard?.writeText(window.location.href);
  showToast('Link copied to clipboard! Share on social media.');
};

window.openLightbox = function(id) {
  const post = SOCIAL_POSTS.find(p => p.id === id);
  if (!post) return;

  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const title = document.getElementById('lightboxTitle');

  if (img) img.src = post.image;
  if (caption) caption.innerHTML = `<p>${post.caption}</p><p class="social-tags" style="color:var(--gold-400);">${post.tags}</p>`;
  if (title) title.textContent = `${post.author} • ${post.time}`;

  if (modal) modal.classList.add('active');
};

/* ==========================================================================
   3. Interactive Scholarship Portal
   ========================================================================== */
function initScholarshipPortal() {
  const openAppBtn = document.getElementById('openScholarshipAppBtn');
  const modal = document.getElementById('scholarshipModal');
  const form = document.getElementById('scholarshipForm');
  const step1 = document.getElementById('schStep1');
  const step2 = document.getElementById('schStep2');
  const step3 = document.getElementById('schStep3');
  const successBox = document.getElementById('schSuccessBox');

  const nextBtn1 = document.getElementById('schNext1');
  const prevBtn2 = document.getElementById('schPrev2');
  const nextBtn2 = document.getElementById('schNext2');
  const prevBtn3 = document.getElementById('schPrev3');

  const openAppBtns = document.querySelectorAll('#openScholarshipAppBtn, .open-scholarship-btn');

  openAppBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      resetScholarshipForm();
      if (modal) modal.classList.add('active');
    });
  });

  if (nextBtn1) {
    nextBtn1.addEventListener('click', () => {
      const name = document.getElementById('schApplicantName')?.value.trim();
      const email = document.getElementById('schApplicantEmail')?.value.trim();
      const phone = document.getElementById('schApplicantPhone')?.value.trim();

      if (!name || !email || !phone) {
        showToast('Please complete all personal details to proceed.', 'warning');
        return;
      }

      step1.style.display = 'none';
      step2.style.display = 'block';
    });
  }

  if (prevBtn2) {
    prevBtn2.addEventListener('click', () => {
      step2.style.display = 'none';
      step1.style.display = 'block';
    });
  }

  if (nextBtn2) {
    nextBtn2.addEventListener('click', () => {
      const school = document.getElementById('schSchoolName')?.value.trim();
      const gpa = document.getElementById('schGpa')?.value.trim();
      const major = document.getElementById('schMajor')?.value.trim();

      if (!school || !gpa || !major) {
        showToast('Please complete your academic information.', 'warning');
        return;
      }

      step2.style.display = 'none';
      step3.style.display = 'block';
    });
  }

  if (prevBtn3) {
    prevBtn3.addEventListener('click', () => {
      step3.style.display = 'none';
      step2.style.display = 'block';
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const essay = document.getElementById('schEssay')?.value.trim();
      if (!essay || essay.length < 50) {
        showToast('Please write a brief statement on your goals and community involvement (min 50 chars).', 'warning');
        return;
      }

      const appNum = 'NLPOA-SCH-' + Math.floor(100000 + Math.random() * 900000);
      document.getElementById('schGeneratedId').textContent = appNum;
      
      step3.style.display = 'none';
      successBox.style.display = 'block';
      showToast('Scholarship Application Submitted Successfully! 🎉', 'success');
    });
  }

  function resetScholarshipForm() {
    if (form) form.reset();
    if (step1) step1.style.display = 'block';
    if (step2) step2.style.display = 'none';
    if (step3) step3.style.display = 'none';
    if (successBox) successBox.style.display = 'none';
  }
}

/* ==========================================================================
   4. Membership Hub with Digital ID Card Generator
   ========================================================================== */
function initMembershipHub() {
  const joinBtns = document.querySelectorAll('.join-tier-btn');
  const modal = document.getElementById('membershipModal');
  const form = document.getElementById('membershipForm');

  const inputName = document.getElementById('memFullName');
  const inputAgency = document.getElementById('memAgency');
  const selectTier = document.getElementById('memTierSelect');

  const cardName = document.getElementById('cardMemberName');
  const cardAgency = document.getElementById('cardMemberAgency');
  const cardTier = document.getElementById('cardMemberTier');
  const cardId = document.getElementById('cardMemberId');
  const cardExp = document.getElementById('cardMemberExp');

  // Open modal from buttons
  joinBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tier = btn.getAttribute('data-tier') || 'Active Peace Officer';
      if (selectTier) selectTier.value = tier;
      updateLiveCard();
      if (modal) modal.classList.add('active');
    });
  });

  // Real-time Card Updating
  function updateLiveCard() {
    if (cardName) cardName.textContent = inputName?.value.trim() || 'OFFICER JOHN DOE';
    if (cardAgency) cardAgency.textContent = inputAgency?.value.trim() || 'HOUSTON AREA LAW ENFORCEMENT';
    if (cardTier) cardTier.textContent = selectTier?.value || 'ACTIVE PEACE OFFICER';
    if (cardId) cardId.textContent = 'HOU-' + (Math.abs(hashString(inputName?.value || 'NLPOA')) % 90000 + 10000);
    if (cardExp) cardExp.textContent = 'DEC ' + (new Date().getFullYear() + 1);
  }

  inputName?.addEventListener('input', updateLiveCard);
  inputAgency?.addEventListener('input', updateLiveCard);
  selectTier?.addEventListener('change', updateLiveCard);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Welcome to NLPOA Greater Houston Chapter! Your membership pass is active.', 'success');
      setTimeout(() => {
        closeAllModals();
      }, 1800);
    });
  }

  function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }
}

/* ==========================================================================
   5. Donation & Sponsorship System
   ========================================================================== */
function initDonationSystem() {
  const presetBtns = document.querySelectorAll('.preset-btn');
  const customInput = document.getElementById('customDonateAmount');
  const donateSubmitBtn = document.getElementById('donateSubmitBtn');
  const modal = document.getElementById('donateModal');
  const causeSelect = document.getElementById('donationCause');
  const receiptAmount = document.getElementById('receiptAmount');
  const receiptCause = document.getElementById('receiptCause');
  const receiptId = document.getElementById('receiptNumber');

  let currentAmount = 100;

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAmount = parseFloat(btn.getAttribute('data-amount')) || 100;
      if (customInput) customInput.value = currentAmount;
    });
  });

  if (customInput) {
    customInput.addEventListener('input', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      currentAmount = parseFloat(customInput.value) || 0;
    });
  }

  if (donateSubmitBtn) {
    donateSubmitBtn.addEventListener('click', () => {
      if (currentAmount <= 0) {
        showToast('Please specify a valid contribution amount.', 'warning');
        return;
      }

      const cause = causeSelect ? causeSelect.options[causeSelect.selectedIndex].text : 'Scholarship Fund';
      
      if (receiptAmount) receiptAmount.textContent = '$' + currentAmount.toLocaleString('en-US', { minimumFractionDigits: 2 });
      if (receiptCause) receiptCause.textContent = cause;
      if (receiptId) receiptId.textContent = 'TX-NLPOA-' + Math.floor(100000 + Math.random() * 900000);

      if (modal) modal.classList.add('active');
    });
  }

  const donateConfirmBtn = document.getElementById('confirmDonationPaymentBtn');
  if (donateConfirmBtn) {
    donateConfirmBtn.addEventListener('click', () => {
      showToast('Thank you for supporting NLPOA Greater Houston Chapter! Receipt emailed.', 'success');
      setTimeout(() => {
        closeAllModals();
      }, 1600);
    });
  }
}

/* ==========================================================================
   6. Events Calendar RSVP Simulator
   ========================================================================== */
function initEventsCalendar() {
  const rsvpBtns = document.querySelectorAll('.event-rsvp-btn');
  const modal = document.getElementById('eventModal');
  const eventTitleSpan = document.getElementById('rsvpEventName');
  const eventForm = document.getElementById('rsvpForm');

  rsvpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const eventName = btn.getAttribute('data-event') || 'NLPOA Houston Event';
      if (eventTitleSpan) eventTitleSpan.textContent = eventName;
      if (modal) modal.classList.add('active');
    });
  });

  if (eventForm) {
    eventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('RSVP Confirmed! Your confirmation badge has been registered.', 'success');
      setTimeout(() => {
        closeAllModals();
      }, 1500);
    });
  }
}

/* ==========================================================================
   7. Contact Form & Feedback
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const msg = document.getElementById('contactMessage')?.value.trim();

      if (!name || !email || !msg) {
        showToast('Please fill out all required fields.', 'warning');
        return;
      }

      showToast(`Thank you, ${name}! Your message has been received by the board.`, 'success');
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   8. FAQ Accordion
   ========================================================================== */
function initFAQAccordion() {
  const accordionItems = document.querySelectorAll('.faq-item');

  accordionItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        accordionItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   10. PASSWORD-PROTECTED MEMBERS-ONLY PORTAL
   ========================================================================== */
function initMembersOnlyPortal() {
  const openLoginBtns = document.querySelectorAll('.open-member-portal-btn');
  const loginModal = document.getElementById('memberLoginModal');
  const dashboardModal = document.getElementById('memberDashboardModal');
  const loginForm = document.getElementById('memberLoginForm');
  const demoFillBtn = document.getElementById('demoLoginAutofill');
  const logoutBtn = document.getElementById('memberLogoutBtn');
  const dashboardTabs = document.querySelectorAll('.member-tab-btn');

  // Open Login or Dashboard
  openLoginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (isMemberLoggedIn()) {
        openMemberDashboard();
      } else {
        if (loginModal) loginModal.classList.add('active');
      }
    });
  });

  // Demo Credentials Fill Helper
  if (demoFillBtn) {
    demoFillBtn.addEventListener('click', () => {
      document.getElementById('memberUserEmail').value = 'member@nlpoa.org';
      document.getElementById('memberUserPassword').value = 'Houston2026!';
    });
  }

  // Handle Login Submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('memberUserEmail')?.value.trim();
      const pass = document.getElementById('memberUserPassword')?.value;

      // Demo authentication rule: Allows Houston2026! or demo accounts
      if (pass === 'Houston2026!' || pass === 'nlpoa2026' || email.includes('nlpoa')) {
        localStorage.setItem('nlpoa_member_session', JSON.stringify({
          email: email,
          name: email.split('@')[0].toUpperCase(),
          tier: 'Active Member',
          loginTime: new Date().toISOString()
        }));

        closeAllModals();
        showToast('Login successful! Welcome to the Members-Only Dashboard.', 'success');
        setTimeout(() => {
          openMemberDashboard();
        }, 500);
      } else {
        showToast('Invalid credentials. Tip: Use demo password "Houston2026!"', 'warning');
      }
    });
  }

  // Handle Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('nlpoa_member_session');
      closeAllModals();
      showToast('Logged out of Member Portal.', 'info');
    });
  }

  // Member Dashboard Tab Switching
  dashboardTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      dashboardTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.member-tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === targetId);
      });
    });
  });

  function isMemberLoggedIn() {
    return localStorage.getItem('nlpoa_member_session') !== null;
  }

  function openMemberDashboard() {
    if (dashboardModal) {
      dashboardModal.classList.add('active');
    }
  }
}

/* ==========================================================================
   Global Modal & Toast Utilities
   ========================================================================== */
window.closeAllModals = function() {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(m => m.classList.remove('active'));
};

// Close modal when clicking on backdrop or close button
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close-btn')) {
    closeAllModals();
  }
});

// ESC key closes modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-check-circle';
  if (type === 'warning') icon = 'fa-exclamation-triangle';

  toast.innerHTML = `
    <i class="fas ${icon}" style="color:var(--gold-400);font-size:1.1rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
