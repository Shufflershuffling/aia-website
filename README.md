# Alliance Institute Australia — Website

Production-ready static website prepared from the approved v11.3 design.
All site images, CSS and JavaScript are included locally. No build command or hosting framework is required.

## Publish with GitHub Pages

1. Create a GitHub repository (for example, `aia-website`).
2. Upload the **contents of this folder** to the repository root, keeping `index.html` and the `assets/` directory together. You can use GitHub's **Add file → Upload files**.
3. Commit the files to the `main` branch.
4. In repository **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/(root)` and save.
5. GitHub will display the live Pages URL after deployment. It may take a few minutes.
6. If you later use a custom domain, configure it in **Settings → Pages** and update your DNS as GitHub instructs. Enable HTTPS when available.

## Included files

- `index.html` — homepage with all agreed content and links
- `assets/styles.css` — responsive styling
- `assets/site.js` — mobile menu and lightweight visual behaviour
- `assets/*.png`, `assets/*.jpg` — original site imagery and logos extracted from v11.3
- `.nojekyll` — prevents Jekyll processing
- `robots.txt` — permits search engine crawling

## Confirmed links retained

- Li Si Wong: https://www.linkedin.com/in/lisiwong/
- Dr Lillian Koh: https://www.linkedin.com/in/dr-lillian-koh-a9299b280/
- Brian Tucker: https://www.linkedin.com/in/brian-tucker-a0374a33/
- Aus–Asia Connect LinkedIn: https://www.linkedin.com/company/australiaasiaconnect
- Aus–Asia Connect: https://ausasiaconnect.com/
- Wade VC Catalyst: https://wadeinstitute.org.au/programs/investors/vc-catalyst/
- Contact: mailto:lisi@ausasiaconnect.com

## Before public launch

- Confirm the contact email above is the desired public enquiry address.
- Review image permissions, logo use and institutional wording.
- Test on your actual phone and on desktop after publishing.
- Consider adding a privacy policy if you later use analytics, forms, or tracking cookies.
- This is a static site: the contact link opens the visitor's email app; no backend form is provided.
- The site's font stack uses locally available system fallbacks where webfonts are not installed; no external font service is required.

## Editing

Edit `index.html` for copy and links, and `assets/styles.css` for styling.
Preserve relative paths so the website works on both GitHub Pages project URLs and custom domains.
