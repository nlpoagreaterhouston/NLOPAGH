# NLPOA Greater Houston Website — Editing Guide

This version removes the public visual editor. The page layout, structure, styling, colors, and existing functionality were left in place.

## How to make changes

### Change text
1. Open `index.html` in VS Code, Notepad++, or another code editor.
2. Search for the text you want to change (`Ctrl+F`).
3. Change only the wording between the HTML tags.
4. Save `index.html`.

### Change an image
1. Put the new image inside an `images` or `pictures` folder in the same GitHub repository.
2. Give the image a simple filename, for example `president.jpg`.
3. In `index.html`, change the image source to a repository-relative path such as:
   `images/president.jpg`
4. Save and upload/commit the change to GitHub.

**Important:** the current source contains several Windows-only `C:/Users/...` and `C:\Users\...` image paths. Those paths work only on the original computer and will not work on GitHub Pages. Replace them with relative repository paths when adding the actual image files.

### Change Executive Board information
Search for the officer's name in `index.html`. The nearby `board-role-badge`, `board-agency`, and `board-bio-snippet` contain the information displayed on the card.

### Change Social Feed posts
The initial social-feed posts are stored near the top of `app.js` in the `SOCIAL_POSTS` array. Update the `image`, `caption`, `tags`, and other fields there. Use repository-relative image paths rather than computer-local paths.

### Add a new board photo
If the board card currently uses an icon, replace the icon element with an image using the same card structure, for example:

```html
<img src="images/officer-name.jpg" alt="Officer Name">
```

The exact sizing should follow the existing board image styling so the visual design remains unchanged.

## Publishing changes to GitHub Pages

1. Edit the files locally.
2. Test by opening the page locally.
3. Commit/upload the changed files to the GitHub repository.
4. GitHub Pages will publish the updated site after the repository update.

## What was removed

The public Edit Mode dock, upload control, browser-based text editing, browser-based image swapping, export control, and reset control were removed. The JavaScript startup no longer initializes or loads the old visual-editor system.

## What was intentionally preserved

- Existing page sections and HTML structure
- Existing CSS/classes and color scheme
- Navigation
- Scholarship, membership, donation, events, contact, FAQ, and member-portal functionality
- Existing social-feed behavior

## Recommended future organization

For easiest maintenance, keep the repository organized like this:

```text
NLPOA-Website/
├── index.html
├── app.js
├── style.css
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── president.jpg
│   ├── vice-president.jpg
│   └── ...
└── SITE-EDITING-GUIDE.md
```

This keeps the public website clean while making future image and content updates straightforward.
