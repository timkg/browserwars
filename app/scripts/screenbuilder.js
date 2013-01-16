define([
	'domgeometry'
	, 'canvashelper'
	], function(Domgeom, CanvasHelper) {

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
			var canvashelper = this.canvashelper = new CanvasHelper();
			canvashelper.init();
			document.body.appendChild( canvashelper.canvasElm );
			// build canvas blocks

		};

		return ScreenBuilder;

});