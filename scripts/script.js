function Menu(sSelector, sMenutype, bToggle){
	
	var m = this;
	
	m.menu = $(sSelector); // наш ul
	m.menuItem = m.menu.find("li");	
	

	m.showHideSubmenu = function(event){ 
		event.preventDefault(); 
		if(bToggle){		
			m.menuItem.children("ul").stop().slideUp();
			console.log("slideUp");
		}
		$(this).children("ul").stop().slideToggle();
		console.log("ok");
		}

		
		if(sMenutype == "accordion"){
		//m.menuItem.css("display", "block");
		//m.menuItem.children("ul").css("position", "static");
		m.menuItem.click(m.showHideSubmenu);
		
		}
		else if(sMenutype == "drop-down"){
		m.menuItem.mouseover(m.showSubmenu); 
		m.menuItem.mouseout(m.hideSubmenu);
		}
}


function Slider(sSelector){
	var s = $(this);
	s.slider = $(sSelector);
	s.slide = s.slider.find(".slide");
	s.current = 1;
	s.max = 3;
	s.interval = 10000
	
	s.load = function(){
		//console.log("slider");
		setInterval(s.changeImg, s.interval); // через каждые 3 секунды (s.interval) вызывать метод s.changeImg
	}
	
	s.changeImg = function(){
			if(s.current >= s.max){
				s.current = 1;
			}
			else{
				s.current ++;	
			}
		var imgPath = "images/" + s.current + ".jpg";	
		s.slide.find(".slide__img").attr("src", imgPath);
		// console.log(s.current);
	}
	
	$(document).ready(s.load); // при загрузки страницы - метод load
	
}
/*
var chet = 1;
			window.onload = function () { setTimeout(frout, 5000); }
			function frout() {
			chet++;
			if (chet>3) {chet=0;}
				switch(chet) {
				case 1:
					document.getElementById('img').src = "images/1.jpg";
					break;
				case 2:
					document.getElementById('img').src = "images/2.jpg";
					break;
				case 3:
					document.getElementById('img').src = "images/3.jpg";
					break;
				}
			setTimeout(frout, 5000);
			}
			*/
	
	