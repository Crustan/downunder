function loadXMLDoc(url) {
  // Funktion för att ladda in XML-dokumentet med dagböcker
  var xmlhttp = null; // Nollställ

  if (window.XMLHttpRequest) {
    // Kod för IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // Kod för IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET", url, false);
  xmlhttp.send();

  return (xml_document = xmlhttp.responseXML); // Referens till XML-dokumentet
}

function writePerson(name) {
  var xml_document = loadXMLDoc("/src/db/diaries.xml");
  var entries = xml_document.getElementsByTagName("entry"); // Skapa en array med alla inlägg
  var author_entries = new Array(); // Skapa en array med för endast författarens inlägg
  var HTML_diaries = ""; // Tom sträng initieras för den HTML som ska visas i <div id="diaries">
  var HTML_entries = ""; // Tom sträng för HTML som ska visas som dagboksinlägg
  var HTML_content_header = ""; // Tom sträng för HTML som ska visas som rubrik i i <div id="diaries">

  for (var i = 0; i < entries.length; i++) {
    // Kolla upp författaren för varje dagboksinlägg
    var author = entries[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;

    if (author == name)
      // Om författare är samma som vald författare (name)...
      author_entries.push(entries[i]); // ...lägg till författarens inlägg i egen array...
  }
  for (i = 0; i < author_entries.length; i++) {
    // ... och ta fram all info från varje inlägg
    var HTML_entry = ""; // Tom sträng initieras för den HTML som innehåller ETT inlägg
    var author = author_entries[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
    var age = author_entries[i].getElementsByTagName("author")[0].attributes.getNamedItem("age").nodeValue;
    var date = author_entries[i].getElementsByTagName("date")[0].childNodes[0].nodeValue;
    var day = author_entries[i].getElementsByTagName("day")[0].childNodes[0].nodeValue;
    var place = ""; // Tom sträng initieras för place
    var cities = author_entries[i].getElementsByTagName("city");
    var country = author_entries[i].getElementsByTagName("country")[0].childNodes[0].nodeValue;
    var text = author_entries[i].getElementsByTagName("text")[0].childNodes[0].nodeValue;
    //short_date = author_entries[i].getElementsByTagName("date")[0].attributes.getNamedItem("short").nodeValue;

    text = checkTextForLineBreaks(text); // Kolla om radbrytningar finns, isf behåll dessa

    for (var loop = 0; loop < cities.length; loop++) {
      // Skapa en sträng med staden/städerna
      city = cities[loop].childNodes[0].nodeValue;
      if (place == "")
        // Om strängen är tom, lägg till stad
        place = city;
      // Annars lägg till komma-tecken och nästa stad
      else place = place + ", " + city;
    }
    if (cities.length < 3) {
      if (city != "Singapore")
        // Lägg ej till land för Singapore
        place = place + " (" + country + ")"; // Lägg till landet sist i strängen om färre än 3 städer
    }
    HTML_entry =
      "<div id='entry" +
      day +
      "'><h4>" +
      date + // Skapa HTML-kod för inlägget
      "<span class='place'>" +
      place +
      "</h4>" +
      "<p>" +
      text +
      "</p></div>";
    if (i < author_entries.length - 1)
      // Om det finns fler inlägg för dagen, lägg till en avdelare
      HTML_entry = HTML_entry + "<div class='splitter'>•  •  •</div>";

    HTML_entries = HTML_entries + HTML_entry; // Lägg till HTML-koden sist i HTML-kod för alla dagens inlägg
  }
  HTML_content_header = "<h2>" + name + "s resedagbok</h2>"; // Sätt samman HTML-kod
  HTML_diaries = HTML_content_header + HTML_entries;
  document.getElementById("content").innerHTML = HTML_diaries; // Skriv ut HTML-kod i div-taggen diaries
}

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
