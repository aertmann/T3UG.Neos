/*
	Dopetrope 2.5 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

window._skel_config = {
	preset: 'standard',
	resetCSS: true,
	breakpoints: {
		'desktop': {
			grid: {
				gutters: 50
			}
		}
	}
};

jQuery(function() {
	$('#nav > ul').dropotron({
		offsetY: -17,
		offsetX: -1,
		mode: 'fade',
		noOpenerFade: true,
		detach: false
	});
});