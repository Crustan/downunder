/**
 * Load XML from a URL
 *
 * @param {string} url
 * @returns {XMLDocument}
 */

export function loadXML(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  xmlhttp.send();

  return xmlhttp.responseXML;
}
