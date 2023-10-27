var slideshow = new Array(); // Array med bilder till bildspel
slideshow[0] = "/src/db/photos/day8/day8_19.jpg";
slideshow[1] = "/src/db/photos/day8/day8_24.jpg";
slideshow[2] = "/src/db/photos/day4/day4_8.jpg";
slideshow[3] = "/src/db/photos/day6/day6_14.jpg";
slideshow[4] = "/src/db/photos/day8/day8_30.jpg";
slideshow[5] = "/src/db/photos/day9/day9_22.jpg";
slideshow[6] = "/src/db/photos/day25/day25_2.jpg";
slideshow[7] = "/src/db/photos/day26/day26_6.jpg";
var i = 0; // Index för bildspelet sätts till 0 när sidan laddas
var the_timeout; // Variabel tidsbaserad händelse

function rotateImage() {
  // Rotera bilder på startsidan i ett bildspel
  document.getElementById("slideshowStart").src = slideshow[i];
  i++;
  if (i >= slideshow.length)
    // Om sista bilden visas börjar bildspelet om
    i = 0;
  the_timeout = setTimeout("rotateImage();", 5000); // Byt bild med 5 sekunders intervall
}
