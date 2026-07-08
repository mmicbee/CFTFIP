Drop your project photos in this folder — file names below map to spots
already wired up in index.html.

HOME PAGE PHOTO
  hero.jpg          -> shows next to the headline at the top of the site

GALLERY PHOTOS
  gallery-1.jpg      gallery-2.jpg      gallery-3.jpg
  gallery-4.jpg      gallery-5.jpg      gallery-6.jpg

HOW TO ACTIVATE A PHOTO
  Each spot currently shows a placeholder box (a "g-item" with a
  "g-placeholder" div inside, labeled e.g. "Add images/gallery-1.jpg").
  Once you have the image file in this folder, open index.html, find that
  placeholder div, and replace it with an <img> tag, e.g.:

    <img src="images/gallery-1.jpg" alt="Describe the photo here" loading="lazy">

  Do this for the hero photo and each gallery photo you add. Also update
  the text inside <figcaption> to a real caption.

NOTES
  - Recommended: landscape orientation, at least 1200px wide, JPG or PNG.
  - loading="lazy" tells the browser to only load the image when the
    visitor scrolls near it — keeps the page fast, especially on mobile.
  - To add more than 6 gallery photos, copy a <figure class="g-item"> block
    in the Gallery section of index.html and increase the number.
