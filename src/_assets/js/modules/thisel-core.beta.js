// create el-section template.
const elSectionCSS = `:host {  display: block;width:100%; } :host > * { color:inherit; } :host > section { display:block; }`;
const elSectionHTML = `<section><slot></slot></section>`;
const elSectionTemplate = document.createElement("template");
elSectionTemplate.innerHTML = `<style>`.concat(elSectionCSS, `</style>`).concat(elSectionHTML);
// defines el-section tag.
customElements.define('el-section',
	class elSection extends HTMLElement {
		constructor() {
			super();
			let _thisElSection = this;
			// open shadow.
			const shadowRoot = _thisElSection.attachShadow({
				mode: "open"
			});
			// clone template. 
			shadowRoot.appendChild(elSectionTemplate.content.cloneNode(!0));
			return _thisElSection;
		}
		connectedCallback() {
			let _elSection = this;
			// inject css attributes.
			const _sections = document.querySelectorAll("el-section");
			_sections.forEach(_section => {
				_elSection.hasAttribute("display") && (
					_elSection.styleDisplay = _elSection.getAttribute("display"),
					_elSection.style.display = _elSection.styleDisplay ? _elSection.styleDisplay : null
				)
				_elSection.hasAttribute("flex-align") && (
					_elSection.styleFlexAlign = _elSection.getAttribute("flex-align"),
					_elSection.style.justifyContent = _elSection.styleFlexAlign ? _elSection.styleFlexAlign : null,
					_elSection.style.alignItems = _elSection.styleFlexAlign ? _elSection.styleFlexAlign : null,
					_elSection.style.WebkitJustifyContent = _elSection.styleFlexAlign ? _elSection.styleFlexAlign : null,
					_elSection.style.WebkitAlignItems = _elSection.styleFlexAlign ? _elSection.styleFlexAlign : null
				)
				_elSection.hasAttribute("background") && (
					_elSection.styleBackground = _elSection.getAttribute("background"),
					_elSection.style.background = _elSection.styleBackground ? _elSection.styleBackground : null
				)
				_elSection.hasAttribute("color") && (
					_elSection.styleColor = _elSection.getAttribute("color"),
					_elSection.style.color = _elSection.styleColor ? _elSection.styleColor : null
				)
				_elSection.hasAttribute("height") && (
					_elSection.styleHeight = _elSection.getAttribute("height") + "vh",
					_elSection.style.minHeight = _elSection.styleHeight ? _elSection.styleHeight : null
				)
				_elSection.hasAttribute("padding-gap") && (
					_elSection.stylePadding = _elSection.getAttribute("padding-gap") + "rem",
					_elSection.style.paddingTop = _elSection.stylePadding ? _elSection.stylePadding : null,
					_elSection.style.paddingBottom = _elSection.stylePadding ? _elSection.stylePadding : null
				)
				_elSection.hasAttribute("padding-top") && (
					_elSection.stylePaddingTop = _elSection.getAttribute("padding-top") + "rem",
					_elSection.style.paddingTop = _elSection.stylePaddingTop ? _elSection.stylePaddingTop : null
				)
				_elSection.hasAttribute("padding-bottom") && (
					_elSection.stylePaddingBottom = _elSection.getAttribute("padding-bottom") + "rem",
					_elSection.style.paddingBottom = _elSection.stylePaddingBottom ? _elSection.stylePaddingBottom : null
				)
			})
		}
	}
);
// create el-grid template.
const elGridCSS = `:host {
	--el-grid-gutter: 0;
    --el-grid-max-width: 1366px;
    --el-grid-width: 100%;
    display: -ms-grid;
    display: grid;
    grid-gap: var(--el-grid-gutter, 025rem);
    margin: var(--el-grid-gutter, 0) auto;
    max-width: var(--el-grid-max-width, 1366px);
	width: var(--el-grid-width, 100%)

}

@media(max-width:768px) {
    :host {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)) !important
    }
}

`;
const elGridHTML = "<slot></slot>";
const elGridTemplate = document.createElement("template");
elGridTemplate.innerHTML = `<style>`.concat(elGridCSS, `</style>`).concat(elGridHTML);
// defines el-grid tag.
customElements.define('el-grid',
	class elGrid extends HTMLElement {
		constructor() {
			super();
			const _thisElGrid = this;
			// open shadowRoot.
			const shadowRoot = _thisElGrid.attachShadow({
				mode: "open"
			});
			// clone template. 
			shadowRoot.appendChild(elGridTemplate.content.cloneNode(!0));
			return _thisElGrid;
		}
		connectedCallback() {
			const _elGrid = this;
			// inject css attributes.
			const _grids = document.querySelectorAll('el-grid');
			_grids.forEach(_grid => {
				_elGrid.hasAttribute("display") && (
					_elGrid.styleDisplay = _elGrid.getAttribute("display"),
					_elGrid.style.display = _elGrid.styleDisplay ? _elGrid.styleDisplay : null
				)
				_elGrid.hasAttribute("columns") && (
					_elGrid.styleColumns = _elGrid.getAttribute("columns"),
					_elGrid.style.gridTemplateColumns = `repeat(` + _elGrid.styleColumns + `, 1fr)` ? `repeat(` + _elGrid.styleColumns + `, 1fr)` : null
				)
				_elGrid.hasAttribute("template-columns") && (
					_elGrid.styleColumns = _elGrid.getAttribute("template-columns"),
					_elGrid.style.gridTemplateColumns = _elGrid.styleColumns ? _elGrid.styleColumns : null
				)
				_elGrid.hasAttribute("gap") && (
					_elGrid.styleGap = _elGrid.getAttribute("gap") + "em",
					_elGrid.style.gridGap = _elGrid.styleGap ? _elGrid.styleGap : null
				)
				_elGrid.hasAttribute("grid-gap") && (
					_elGrid.stylePadding = _elGrid.getAttribute("grid-gap") + "rem",
					_elGrid.style.paddingTop = _elGrid.stylePadding ? _elGrid.stylePadding : null,
					_elGrid.style.paddingBottom = _elGrid.stylePadding ? _elGrid.stylePadding : null
				)
				_elGrid.hasAttribute("width") && (
					_elGrid.styleWidth = _elGrid.getAttribute("width") + "%",
					_elGrid.style.width = _elGrid.styleWidth ? _elGrid.styleWidth : null
				)
				_elGrid.hasAttribute("max-width") && (
					_elGrid.styleMaxWidth = _elGrid.getAttribute("max-width") + "%",
					_elGrid.style.maxWidth = _elGrid.styleMaxWidth ? _elGrid.styleMaxWidth : null
				)
				_elGrid.hasAttribute("pixel-width") && (
					_elGrid.styleMaxWidth = _elGrid.getAttribute("pixel-width") + "px",
					_elGrid.style.maxWidth = _elGrid.styleMaxWidth ? _elGrid.styleMaxWidth : null
				)
			})
		}
	}
);
// create el-column template.
const elColumnCSS = `:host {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: var(--el-grid-gutter, 0);
    margin: var(--el-grid-gutter, 0);
    padding: var(--el-grid-gutter, 0)
}

:host([grid="row"]) {
    grid-column: 1/-1;
}

@media(max-width:768px) {
    ::slotted([attr=auto-fit]),
    :host([attr=auto-fit]) {
        display: -ms-grid;
        display: grid;
        grid-gap: 0;
        margin: 0;
		grid-template-columns: 1fr!important;
    }
}
`;
const elColumnHTML = "<slot></slot>";
const elColumnTemplate = document.createElement("template");
elColumnTemplate.innerHTML = `<style>`.concat(elColumnCSS, `</style>`).concat(elColumnHTML);
// defines el-column tag.
customElements.define('el-column',
	class elColumn extends HTMLElement {
		constructor() {
			super();
			const _thisElColumn = this;
			// open shadowRoot.
			const shadowRoot = _thisElColumn.attachShadow({
				mode: "open"
			});
			// clone template. 
			shadowRoot.appendChild(elColumnTemplate.content.cloneNode(!0));
			return _thisElColumn;
		}
		connectedCallback() {
			const elColumn = this;
			// inject css attributes.
			const _elColumns = document.querySelectorAll('el-column');

			_elColumns.forEach(_elColumn => {
				elColumn.hasAttribute("display") && (
					elColumn.styleDisplay = elColumn.getAttribute("display"),
					elColumn.style.display = elColumn.styleDisplay ? elColumn.styleDisplay : null
				)
				elColumn.hasAttribute("gutter") && (
					elColumn.styleGap = elColumn.getAttribute("gutter") + "rem",
					elColumn.style.gridGap = elColumn.styleGap ? elColumn.styleGap : null
				)
				elColumn.hasAttribute("columns") && (
					elColumn.styleColumns = elColumn.getAttribute("columns"),
					elColumn.style.gridTemplateColumns = `repeat(` + elColumn.styleColumns + `, 1fr)` ? `repeat(` + elColumn.styleColumns + `, 1fr)` : null
				)
				elColumn.hasAttribute("justify-items") && (
					elColumn.styleJustifyItems = elColumn.getAttribute("justify-items"),
					elColumn.style.justifyItems = elColumn.styleJustifyItems ? elColumn.styleJustifyItems : null,
					elColumn.style.WebkitJustifyItems = elColumn.styleJustifyItems ? elColumn.styleJustifyItems : null
				)
				elColumn.hasAttribute("flex-direction") && (
					elColumn.styleDirection = elColumn.getAttribute("flex-direction"),
					elColumn.style.flexDirection = elColumn.styleDirection ? elColumn.styleDirection : null,
					elColumn.style.WebkitFlexDirection = elColumn.styleDirection ? elColumn.styleDirection : null
				)
				elColumn.hasAttribute("align-items") && (
					elColumn.styleAlignItems = elColumn.getAttribute("align-items"),
					elColumn.style.alignItems = elColumn.styleAlignItems ? elColumn.styleAlignItems : null,
					elColumn.style.WebkitAlignItems = elColumn.styleAlignItems ? elColumn.styleAlignItems : null
				)
				elColumn.hasAttribute("justify-content") && (
					elColumn.styleJustifyContent = elColumn.getAttribute("justify-content"),
					elColumn.style.justifyContent = elColumn.styleJustifyContent ? elColumn.styleJustifyContent : null,
					elColumn.style.WebkitJustifyContent = elColumn.styleJustifyContent ? elColumn.styleJustifyContent : null
				)
				elColumn.hasAttribute("flex-align") && (
					elColumn.styleFlexAlign = elColumn.getAttribute("flex-align"),
					elColumn.style.justifyContent = elColumn.styleFlexAlign ? elColumn.styleFlexAlign : null,
					elColumn.style.alignItems = elColumn.styleFlexAlign ? elColumn.styleFlexAlign : null,
					elColumn.style.WebkitJustifyContent = elColumn.styleFlexAlign ? elColumn.styleFlexAlign : null,
					elColumn.style.WebkitAlignItems = elColumn.styleFlexAlign ? elColumn.styleFlexAlign : null
				)
				elColumn.hasAttribute("text-align") && (
					elColumn.styleTextAlign = elColumn.getAttribute("text-align"),
					elColumn.style.textAlign = elColumn.styleTextAlign ? elColumn.styleTextAlign : null
				)
				elColumn.hasAttribute("padding") && (
					elColumn.stylePadding = elColumn.getAttribute("padding") + "em",
					elColumn.style.padding = elColumn.stylePadding ? elColumn.stylePadding : null
				)
				elColumn.hasAttribute("margin") && (
					elColumn.styleMargin = elColumn.getAttribute("margin") + "em",
					elColumn.style.margin = elColumn.styleMargin ? elColumn.styleMargin : null
				)
				elColumn.hasAttribute("center") && (
					elColumn.styleMargin = elColumn.getAttribute("center"),
					elColumn.style.margin = elColumn.styleMargin ? elColumn.styleMargin : null
				)
				elColumn.hasAttribute("max-width") && (
					elColumn.styleMaxWidth = elColumn.getAttribute("max-width"),
					elColumn.style.maxWidth = elColumn.styleMaxWidth ? elColumn.styleMaxWidth : null
				)
				elColumn.hasAttribute("max-height") && (
					elColumn.styleMaxHeight = elColumn.getAttribute("max-height"),
					elColumn.style.maxHeight= elColumn.styleMaxHeight ? elColumn.styleMaxHeight : null
				)
			})
		}
	}
);


// create el-copyright template.
const elCopyrightFullYear = new Date().getFullYear();
const elCopyrightCSS = `:host{ display: flex;justify-content:center; white-space: nowrap; font-family:'Source Code Pro', -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size:0.8rem; text-decoration:none;}:host h1{ white-space: nowrap; margin:0;font-family:sans-serif; font-size:0.8rem;font-weight:100; }`;
const elCopyrightHTML = `<h1> ©  ${elCopyrightFullYear} <slot name="copyright"> copyright </slot> </h1>`;
const elCopyrightTemplate = document.createElement("template");
elCopyrightTemplate.innerHTML = `<style>`.concat(elCopyrightCSS, `</style>`).concat(elCopyrightHTML);
// defines el-copyright tag.
customElements.define('el-copyright',
	class elCopyright extends HTMLElement {
		constructor() {
			super();
			let _thisElCopyright = this;
			// open shadowRoot.
			const shadowRoot = _thisElCopyright.attachShadow({
				mode: "open"
			}); 
			// clone template. 
			shadowRoot.appendChild(elCopyrightTemplate.content.cloneNode(!0));
			return _thisElCopyright;
		}
		connectedCallback() {
			let elCopyright = this;
			// inject css attributes.
			const _elCopyrights = document.querySelectorAll('el-loading');
			_elCopyrights.forEach(_elCopyright => {
				elCopyright.hasAttribute("margin") && (
					elCopyright.styleMargin = elCopyright.getAttribute("margin") + "rem",
					elCopyright.style.margin = elCopyright.styleMargin ? elCopyright.styleMargin : null
				)
			})
		}
	}
);
// create el-loading template.
const elLoadingCSS = `:host{display:block}:host{position:fixed;padding:0;margin:0;top:0;left:0;font-size:2rem;width:100%;height:100%;visibility:hidden;background:var(--primary-color,#000);color:#ffff;-o-object-fit:cover;object-fit:cover;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:99999999;-webkit-transition:opacity ease-in .1s;-o-transition:opacity ease-in .1s;transition:opacity ease-in .1s;-webkit-animation-name:show;animation-name:show;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes show{0%{visibility:visible;opacity:1}90%{visibility:visible;opacity:1}100%{visibility:hidden;opacity:0;z-index:0}}@keyframes show{0%{visibility:visible;opacity:1}90%{visibility:visible;opacity:1}100%{visibility:hidden;opacity:0;z-index:0}}`;
const elLoadingHTML = `<slot><slot name="loading"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:none"> <circle cx="50" cy="50" r="33.008" fill="none" stroke="var(--color-white, gray)" stroke-width="4"> <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur=".9" keySplines="0 0.2 0.8 1" begin="-0.45s" repeatCount="indefinite"/> <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur=".9" keySplines="0.2 0 0.8 1" begin="-0.45s" repeatCount="indefinite"/> </circle> <circle cx="50" cy="50" r="13.404" fill="none" stroke="var(--color-primary, white)" stroke-width="4"> <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur=".9" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"/> <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur=".9" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"/> </circle> </svg></slot></slot>`;
const elLoadingTemplate = document.createElement("template");
elLoadingTemplate.innerHTML = `<style>`.concat(elLoadingCSS, `</style>`).concat(elLoadingHTML);
// defines el-loading tag.
customElements.define('el-loading',
	class elLoading extends HTMLElement {
		constructor() {
			super();
			let _thisElLoading = this;
			// open shadowRoot.
			const shadowRoot = _thisElLoading.attachShadow({
				mode: "open"
			});
			// clone template. 
			shadowRoot.appendChild(elLoadingTemplate.content.cloneNode(!0));
			return _thisElLoading;
		}
		connectedCallback() {
			let elLoading = this;
			// inject css attributes.
			const _elLoadings = document.querySelectorAll('el-loading');
			_elLoadings.forEach(_elLoading => {
				elLoading.hasAttribute("background") && (
					elLoading.styleBackground = elLoading.getAttribute("background"),
					elLoading.style.background = elLoading.styleBackground ? elLoading.styleBackground : null
				)
				elLoading.hasAttribute("color") && (
					elLoading.styleColor = elLoading.getAttribute("color"),
					elLoading.style.color = elLoading.styleColor ? elLoading.styleMargin : null
				)
				elLoading.hasAttribute("duration") && (
					elLoading.styleAnimationDuration = elLoading.getAttribute("duration") + "s",
					elLoading.style.animationDuration = elLoading.styleAnimationDuration ? elLoading.styleAnimationDuration : null
				);
			})
		}
	}
);
// create el-button template.
const elButtonCSS = `:host {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    overflow: hidden;
    top: 0;
    left: 0;
	border-radius: 2px;
    min-width: 150px;
    width: 100%;
    max-width: 300px;
    height: 50px;
    font-family: var(--font-family-content);
    --color-active: #396afc;
    --color-active: -webkit-linear-gradient(to bottom, #2948ff, #396afc);
    --color-active: linear-gradient(to bottom, #2948ff, #396afc);
	--color-hover: #0080ff
}

:host([size=small]) {
    width: 150px
}

:host([size=medium]) {
    width: 250px
}

:host([size=large]) {
    width: 300px
}

:host([size=chip]) {
    width: auto;
    min-width: auto;
    overflow: visible;
    height: auto
}

:host:before {
    content: '';
    position: absolute;
    display: block;
    background: var(--color-ripple, #fff);
    border-radius: 50%;
    pointer-events: none;
    top: calc(var(--y) * 1px);
    left: calc(var(--x) * 1px);
    width: calc(var(--d) * 1px);
    height: calc(var(--d) * 1px);
    opacity: calc(var(--o, 1) * var(--ripple-opacity, .6));
    -webkit-transition: calc(var(--t, 0) * var(--ripple-duration, 100ms)) var(--ripple-easing, linear);
    -webkit-transition: calc(var(--t, 0) * var(--ripple-duration, 400ms)) var(--ripple-easing, linear);
    -o-transition: calc(var(--t, 0) * var(--ripple-duration, 400ms)) var(--ripple-easing, linear);
    transition: calc(var(--t, 0) * var(--ripple-duration, 400ms)) var(--ripple-easing, linear);
    -webkit-transform: translate(-50%, -50%) scale(var(--s, 1));
    -ms-transform: translate(-50%, -50%) scale(var(--s, 1));
    transform: translate(-50%, -50%) scale(var(--s, 1));
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center
}

::slotted(*) {
    outline: 0;
    padding: .75rem;
    cursor: pointer;
    width: 100%;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    text-decoration: none;
    text-align: inherit;
    text-transform: uppercase!important;
    font-weight: 700;
    font-size: 1em;
    white-space: normal;
    cursor: pointer;
    -webkit-transition: ease-in-out .5s;
    -o-transition: ease-in-out .5s;
    transition: ease-in-out .5s
}

::slotted(*) {
    background: #ecececaa;
    color: gray !important;
    border: 1px solid #ecececaa
}

::slotted(:hover) {
    background: #c8c8c8;
    color: var(--color-black, #000) !important;
    border: 1px solid var(--color-black, #000)
}

::slotted(:active) {
    background: #fff;
    color: var(--color-black, #000) !important;
    border: 1px solid var(--color-black, #000)
}

::slotted([extended=button]) {
    background: 0 0;
    color: gray !important;
    border: 1px solid gray
}

::slotted([extended=chip]) {
    background: #f4f4f4;
    width: 2.5rem;
    height: 2.5rem;
    font-size: .7rem !important;
    font-weight: 100;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #000 !important;
    border: 1px solid #cbcbcb;
    -webkit-box-shadow: 0 1px #cbcbcb;
    box-shadow: 0 1px #cbcbcb;
    -webkit-transition: 0s;
    -o-transition: 0s;
    transition: 0s;
    margin: 1rem
}

::slotted([extended=chip][size=small]) {
    width: 2.25rem;
    height: 2.25rem
}

::slotted([extended=chip][size=medium]) {
    width: 2.5rem;
    height: 2.5rem
}

::slotted([extended=chip][size=large]) {
    width: 2.75rem;
    height: 2.75rem
}

::slotted([extended=chip]:active) {
    -webkit-transform: translateY(2px);
    -ms-transform: translateY(2px);
    transform: translateY(2px);
    -webkit-box-shadow: 0 1px #666;
    box-shadow: 0 1px #666
}

::slotted([extended=button]:hover) {
    color: var(--color-hover, #000) !important;
    border: 1px solid var(--color-hover, #000) !important
}

::slotted([extended=button]:active) {
    background-image: var(--color-active, #000) !important;
    color: var(--color-white, #fff) !important
}
::slotted([theme=custom]) {
	background: var(--color-quaternary, #000)!important;
    color: var(--color-primary, #000) !important;
    border: 1px solid var(--color-primary, #000)!important;
}

::slotted([theme=custom]:hover) {
    color: var(--color-white, #fff) !important;
    border: 1px solid var(--color-primary, #000)!important;
}
::slotted([theme=primary]) {
    background: var(--color-secondary, #000)!important;
    color: var(--color-white, white) !important;
    border: 1px solid var(--color-secondary, #000)
}

::slotted([theme=primary]:hover) {
    background: var(--color-hover, #000);
    color: var(--color-primary, #fff) !important;
    border: 1px solid var(--color-primary, #000)!important;
}

::slotted([theme=secondary]) {
    background: 0 0;
    color: var(--color-secondary, #000) !important;
    border: 1px solid var(--color-secondary, #000)
}
::slotted([theme=secondary]:hover) {
    background: var(--color-hover, #000);
    color: var(--color-white, #fff) !important;
    border: 1px solid var(--color-primary, #000)
}


::slotted([theme=tertiary]) {
    background: var(--color-tertiary, #000)!important;
    color: var(--color-primary, #000) !important;
    border: 1px solid var(--color-primary, #000)!important;
}

::slotted([theme=tertiary]:hover) {
    background: var(--color-hover, #000);
    color: var(--color-white, #fff) !important;
    border: 1px solid var(--color-primary, #000)!important;
}

::slotted([theme=quaternary]) {
	background: 0 0;
    color: var(--color-tertiary, #000) !important;
    border: 1px solid var(--color-tertiary, #000)!important;
}
`;
const elButtonHTML = `<slot name="button"></slot>`;
const elButtonTemplate = document.createElement("template");
elButtonTemplate.innerHTML = `<style>`.concat(elButtonCSS, `</style>`).concat(elButtonHTML);
// define el-button tag.
customElements.define('el-button',
	class elButton extends HTMLElement {
		constructor() {
			super();
			let _thisElButton = this;
			// open shadowRoot.
			const shadowRoot = _thisElButton.attachShadow({
				mode: "open"
			});
			// clone template. 
			shadowRoot.appendChild(elButtonTemplate.content.cloneNode(!0));
			return _thisElButton;
		}
		connectedCallback() {
			const _elButtons = document.querySelectorAll('el-button');
			// inject ripple effect
			[].map.call(_elButtons, elButton => {
				elButton.addEventListener('click', e => {
					e = e.touches ? e.touches[0] : e;
					const r = elButton.getBoundingClientRect(),
						d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 1;
					elButton.style.cssText = `--s: 0; --o: 1;`;
					elButton.offsetTop;
					elButton.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
				})
			})
		}
	}
);

// create el-video template (inside).
const elDropdownCSS = `:host {
		position: relative;
		display: inline-flex;
	}
	
	.dropcontent {
		
		display: none;
		position: absolute;
		background-color: #fafafa;
		justify-content: flex-start;
		align-items: flex-start;
		top: 3.6rem;
		left: -160%;
		width: 8rem;
		overflow: visible;
		padding: 1rem;
		border: .5px solid #c3c3c3;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2);
		z-index: 5000;
		transition: all .3s ease-out;
		animation: top .4s;
		opacity: 1
	}
	.dropdown .arrow {
		background: #fafafa;
		position: absolute;
		left: calc(50% - 0%);
		top: -4px;
		border: solid #b5b5b5;
		border-width: 0 1.3px 1.3px 0;
		padding: 3px;
		transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg)
	}
	
	#chip-dropdown {
		transition: all .3s ease-out;
		animation: top .4s
	}
	
	#backdrop {
		position: fixed;
		height: 100vh;
		left: 0;
		bottom: 0;
		width: 100%;
		display: none;
		background: rgba(0, 0, 0, 0);
		z-index: 1000;
		cursor: auto
	}
	
	@keyframes top {
		0% {
			top: 2.6rem;
			opacity: 0
		}
	
		80% {
			top: 3.6rem;
			opacity: 1
		}
	}
	
	
	.dropdown .dropcontent a {
		text-decoration: none;
		font-size: .8rem;
		text-transform: uppercase;
		padding: .5rem;
		color: #000 !important
	}
	
	.dropdown .dropcontent a:hover {
		background: #f3f3f3 !important
	}
	
	.chip {
		position: relative;
		background: #f4f4f4;
		width: 2.5rem;
		height: 2.5rem;
		font-size: .7rem !important;
		font-weight: 100;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #000 !important;
		border: 1px solid #cbcbcb;
		box-shadow: 0 1px #cbcbcb;
		cursor: pointer;
		transition: .3s;
		z-index: 1
	}
	
	.chip:hover {
		background: #fafafafa
	}
	
	.chip:active {
		transform: translateY(2px);
		box-shadow: 0 1px #666
	}`;
const elDropdownHTML = `<div id="backdrop"></div>
	<div class="dropdown">
	<button aria-label="dropdown button" class="chip" id="chip">
<slot name="dropdown-icon">
		<svg  fill="var(--color-black, #262626)" height="16" width="16" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 60.123 60.123" style="enable-background:new 0 0 60.123 60.123;" xml:space="preserve">
<g>
	<path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z"/>
	<path d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
		C60.124,31.719,58.781,33.062,57.124,33.062z"/>
	<path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z"/>
	<circle cx="4.029" cy="11.463" r="4.029"/>
	<circle cx="4.029" cy="30.062" r="4.029"/>
	<circle cx="4.029" cy="48.661" r="4.029"/>
</g>
</svg>
</slot>


	</button>
		<div id="chip-dropdown" class="dropcontent"><i class="arrow"></i>
			<slot name="dropdown"> <a href="/">dropdown</a> </slot>
		</div>
	</div>`;
const elDropdownTemplate = document.createElement("template");
elDropdownTemplate.innerHTML = `<style>`.concat(elDropdownCSS, `</style>`).concat(elDropdownHTML);
// defines el-dropdown tag.
customElements.define('el-dropdown',
	class elDropdown extends HTMLElement {
		constructor() {
			super();
			// _thisElDropdown = elVideo
			let _thisElDropdown = this;
			// open shadowRoot.
			const shadowRoot = _thisElDropdown.attachShadow({
				mode: "open"
			});
			// clone template. 
			shadowRoot.appendChild(elDropdownTemplate.content.cloneNode(!0));
			return _thisElDropdown;
		}
		connectedCallback() {
			// get variables
			const _chip = this.shadowRoot.querySelector("#chip");
			const _backdrop = this.shadowRoot.querySelector('#backdrop');
			const _chipdropdown = this.shadowRoot.querySelector("#chip-dropdown");
			const _addMediaQuery = window.matchMedia("(max-width: 768px)");
			// add click events
			_chip.addEventListener('click', () => {
				_chipdropdown.style.display = 'block';
				_backdrop.style.display = 'block';
			});
			_backdrop.addEventListener('click', () => {
				_chipdropdown.style.display = 'none';
				_backdrop.style.display = 'none';
			});
			// if width change add media query
			if (matchMedia) {
				_addMediaQuery.addListener(_whenWidthChange);
				_whenWidthChange(_addMediaQuery);
			};
			// add media query if width change
			function _whenWidthChange(_addMediaQuery) {
				if (_addMediaQuery.matches) {
					_chipdropdown.style.display = 'none';
					_backdrop.style.display = 'none';
				}
			}
		}
	}
);

// create el-Drawer template.
const elDrawerCSS = `:host {
			display: block
		}
		
		:host #drawer-backdrop {
			position: fixed;
			height: 100vh;
			left: 0;
			right:0;
			bottom: 0;
			width: 100%;
			display: none;
			background: rgba(0, 0, 0, .72);
			z-index: 10;
			cursor: not-allowed
		}
		
		:host button[id*='_drawer'] {
			z-index: 10;
			cursor: pointer;
			-ms-touch-action: auto;
			touch-action: auto;
			background: 0 0;
			border: 0;
			border-radius:50%;
			padding:0.9rem;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
	
		}

		:host .brand:hover {
			color:var(--drawer-hover-text, var(--color-white, #fff)) !important;
			transition: ease all 0.3s;
		}
		:host #open_drawer {
			cursor: pointer
		}
		
		:host #close_drawer {
			cursor: pointer;
			background: var(--drawer-hover-color, #000);
		}
	
		.radial {
			margin: .4em;
			padding: 1em;
			cursor: pointer;
			background: #e1e1e1;
			text-decoration: none;
			color: #666;
			-webkit-tap-highlight-color: #0000;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			display: inline-block;
			vertical-align: middle;
			-webkit-transform: perspective(1px) translateZ(0);
			transform: perspective(1px) translateZ(0);
			box-shadow: 0 0 1px rgba(0, 0, 0, 0);
			position: relative;
			overflow: hidden;
			-webkit-transition-property: color;
			transition-property: color;
			-webkit-transition-duration: 100ms;
			transition-duration: 100ms;
		}
	
		.radial:before {
			content: "";
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: var(--drawer-hover-color, #000);
			border-radius: 100%;
			-webkit-transform: scale(0);
			transform: scale(0);
			-webkit-transition-property: transform;
			transition-property: transform;
			-webkit-transition-duration: 200ms;
			transition-duration: 200ms;
			-webkit-transition-timing-function: linear;
			transition-timing-function: linear;
		}
	
		.radial:hover:before,
		.radial:focus:before,
		.radial:active:before {
			-webkit-transform: scale(2);
			transform: scale(2);
		}

		::slotted(.brand) ,
		:host .brand {
			width: 128px;
			height: 56px;
			font-size:24px;
			margin:0 16px;
			font-family: var(--drawer-brand-font-family);
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			color: var(--drawer-hightlight-color, var(--color-black, #000))!important;
			-webkit-transition: ease-in-out opacity .3s;
			transition: ease-in-out opacity .3s;
			white-space: nowrap;
			text-decoration: none;
			color: var(--drawer-brand-color, var(--color-black, #000))
		}
		@media(min-width:768px) {
			::slotted(.brand) ,
			:host .brand {
				margin:0 16px;
			}
		}
		@media(min-width:1268px) {
			::slotted(.brand) ,
			:host .brand {
				font-size: var(--drawer-brand-font-size, 1rem);
			}
		}
		
		:host #navbar {
			-webkit-box-shadow: 0 7px 5px -7px #111;
			box-shadow: 0 7px 5px -7px #111;
			position: fixed;
			left:0;
			right:0;
			background: var(--drawer-background-color, var(--color-tertiary, #fafafa));
			width: 100%;
			top:0!important;
			z-index: 5;
		
		}
		
		:host #navbar-container {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			justify-content: space-between;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			opacity: 1;
			padding: var(--drawer-padding) 0rem;
			margin-right: 48px;
			margin-left: 48px;
		}
		
		:host #navbar-menu {
			display: none;
			margin: 0;
			padding: 0;
			list-style: none;
			max-width: 100%;
			margin-left: auto
		}
		
		@media(min-width:1024px) {
			:host #navbar-menu {
				display: flex
			}
		}
		
		:host #drawer {
			background: var(--drawer-background-color, var(--color-tertiary, #fafafa));
			height: 100%;
			width: 0;
			max-width: 100%;
			position: fixed;
			z-index: 10;
			top: 0;
			left: 0;
			overflow-x: hidden;
			-webkit-transition: all .2s;
			transition: all .2s
		}
		
		:host #drawer::-webkit-scrollbar {
			width: .5em
		}
		
		:host #drawer::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .46)
		}
		
		:host #drawer::-webkit-scrollbar-thumb {
			background-color: var(--drawer-text-color, var(--color-black, #000)) !important;
			outline: 1px solid var(--drawer-background-color, var(--color-black, #000)) !important
		}
		
		:host .drawer-header {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			margin-right: 3rem;
			margin-left: 3rem;
			padding: var(--drawer-padding) 0rem;
		}
		
		:host #drawer-menu {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column
		}`;
const elDrawerHTML = `<div id="drawer-backdrop"></div>
	<div id="navbar">
		<div id="navbar-container"><button aria-label="open drawer icon" class="radial" id="open_drawer"><svg
					fill="var(--drawer-hightlight-color, var(--color-black, #000))" height=24
					style="enable-background:new 0 0 459 459" viewBox="0 0 459 459" width=24 x=0px xml:space=preserve
					xmlns=http://www.w3.org/2000/svg y=0px>
					<path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" /></svg></button><a
				class="brand" href="/">
				<slot name="navbar-brand">
					<b>Brand</b>
				</slot>
			</a>
			<div id="navbar-menu">
				<slot name="navbar-menu"></slot>
			</div>
			<slot name="mobil-menu"></slot>
		</div>
	</div>
	<aside id="drawer">
		<div class="drawer-header">
		
		<button aria-label="close drawer icon" class="radial" id="close_drawer"><svg fill="var(--drawer-hightlight-color, var(--color-black, #000))"
					xmlns="http://www.w3.org/2000/svg" height=24 width=24 x="0px" y="0px" viewBox="0 0 31.112 31.112"
					style="enable background:new 0 0 31.112 31.112;" xml:space="preserve">
					<polygon
						points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 29.698,31.112 31.112,29.698 16.97,15.556 " />
					</svg>
		</button>
		<a class="brand" href="/">
				<slot name="drawer-brand">
					<b>Brand</b>
				</slot>
			</a></div>

		<div id="drawer-menu">
			<slot name="drawer-menu"></slot>
		</div>
		
	</aside>
	<slot></slot>`;
const elDrawerTemplate = document.createElement("template");
elDrawerTemplate.innerHTML = `<style>`.concat(elDrawerCSS, `</style>`).concat(elDrawerHTML);
// define el-Drawer tag.
customElements.define('el-drawer',
	class elDrawer extends HTMLElement {
		constructor() {
			super();
			// _thisElDrawer = elDrawer
			let _thisElDrawer = this;
			// open shadowRoot.
			const shadowRoot = _thisElDrawer.attachShadow({
				mode: "open"
			});
			// clone template. 
			shadowRoot.appendChild(elDrawerTemplate.content.cloneNode(!0));
			return _thisElDrawer;
		}
		connectedCallback() {
			// DOM elements
			const _drawer = this.shadowRoot.querySelector("#drawer");
			const _backdrop = this.shadowRoot.querySelector("#drawer-backdrop");
			const _opendrawer = this.shadowRoot.querySelector("#open_drawer");
			const _closedrawer = this.shadowRoot.querySelector("#close_drawer");

			// open drawer if click button
			_opendrawer.addEventListener('click', () => {
				_drawer.setAttribute('tabindex', 1);
				_drawer.style.width = '85%';
				_drawer.style.maxWidth = '400px';
				_drawer.style.opacity = '1';
				_backdrop.style.display = 'block';
			});
			// close drawer if click button
			_closedrawer.addEventListener('click', () => {
				_drawer.setAttribute('tabindex', 0);
				_drawer.style.width = '0';
				_drawer.style.maxWidth = '0';
				_drawer.style.opacity = '0';
				_backdrop.style.display = 'none';
			});
			// close drawer if click _backdrop
			_backdrop.addEventListener('click', () => {
				_drawer.style.width = '0';
				_drawer.style.maxWidth = '0';
				_drawer.style.opacity = '0';
				_backdrop.style.display = 'none';
			});
			// close drawer if width change
			function _whenWidthChange(_addMediaQuery) {
				if (_addMediaQuery.matches) {
					_drawer.style.width = '0';
					_drawer.style.maxWidth = '0';
					_drawer.style.opacity = '0';
					_backdrop.style.display = 'none';
				}
			}
			// if width change add media query
			const _addMediaQuery = window.matchMedia("(min-width: 768px)");
			if (matchMedia) {
				_addMediaQuery.addListener(_whenWidthChange);
				_whenWidthChange(_addMediaQuery);
			};
		}
	}
);