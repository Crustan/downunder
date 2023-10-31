/**
 *
 * @param {HTMLImageElement} el - image element to loop
 * @param {string[]} images - a list of URL paths
 * @param {number} interval - ms between each image change
 * @returns
 */

function initSlideshow(el, images = [], interval = 5000) {
  if (!el) return;
  if (!images.length) return;

  let activeIndex = 0;

  setInterval(() => {
    if (activeIndex >= images.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    el.src = images[activeIndex];
  }, interval);
}

export { initSlideshow };
