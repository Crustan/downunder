// JavaScript Full Screen Slideshow
<!-- hide me from older browsers
	var ss_picture;																		// Global variabel för bild-taggen
	var pic_amount = 0;																	// Global variabel för antalet bilder i bildspelet
	var the_day = 0;																	// Global variabel för dagen som visas initieras
	var the_timeout;
		
	function showSlideshow (day,amount) {												// Visar ett upphöjt bildspel med aktuell dag
		pic_amount = amount;															// ... antal bilder för dagen skickas med som parameter
		the_day = day;
		ss_picture = document.getElementById("ssPicture");															
		ss_picture.src = "album/day" +the_day+ "/day" +the_day+ "_0.jpg";					// Bildtaggens url sätts till dagens första bild
		
		document.getElementById("fullScrSlideshowDim").style.visibility = "visible";	// Den dimmade bakgrunden visas
		document.body.style.overflow = "hidden";										// Scrollfunktionen avaktiveras
			
		var win_height = window.innerHeight;
		var nav_l = document.getElementById("ssNavLeft");								// Variabel för vänster/föregående navigeringspil
		var nav_r = document.getElementById("ssNavRight");								// Variabel för höger/nästa navigeringspil
		var nav_height = nav_l.offsetHeight;											
		var nav_pos_top = (win_height - nav_height)/2;									
		nav_l.style.bottom = nav_pos_top + "px";										// Positionera navigering rätt
		nav_r.style.bottom = nav_pos_top + "px";

		the_timeout = setTimeout("placePict()",1);
		
	}
	function placePict() {
		var ss_area = document.getElementById("fullScrSlideshow");						// Variabel för bildspelets yta/div-tagg		
		ss_area.style.visibility = "visible";											// Bildspelets div-tagg visas	
		
		var div_width = ss_area.offsetWidth;											// Följande rader placerar bildspelet i fönstrets mitt
		var div_height = ss_area.offsetHeight;											// oavsett om bilden är liggande eller stående
		var win_width = window.innerWidth;
		var win_height = window.innerHeight;
		var div_pos_left = (win_width - div_width)/2;
		var div_pos_top = (win_height - div_height)/2;
		ss_area.style.left = div_pos_left + "px";
		ss_area.style.top = div_pos_top + "px";
		the_timeout = setTimeout("placePict()",1);
	}
	function hideSlideshow() {
		clearTimeout(the_timeout);
		document.getElementById("fullScrSlideshowDim").style.visibility = "hidden";	
		document.getElementById("fullScrSlideshow").style.visibility = "hidden";
		document.body.style.overflow = "";												// Scrollfunktionen aktiveras
	}
	function showPrevPict() {															// Visa nästa foto i dagens bildspel
		var img_url = ss_picture.src;													// Hela bildadressen
		var file_name = img_url.substring(img_url.lastIndexOf("/") + 1);				// Filnamnet
		var last_nr_pos = file_name.lastIndexOf("_") + Number(1);						// Plats för sista understrecket
		var day_pic_nr = file_name.substring(last_nr_pos, file_name.lastIndexOf("."));	// Sorteringsnummer för bild på aktuell dag
		clearTimeout(the_timeout);
		if (day_pic_nr != 0)															// Så länge inte första bilden visas 
			ss_picture.src = "album/day" +the_day+ "/day" +the_day+ "_" + Number(day_pic_nr-1) + ".jpg";	// Ändra sökvägen till föregående bild
		else
			ss_picture.src = "album/day" +the_day+ "/day" +the_day+ "_" + Number(pic_amount-1) + ".jpg";	// Annars, visa sista bilden
		the_timeout = setTimeout("placePict()",10);
		
	}
	function showNextPict() {															// Visa nästa bild i dagens bildspel
		var img_url = ss_picture.src;														// Hela bildadressen
		var file_name = img_url.substring(img_url.lastIndexOf("/") + 1);				// Filnamnet
		var last_nr_pos = file_name.lastIndexOf("_") + Number(1);						// Plats för sista understrecket
		var day_pic_nr = file_name.substring(last_nr_pos, file_name.lastIndexOf("."));	// Sorteringsnummer för bild på aktuell dag
		clearTimeout(the_timeout);
		if (day_pic_nr != pic_amount-1) {												// Så länge inte sista bilden visas
			ss_picture.src = "album/day" +the_day+ "/day" +the_day+ "_" + (Number(day_pic_nr)+1) + ".jpg";	// Ändra sökvägen till nästa bild
		}
		else {																			// Annars visas första bilden igen
			day_pic_nr = 0;
			ss_picture.src = "album/day" +the_day+ "/day" +the_day+ "_" + Number(day_pic_nr) + ".jpg";
		}
		the_timeout = setTimeout("placePict()",10);
	}
// show me -->
