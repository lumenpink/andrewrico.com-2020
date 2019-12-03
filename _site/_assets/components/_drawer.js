const drawer = document.querySelector('el-drawer')

const drawerStyle = {
	sizePadding: `0.6rem`,
	brandFontSize: `0.8rem`,
	brandFontFamily: `'Dancing Script', cursive`,
	linkFontSize: `1rem`,
	hoverItem: `rgba(232, 232, 232, 0.69)`,
	hoverText: `#000`,
	backgroundColor: `#fff`,
	textColor: `#00000`,
	hightlightColor: `#000`,
	navbarTextColor: `var(--color-tertiary)`,
}

drawer.style.setProperty('--drawer-padding', drawerStyle.sizePadding)
drawer.style.setProperty('--drawer-brand-font-size', drawerStyle.brandFontSize)
drawer.style.setProperty('--drawer-brand-font-family', drawerStyle.brandFontFamily)
drawer.style.setProperty('--drawer-link-font-size', drawerStyle.linkFontSize)
drawer.style.setProperty('--drawer-hover-color', drawerStyle.hoverItem)
drawer.style.setProperty('--drawer-hover-text', drawerStyle.hoverText)
drawer.style.setProperty('--drawer-background-color', drawerStyle.backgroundColor)
drawer.style.setProperty('--drawer-text-color', drawerStyle.textColor)
drawer.style.setProperty('--drawer-hightlight-color', drawerStyle.hightlightColor)
drawer.style.setProperty('--drawer-navbar-text-color', drawerStyle.navbarTextColor)
