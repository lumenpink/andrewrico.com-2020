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
