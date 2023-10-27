function checkKiwi() {
  // Om fönstret är för litet så visas inte kiwifågel
  if (window.innerWidth < 1280)
    // längst ner i höger hörn
    document.getElementById("kiwi").style.visibility = "hidden";
  else document.getElementById("kiwi").style.visibility = "visible";
}
