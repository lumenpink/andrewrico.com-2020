/*1*/
const drawer = document.querySelector('el-drawer')
/*2*/
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
/*3*/
drawer.style.setProperty('--drawer-padding', drawerStyle.sizePadding)
drawer.style.setProperty('--drawer-brand-font-size', drawerStyle.brandFontSize)
drawer.style.setProperty('--drawer-brand-font-family', drawerStyle.brandFontFamily)
drawer.style.setProperty('--drawer-link-font-size', drawerStyle.linkFontSize)
drawer.style.setProperty('--drawer-hover-color', drawerStyle.hoverItem)
drawer.style.setProperty('--drawer-hover-text', drawerStyle.hoverText)
drawer.style.setProperty('--drawer-hover-navbar-text', drawerStyle.hoverNavbarText)
drawer.style.setProperty('--drawer-background-color', drawerStyle.backgroundColor)
drawer.style.setProperty('--drawer-text-color', drawerStyle.textColor)

