define([
	'domgeom'
	, 'canvas'
	], function(Domgeom, Canvas) {

		function ScreenBuilder() {

		}

		ScreenBuilder.prototype = {};

		ScreenBuilder.prototype.init = function() {

			// hijack scrolling

			// divide page in screens

			// set up screen transitions and get current screen

			// decide which elements are to be used as platform

			// get element geometry

			// make canvas overlay
			var c = this.canvas = new Canvas();
			c.init();
			document.body.appendChild( c.canvas );
			// build canvas blocks

		};

		return ScreenBuilder;

});