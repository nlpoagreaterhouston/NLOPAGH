/**
 * ============================================================================
 * NLPOA GREATER HOUSTON CHAPTER — QUICK EDIT CONFIGURATION
 * ============================================================================
 * You can edit any of the information below in Notepad or any text editor.
 * Simply change the text inside the quotation marks "".
 */

const SITE_CONFIG = {
  // CHAPTER CONTACT INFO
  chapterName: "National Latino Peace Officers Association - Greater Houston Chapter",
  shortName: "NLPOA Greater Houston",
  mailingAddress: "P.O. Box 231521, Houston, TX 77223",
  phoneNumber: "(832) 755-9860",
  emailAddress: "nlpoahouston@gmail.com",
  facebookUrl: "https://www.facebook.com/nlpoagreaterhouston",
  instagramUrl: "https://www.instagram.com",

  // MOTTO & MISSION
  motto: "Honoring Family, Education, and Community through Service and Mentorship",
  tagline: "Bridging Law Enforcement & the Greater Houston Community",

  // EXECUTIVE BOARD OF DIRECTORS
  executiveBoard: [
    { role: "President", name: "Retired Officer Jose Quirin", agency: "Houston ISD Police Department" },
    { role: "1st Vice President", name: "Sgt. Mercedes Lopez", agency: "Oak Ridge Police Department" },
    { role: "2nd Vice President", name: "Officer Martin Medina", agency: "Spring ISD Police Department" },
    { role: "3rd Vice President", name: "Officer Pedro Lopez III", agency: "Houston ISD Police Department" },
    { role: "Secretary", name: "Detective Melissa Gonzalez", agency: "Houston ISD Police Department" },
    { role: "Treasurer", name: "Asst. Chief Tridung Tran", agency: "Houston ISD Police Department" },
    { role: "Assistant Treasurer", name: "Detective Hector Gonzalez", agency: "Houston ISD Police Department" },
    { role: "Sergeant at Arms", name: "Retired Deputy Raul Yzaguirre", agency: "Harris County Sheriff’s Office" },
    { role: "Parliamentarian", name: "Officer Justyn Contreras", agency: "Houston ISD Police Department" },
    { role: "Historian", name: "Retired Sergeant Robert Ruiz", agency: "Houston Police Department" },
    { role: "Fort Bend County Delegate", name: "Lieutenant Rodney Rodriguez", agency: "Fort Bend County Sheriff’s Office" },
    { role: "Technical & Logistics Advisor", name: "Robyn Garivey-Contreras", agency: "Civilian" },
    { role: "Brazoria County Delegate", name: "Chaplain Frank Mata", agency: "Kemah Police Department" }
  ],

  // ANNUAL SCHOLARSHIP
  scholarshipDeadline: "May  , 2027",
  scholarshipAwardAmount: "$1,500 - $3,000",
  
  // ANNUAL GOLF CLASSIC
  golfDate: "October 18, 2026",
  golfLocation: "Wildcat Golf Club, Houston, TX",

  // ==========================================================================
  // PAYMENTS (PayPal)  -- paste your links between the quotes
  // See PAYPAL-SETUP.md for exactly where to get each one.
  // Any link left as "" will show "payment not set up yet" when clicked.
  // ==========================================================================
  payments: {
    // Your PayPal "Merchant ID" (Profile > Business information). Used for donations.
    // Use the Merchant ID, NOT your email, so your email isn't visible in the page.
    paypalMerchantId: "BXENTMQVHDMAQ",

    // One PayPal link per membership tier.
    // Annual tiers: a Pay Now / Buy Now button link, or a yearly Subscription plan link.
    // Monthly tier: a Subscription PLAN link (this is what bills members automatically).
    tiers: {
      annualOfficer:   "https://www.paypal.com/ncp/payment/H68ZMD652W33J",   // $75 / year  - Annual Membership, Sworn Personnel
      monthlyOfficer:  "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3LC82749XW3469437NLEGNVY",   // $50 / month - Monthly Membership + Legal Coverage (recurring)
      annualCivilian:  "https://www.paypal.com/ncp/payment/KVUWC9ZR2APGY",   // $50 / year  - Annual Civilian Member
      cadet:           "https://www.paypal.com/ncp/payment/W5FHTYR7Y5UY4"    // $40 / year  - Police Academy Cadets
    }
  },

  // ==========================================================================
  // CONTACT FORM -> GOOGLE SHEET
  // Paste your Google Apps Script "Web app" link here (see SHEET-SETUP.md).
  // It looks like: https://script.google.com/macros/s/AKfy.../exec
  // Leave "" to use the email-only (FormSubmit) method instead.
  // ==========================================================================
  contactSheetUrl: "https://script.google.com/macros/s/AKfycbxCyaxiU92XLZsA8vkVvWEoUL5LcPUCvjecyx1J79Vo0GLdFkktPH14qvYLX9w7BgU/exec",

  // MEMBERSHIP PORTAL DEMO CREDENTIALS
  memberPortalDemo: {
    email: "member@nlpoa.org",
    password: "Houston2026!"
  // MEMBERSHIP PORTAL DEMO CREDENTIALS
  memberPortalDemo: {
    email: "member@nlpoa.org",
    password: "Houston2026!"
  }
};
