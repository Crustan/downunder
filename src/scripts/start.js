function initSlideshow() {
  const slideshowImg = document.getElementById("slideshowStart");
  if (!slideshowImg) return;

  const folderPrefix = "/src/db/photos";
  const images = [
    "/day8/day8_19.jpg",
    "/day8/day8_24.jpg",
    "/day4/day4_8.jpg",
    "/day6/day6_14.jpg",
    "/day8/day8_30.jpg",
    "/day9/day9_22.jpg",
    "/day25/day25_2.jpg",
    "/day26/day26_6.jpg",
  ];
  let activeIndex = 0;

  setInterval(() => {
    if (activeIndex >= images.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    slideshowImg.src = folderPrefix + images[activeIndex];
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
});
