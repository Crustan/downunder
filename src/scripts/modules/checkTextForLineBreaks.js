/**
 * Replace "\n" with HTML <br/> tag
 * TODO: Replace with a simple text.replaceAll("\n", "<br/>")
 *
 * @param {string} text
 * @returns {string}
 */

function checkTextForLineBreaks(text) {
  // Leta igenom text efter radbrytningar (\n) och
  var new_text = ""; // ersätt dessa med <br /> för HTML
  var pos1 = 0;
  var pos2 = 0;
  do {
    pos2 = text.indexOf("\n", pos1);
    if (pos2 > -1) new_text = new_text + text.substring(pos1, pos2) + "<br />";
    else new_text = new_text + text.substring(pos1);
    pos1 = pos2 + 1;
  } while (pos2 > -1);

  return new_text;
}

export { checkTextForLineBreaks };
