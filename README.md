# Alliance Institute Australia — V16 production release

Deploy the CONTENTS of this directory to the GitHub Pages repository root (not the ZIP file). Keep the `assets/` directory intact.

Domain: https://allianceia.com.au/ (the CNAME file retains the custom domain).

Includes approved V16 four-theme alignment, full responsive homepage, original site images, favicon and Apple touch icon, Open Graph / social preview image, canonical URL, meta description, sitemap.xml and robots.txt.

Before uploading, back up the existing repository and preserve any other files or workflows you still need. Confirm GitHub Pages Settings > Pages points to the correct branch and root.

After deployment:
1. Open https://allianceia.com.au/ in an incognito window and inspect mobile and desktop.
2. Verify https://allianceia.com.au/assets/social-preview.jpg, /robots.txt and /sitemap.xml load.
3. In Google Search Console verify the domain, use URL Inspection > Test Live URL > Request Indexing for https://allianceia.com.au/, and submit sitemap.xml.
4. Check previously indexed old paths and use appropriate redirects or 404/410 responses; GitHub Pages does not natively provide server-side 301 redirects.
5. Recheck LinkedIn sharing previews after publishing. Google controls final snippets and indexing timing.

This package does not deploy the site or change Google Search Console automatically.
