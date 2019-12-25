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
Location: [ el-drawer]
/*--------------------------------------------- */





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
Name: class _terminalType
Function: Typing in the terminal mimic
Location: [ Home / card-bio]
/*--------------------------------------------- */
class _terminalType {
	constructor(caret, toRotate, period) {
		this.toRotate = toRotate
		this.caret = caret
		this.loopNum = 0
		this.period = parseInt(period, 10) || 100
		this.txt = ''
		this.typing()
		this.deleteTyping = false
	}
	typing() {
		let i = this.loopNum % this.toRotate.length
		let fullTxt = this.toRotate[i]
		if (this.deleteTyping) {
			this.txt = fullTxt.substring(0, this.txt.length - 1)
		}
		else {
			this.txt = fullTxt.substring(0, this.txt.length + 1)
		}
		this.caret.innerHTML = '<span class="caret">' + this.txt + '</span>'
		let _this = this
		let timingTyping = 110 - Math.random() * 100
		if (this.deleteTyping) {
			timingTyping /= 2
		}
		if (!this.deleteTyping && this.txt === fullTxt) {
			timingTyping = this.period
			this.deleteTyping = true
		}
		else if (this.deleteTyping && this.txt === '') {
			this.deleteTyping = false
			this.loopNum++
			timingTyping = 100
		}
		setTimeout(function () {
			_this.typing()
		}, timingTyping)
	}
}
window.onload = function () {
	let typewrite = document.getElementsByClassName('typewrite');
	for (let i = 0; i < typewrite.length; i++) {
		let toRotate = typewrite[i].getAttribute('data-type');
		let period = typewrite[i].getAttribute('data-period');
		if (toRotate) {
			new _terminalType(typewrite[i], JSON.parse(toRotate), period);
		}
	}
};


/* ---------------------------------------------
Name: addEventListener touchstart
Function: addEventListener touchstart 
Location: [ addEventListener touchstart]
/*--------------------------------------------- */
