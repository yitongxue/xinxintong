require.config({
	paths: {
		"domReady": '/static/js/domReady',
		"frame": '/views/ytx/pl/fe/matter/article/frame',
	},
	urlArgs: "bust=" + (new Date()).getTime()
});
require(['frame']);