var img_array = new Array(); // Array skapas för bilder i bildspelet
var entries = new Array(); // Array skapas för dagboksinläggen
var ssPict; // Referens till bildtaggen för bildspelet
var the_day = 0; // Global variabel för vilken dag på resan som visas
var num_of_pics = 0; // Global variabel för antal bilder i bildspel på varje sida

function initPage() {
  if (the_day == 0) {
    // Visa startsidan för dagböcker när day = 0
    document.getElementById("slideshow").style.display = "none"; // Dölj
    document.getElementById("prevNextUp").style.display = "none";
    document.getElementById("prevNextDown").style.display = "none";
    document.getElementById("diaries").style.display = "none";
    document.getElementById("rightCol").style.display = "none";
    document.getElementById("intro").style.display = "block";
    document.getElementById("content").style.minWidth = "700px";
  } else {
    document.getElementById("slideshow").style.display = "block";
    document.getElementById("prevNextUp").style.display = "block";
    document.getElementById("prevNextDown").style.display = "block";
    document.getElementById("diaries").style.display = "block";
    document.getElementById("rightCol").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("content").style.minWidth = "550px";
  }
  if (the_day == 1 || the_day == 2)
    // Foton saknas från dag 1 och 2
    document.getElementById("slideshow").style.display = "none";

  if (the_day == 1)
    // Om dag 1 visas, inaktivera "Föregående dag"
    for (var i = 1; i <= 2; i++) {
      document.getElementById("prev" + i).style.color = "#CCCCCC";
      document.getElementById("prev" + i).style.pointerEvents = "none";
      document.getElementById("next" + i).style.color = ""; // Om man går direkt från sista sidan ska next aktiveras
      document.getElementById("next" + i).style.pointerEvents = "";
    }
  else if (the_day == 35)
    // Om dag 35 (sista dagen) visas, inaktivera "Nästa dag"
    for (var i = 1; i <= 2; i++) {
      document.getElementById("prev" + i).style.color = ""; // Om man går direkt från första sidan ska prev aktiveras
      document.getElementById("prev" + i).style.pointerEvents = "";
      document.getElementById("next" + i).style.color = "#CCCCCC";
      document.getElementById("next" + i).style.pointerEvents = "none";
    }
  // Alla andra dagar ska båda länkarna vara klickbara
  else
    for (var i = 1; i <= 2; i++) {
      document.getElementById("prev" + i).style.color = "";
      document.getElementById("prev" + i).style.pointerEvents = "";
      document.getElementById("next" + i).style.color = "";
      document.getElementById("next" + i).style.pointerEvents = "";
    }
  ssPict = document.getElementById("ssPic");
}

function changeDay(day, pic_amount) {
  var nav_array = document.getElementById("localNav").getElementsByTagName("a");

  if (day == "next") {
    // Om nästa dag anropas...
    the_day = the_day + 1;
    nav_array[the_day - 1].click(); //... klicka på navigeringslänken för nästa dag,
  } // för att få med antal bilder (pic_amount)
  else if (day == "prev") {
    // Om föregående dag anropas...
    the_day = the_day - 1;
    nav_array[the_day - 1].click(); //... klicka på navigeringslänken för föregående dag,
  } // för att få med antal bilder (pic_amount)
  else {
    // Om valfri dag väljs i lokal navigering...
    the_day = day;
    writeDay(); // Ladda om XML och hämta ut rätt dags texter
    initPage(); // Initera sidan
    initSlideShow(the_day, pic_amount); // Initiera bildspelet med aktuell dag och rätt antal bilder
    markDay(the_day); // ...Global variabel the_day tilldelas nytt värde
  }
  for (var i = 1; i < 36; i++) {
    // Visa rätt Mer Info-ruta
    if (i == the_day) document.getElementById("info" + i).style.display = "block";
    else document.getElementById("info" + i).style.display = "none";
  }
}

function markDay(day) {
  // Markera den dag som visas i lokal navigering
  links = document.getElementById("localNav").getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    if (i + 1 == day) links[i].style.background = "#9FD781";
    else links[i].style.background = "#F7F8E1";
  }
}

function initSlideShow(day, pic_amount) {
  // Initiera bildspelet med dagens första foto
  ssPict.src = "/src/db/photos/day" + day + "/day" + day + "_0.jpg";
  num_of_pics = pic_amount;
}

function showPrevPict() {
  // Visa nästa foto i dagens bildspel
  var img_url = ssPict.src; // Hela bildadressen
  var file_name = img_url.substring(img_url.lastIndexOf("/") + 1); // Filnamnet
  var last_nr_pos = file_name.lastIndexOf("_") + Number(1); // Plats för sista understrecket
  var day_pic_nr = file_name.substring(last_nr_pos, file_name.lastIndexOf(".")); // Sorteringsnummer för bild på aktuell dag
  var f_name = file_name.substring(file_name, last_nr_pos); // Filnamnet minus sista siffran och filändelse (också mappnamn)

  if (day_pic_nr != 0)
    // Så länge inte första bilden visas
    ssPict.src = "/src/db/photos/day" + the_day + "/" + f_name + (Number(day_pic_nr) - 1) + ".jpg";
  // Ändra sökvägen till föregående bild
  else ssPict.src = "/src/db/photos/day" + the_day + "/" + f_name + (Number(num_of_pics) - 1) + ".jpg";
}
function showNextPict() {
  // Visa nästa bild i dagens bildspel
  var img_url = ssPict.src; // Hela bildadressen
  var file_name = img_url.substring(img_url.lastIndexOf("/") + 1); // Filnamnet
  var last_nr_pos = file_name.lastIndexOf("_") + Number(1); // Plats för sista understrecket
  var day_pic_nr = file_name.substring(last_nr_pos, file_name.lastIndexOf(".")); // Sorteringsnummer för bild på aktuell dag
  var f_name = file_name.substring(file_name, last_nr_pos); // Filnamnet minus sista siffran och filändelse (också mappnamn)

  if (day_pic_nr != num_of_pics - 1) {
    // Så länge inte sista bilden visas
    ssPict.src = "/src/db/photos/day" + the_day + "/" + f_name + (Number(day_pic_nr) + 1) + ".jpg"; // Ändra sökvägen till nästa bild
  } else {
    // Annars visas första bilden igen
    day_pic_nr = 0;
    ssPict.src = "/src/db/photos/day" + the_day + "/" + f_name + Number(day_pic_nr) + ".jpg";
  }
}

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

function writeDay() {
  var xml_document = loadXMLDoc("/src/db/diaries.xml");
  var entries = xml_document.getElementsByTagName("entry"); // Skapa en array med alla inlägg

  var date_entries = new Array(); // Skapa en array med endast dagens inlägg
  var HTML_diaries = ""; // Tom sträng initieras för den HTML som ska visas i <div id="diaries">
  var HTML_entries = ""; // Tom sträng för HTML som ska visas som dagboksinlägg
  var HTML_content_header = ""; // Tom sträng för HTML som ska visas som rubrik i <div id="diaries">

  for (var i = 0; i < entries.length; i++) {
    // Kolla upp datumet för varje dagboksinlägg
    var entry_day = entries[i].getElementsByTagName("day")[0].childNodes[0].nodeValue;

    if (entry_day == the_day)
      // Om inläggsdag är samma som sidans dag (the_day)...
      date_entries.push(entries[i]); // ...lägg till dagens inlägg i egen array...
  }
  for (i = 0; i < date_entries.length; i++) {
    // ... och ta fram all info från varje inlägg
    var HTML_entry = ""; // Tom sträng initieras för den HTML som innehåller ETT inlägg
    var author = date_entries[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
    var age = date_entries[i].getElementsByTagName("author")[0].attributes.getNamedItem("age").nodeValue;
    var date = date_entries[i].getElementsByTagName("date")[0].childNodes[0].nodeValue;
    var day = date_entries[i].getElementsByTagName("day")[0].childNodes[0].nodeValue;
    var place = ""; // Tom sträng initieras för place
    var cities = date_entries[i].getElementsByTagName("city");
    var country = date_entries[i].getElementsByTagName("country")[0].childNodes[0].nodeValue;
    var text = date_entries[i].getElementsByTagName("text")[0].childNodes[0].nodeValue;
    //short_date = date_entries[i].getElementsByTagName("date")[0].attributes.getNamedItem("short").nodeValue;

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
    if (cities.length < 3) if (city != "Singapore") place = place + " (" + country + ")"; // Lägg till landet sist i strängen

    HTML_entry =
      "<span class='author'>" +
      author +
      ", " +
      age +
      " år</span>" + // Skapa HTML-kod för inlägget
      "<p>" +
      text +
      "</p>";
    if (i < date_entries.length - 1)
      // Om det finns fler inlägg för dagen, lägg till en avdelare
      HTML_entry = HTML_entry + "<div class='splitter'>•  •  •</div>";

    HTML_entries = HTML_entries + HTML_entry; // Lägg till HTML-koden sist i HTML-kod för alla dagens inlägg
  }
  // Skapa HTML-kod för sidans rubriker
  HTML_content_header = "<h2>" + date + "<span class='day'>Dag " + day + "</span></h2>" + "<h3>" + place + "</h3>";
  HTML_diaries = HTML_content_header + HTML_entries;
  document.getElementById("diaries").innerHTML = HTML_diaries; // Skriv ut HTML-kod i div-taggen diaries
  document.title = "Söderberg Down Under | Resedagböcker | " + date; // Ändra fönstertitel
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

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});
