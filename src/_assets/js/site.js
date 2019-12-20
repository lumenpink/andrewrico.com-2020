/*
index: Portfolio | 11ty App | 2019 | https://Andrewrico.com/
------------------------------------------------------------
- Hide on scroll (a)
- Hide on scroll (b)
- Typing
*/

/* ---------------------------------------------
Name: el-drawer
Function: el-drawer 
Location: [ el-drawer]    transform: scale(1, 1)
/*--------------------------------------------- */

const openModal = document.querySelector(".open-modal");
openModal.addEventListener('click', () => {
	document.querySelector(".modal-backdrop").style.display = "block";
	document.querySelector(".modal-container").style.visibility = "visible";
	document.querySelector(".modal-container").style.bottom = "0%";
	document.querySelector(".modal-container").style.top = "0%";
});
const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener('click', () => {
	document.querySelector(".modal-backdrop").style.display = "none";
	document.querySelector(".modal-container").style.visibility = "hidden";
	document.querySelector(".modal-container").style.bottom = "-100%";
});



/* ---------------------------------------------
Name: el-drawer
Function: el-drawer 
Location: [ el-drawer]
/*--------------------------------------------- */
const drawer = document.querySelector('el-drawer')

const drawerStyle = {
	sizePadding: `0.6rem`,
	brandFontSize: `0.8rem`,
	brandFontFamily: `'Dancing Script', cursive`,
	linkFontSize: `1rem`,
	hoverItem: `rgba(232, 232, 232, 0.69)`,
	hoverText: `#000`,
	hoverNavbarText: `var(--color-tertiary)`,
	backgroundColor: `#fff`,
	textColor: `#00000`,
}
drawer.style.setProperty('--drawer-padding', drawerStyle.sizePadding)
drawer.style.setProperty('--drawer-brand-font-size', drawerStyle.brandFontSize)
drawer.style.setProperty('--drawer-brand-font-family', drawerStyle.brandFontFamily)
drawer.style.setProperty('--drawer-link-font-size', drawerStyle.linkFontSize)
drawer.style.setProperty('--drawer-hover-color', drawerStyle.hoverItem)
drawer.style.setProperty('--drawer-hover-text', drawerStyle.hoverText)
drawer.style.setProperty('--drawer-hover-navbar-text', drawerStyle.hoverNavbarText)
drawer.style.setProperty('--drawer-background-color', drawerStyle.backgroundColor)
drawer.style.setProperty('--drawer-text-color', drawerStyle.textColor)




/* ---------------------------------------------
Name: Hide on scroll (a)
Function: Hide navigation panel when scroll down, show when scroll up 
Location: [ Site ]
/*--------------------------------------------- */
// let prevOffset = window.pageYOffset;
// window.onscroll = () => {
// 	let currentOffset = window.pageYOffset;
// 	if (prevOffset > currentOffset) {
// 		document.getElementById("").style.right = "-60px";
// 	} else {
// 		document.getElementById("").style.right = "0px";
// 	}
// 	prevOffset = currentOffset;
// }


/* ---------------------------------------------
Name: Hide on scroll (b)
Function: Hide navigation panel when is window in on header  
Location: [ Site ]
/*--------------------------------------------- */
window.onscroll = () => {
	_hideOnscroll()
};
_hideOnscroll = () => {
	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
		document.getElementById("navigation-panel").style.right = "0px";
	} else {
		document.getElementById("navigation-panel").style.right = "-200px";
	}
}


/* ---------------------------------------------
Name: Typing
Function: Typing in the terminal mimic 
Location: [ Home / card-bio]
/*--------------------------------------------- */
let TypeTxt = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 100;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};
TypeTxt.prototype.tick = function () {
	let i = this.loopNum % this.toRotate.length;
	let fullTxt = this.toRotate[i];
	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
	this.el.innerHTML = '<span class="caret">' + this.txt + '</span>';
	let that = this;
	let delta = 200 - Math.random() * 100;
	if (this.isDeleting) {
		delta /= 2;
	}
	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 100;
	}
	setTimeout(function () {
		that.tick();
	}, delta);
};
window.onload = function () {
	let elements = document.getElementsByClassName('typewrite');
	for (let i = 0; i < elements.length; i++) {
		let toRotate = elements[i].getAttribute('data-type');
		let period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TypeTxt(elements[i], JSON.parse(toRotate), period);
		}
	}
};


/* ---------------------------------------------
Name: form
Function: form 
Location: [ form]
/*--------------------------------------------- */
// const name = document.getElementById('name-schedule')
// const email = document.getElementById('email-schedule')
// const form = document.getElementById('andrewrico-scheduleCall-netlify')
// const errorMessage = document.getElementById('error-message')

// form.addEventListener('submit', (e) => {
// 	let messages = []
// 	if (name.value === '' || name.value == null) {
// 		messages.push('name is required')
// 		errorMessage.style.display = "inline-block";
// 		name.style.backgroundColor = "red";
// 	}

// 	if (email.value.length <= 6) {
// 		messages.push('email must be longer than 6 characters')
// 	}
// 	if (email.value.length >= 20) {
// 		messages.push('email must be less than 20 characters')
// 	}
// 	if (email.value === 'email') {
// 		messages.push('email cannot be password')
// 	}

// 	if (messages.length > 0) {
// 		e.preventDefault()
// 		errorMessage.innerText = messages.join(', ')
// 	}

// })