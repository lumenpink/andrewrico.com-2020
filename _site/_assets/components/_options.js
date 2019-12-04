// const _toggler = document.querySelector(".toggler")
// _toggler.addEventListener('click', () => {
// 	let _options = document.querySelector(".options")
// 	_options.classList.toggle("toggle-options")
// 	_motion('.opt-1', 'flip')
// 	_motion('.opt-2', 'flip')
// })

// window.addEventListener('click', (e) => {
// 	if (!e.target.matches('.open-options')) {
// 		let options = document.getElementsByClassName("options");
// 		for (let i = 0; i < options.length; i++) {
// 			let openOptions = options[i];
// 			if (openOptions.classList.contains('toggle-options')) {
// 				openOptions.classList.remove('toggle-options');
// 			}
// 		}
// 	}
// })

// const _motion = (element, animationName, callback) => {

// 	const _element = document.querySelector(element)
// 	_element.classList.add('motion', animationName)

// 	const motionEnd = () => {
// 		_element.classList.remove('motion', animationName)
// 		_element.removeEventListener('motionend', motionEnd)
// 	}
// 	if (typeof callback === 'function') callback()
// 	_element.addEventListener('motionend', motionEnd)
// }


// <aside id="optionsPanel">



//     <button class="open-options">
//         <a href="/">
//             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
//                 <path d="M512 295.222l-256-198.713-256 198.714v-81.019l256-198.713 256 198.714zM448 288v192h-128v-128h-128v128h-128v-192l192-144z"></path>
//             </svg>
//         </a>
//         <span class="tooltip"><span>Homepage</span></span>
//     </button>


//     <button class="toggler open-options">
//         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
//             <path d="M256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM64 256c0-106.039 85.961-192 192-192v384c-106.039 0-192-85.961-192-192z"></path>
//         </svg>
//         <div class="options">
//             <span id="lighter">
//                 <img class="opt-1" src="https://via.placeholder.com/150" alt="DarkMode">
//             </span>
//             <span id="darker">
//                 <img class="opt-2" src="https://via.placeholder.com/150" alt="LightMode">
//             </span>
//         </div>
//         <span class="tooltip"><span>Theme Mode</span></span>
//     </button>


//     <button class="open-options">
//         <a href="#">
//             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
//                 <path d="M0 256c0 141.385 114.615 256 256 256s256-114.615 256-256-114.615-256-256-256-256 114.615-256 256zM464 256c0 114.875-93.125 208-208 208s-208-93.125-208-208 93.125-208 208-208 208 93.125 208 208z"></path>
//                 <path d="M353.372 334.628l45.256-45.256-142.628-142.627-142.627 142.628 45.254 45.254 97.373-97.372z"></path>
//             </svg>
//         </a>
//         <span class="tooltip"><span>Scrolll Up</span></span>
//     </button>

    
// </aside>


// #optionsPanel {
// 	position: fixed;
// 	display: -webkit-box;
// 	display: -ms-flexbox;
// 	display: flex;
// 	-ms-flex-direction: column;
// 	flex-direction: column;
// 	justify-content: space-around;
// 	bottom: 0;
// 	right: 0;
// 	min-height: 300px;
// 	max-height:768px;
// 	z-index: 5000;
// }

// @media only screen and (max-height: 468px) {
// 	#optionsPanel {
// 		display: none;
// 	}
// }

// #optionsPanel button {
// 	padding: 1rem;
// 	margin: 1.4rem 0;
// }

// #optionsPanel svg {
// 	pointer-events: none;
// }

// .open-options {
// 	position: relative;
// 	display: -webkit-inline-box;
// 	display: -ms-inline-flexbox;
// 	display: inline-flex;
// 	-ms-flex-pack: distribute;
// 	justify-content: space-around;
// 	-webkit-box-align: center;
// 	-ms-flex-align: center;
// 	align-items: center;
// 	cursor: pointer;
// 	outline: 0;
// 	border: 0;
// 	margin: 0;
// 	font-size: 32px ;
// 	max-width: 2em ;
// 	min-width: 2em ;
// 	background: transparent;
// 	color: var(--color-black, #0000);
// 	-webkit-box-shadow: none;
// 	box-shadow: none;
// 	-webkit-user-select: none;
// 	-moz-user-select: none;
// 	-ms-user-select: none;
// 	user-select: none;
// 	z-index: 1;
// }

// .open-options:active {
// 	-webkit-transform: translateY(4px);
// 	transform: translateY(4px);
// }

// .options {
// 	display: none;
// 	position: absolute;
// 	right: 80px;
// 	top: -20px;
// 	background-color: transparent;
// 	z-index: 1;
// }

// .toggle-options {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	flex-direction: column;
// }

// .options [class*="opt-"] {
// 	width: 1.2em;
// 	display: flex;
// 	border-radius: 50%;
// }

// .options [class*="opt-"]:hover {
// 	outline: 1px dotted #868686;
// }

// .options .opt-1 {
// 	margin-bottom: 0.25em;
// }
// .options .opt-2 {
// 	margin-top: 0.25em ;
// }



// .tooltip {
// 	pointer-events: none;
// 	position: relative;
// 	background: rgba(0, 0, 0, 0);
// 	color: gray;
// 	right: 16px;
// 	bottom: 48px;
// 	font-weight: 100;
// 	text-transform: lowercase;
// 	line-height: 16px;
// 	margin: 0;
// 	padding: 0;
// 	border-radius: 6px;
// 	white-space: nowrap;
// 	opacity: 0;
// 	-webkit-backface-visibility: hidden;
// 	backface-visibility: hidden;
// 	display: none;
// 	text-shadow: none !important;
// }

// .open-options:hover .tooltip {
// 	font-size: 12px;
// 	position: absolute;
// 	opacity: 1;
// 	display: inline-block;
// }

// .tooltip span {
// 	font-size: 10px !important;
// }

// .motion {
// 	-webkit-animation-duration: 1s;
// 	animation-duration: 1s;
// 	-webkit-animation-fill-mode: both;
// 	animation-fill-mode: both;
// }

// @-webkit-keyframes flip {
// 	from {
// 		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
// 		transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
// 		-webkit-animation-timing-function: ease-in;
// 		animation-timing-function: ease-in;
// 		opacity: 0;
// 	}

// 	40% {
// 		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
// 		transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
// 		-webkit-animation-timing-function: ease-in;
// 		animation-timing-function: ease-in;
// 	}

// 	60% {
// 		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
// 		transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
// 		opacity: 1;
// 	}

// 	80% {
// 		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
// 		transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
// 	}

// 	to {
// 		-webkit-transform: perspective(400px);
// 		transform: perspective(400px);
// 	}
// }

// @keyframes flip {
// 	from {
// 		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
// 		transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
// 		-webkit-animation-timing-function: ease-in;
// 		animation-timing-function: ease-in;
// 		opacity: 0;
// 	}

// 	40% {
// 		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
// 		transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
// 		-webkit-animation-timing-function: ease-in;
// 		animation-timing-function: ease-in;
// 	}

// 	60% {
// 		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
// 		transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
// 		opacity: 1;
// 	}

// 	80% {
// 		-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
// 		transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
// 	}

// 	to {
// 		-webkit-transform: perspective(400px);
// 		transform: perspective(400px);
// 	}
// }

// .flip {
// 	-webkit-backface-visibility: visible !important;
// 	backface-visibility: visible !important;
// 	-webkit-animation-name: flip;
// 	animation-name: flip;
// }