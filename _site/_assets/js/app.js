/*
index: Portfolio 11ty App | 2019 | https://Andrewrico.com/
------------------------------------------------
- Typing
- 
- 
*/
/* ---------------------------------------------
name: Typing
Function: Typing 
Location: [ card-bio, (Home) ]
/*--------------------------------------------- */

// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = [
//     "hello, I'am andrew Rico,",
//     "Web developer/uiux engenieer",
//     "a journey",
//     "LIFE"
// ];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//   	setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
// 	if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });

/* ---------------------------------------------
name: copyToClipboard
Function: copyToClipboard 
Location: [ post]
/*--------------------------------------------- */

/* ---------------------------------------------
name: copyToClipboard
Function: copyToClipboard 
Location: [ post]
/*--------------------------------------------- */
let TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 100;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	let i = this.loopNum % this.toRotate.length;
	let fullTxt = this.toRotate[i];

	if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="caret">'+this.txt+'</span>';

	let that = this;
	let delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 100;
	}

	setTimeout(function() {
	that.tick();
	}, delta);
};

window.onload = function() {
	let elements = document.getElementsByClassName('typewrite');
	for (let i=0; i<elements.length; i++) {
		let toRotate = elements[i].getAttribute('data-type');
		let period = elements[i].getAttribute('data-period');
		if (toRotate) {
		  new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	let css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .caret { border-right: 0.08em solid lime}";
	document.body.appendChild(css);
};