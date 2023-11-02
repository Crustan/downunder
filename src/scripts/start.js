import { initSlideshow } from "./modules/initSlideshow.js";

document.addEventListener("DOMContentLoaded", () => {
  const slideshowElement = document.getElementById("slideshowStart");
  const images = [
    "/src/db/photos/day8/day8_19.jpg",
    "/src/db/photos/day8/day8_24.jpg",
    "/src/db/photos/day4/day4_8.jpg",
    "/src/db/photos/day6/day6_14.jpg",
    "/src/db/photos/day8/day8_30.jpg",
    "/src/db/photos/day9/day9_22.jpg",
    "/src/db/photos/day25/day25_2.jpg",
    "/src/db/photos/day26/day26_6.jpg",
  ];

  initSlideshow(slideshowElement, images);
});
