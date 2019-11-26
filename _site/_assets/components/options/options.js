const _toggler = document.querySelector(".toggler")
_toggler.addEventListener('click', () => {
	let _options = document.querySelector(".options")
	_options.classList.toggle("toggle-options")
	_motion('.opt-1', 'flip')
	_motion('.opt-2', 'flip')
})

window.addEventListener('click', (e) => {
	if (!e.target.matches('.open-options')) {
		let options = document.getElementsByClassName("options");
		for (let i = 0; i < options.length; i++) {
			let openOptions = options[i];
			if (openOptions.classList.contains('toggle-options')) {
				openOptions.classList.remove('toggle-options');
			}
		}
	}
})

const _motion = (element, animationName, callback) => {

	const _element = document.querySelector(element)
	_element.classList.add('motion', animationName)

	const motionEnd = () => {
		_element.classList.remove('motion', animationName)
		_element.removeEventListener('motionend', motionEnd)
	}
	if (typeof callback === 'function') callback()
	_element.addEventListener('motionend', motionEnd)
}
