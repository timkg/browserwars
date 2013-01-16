define([], function() {

	function CanvasHelper() {

	};

	CanvasHelper.prototype = {};

	CanvasHelper.prototype.build = function() {

		var c = document.createElement('canvas');
		c.style.position = 'absolute';
		c.style.top = 0;
		c.style.left = 0;
		c.style.width = '100%';
		c.style.height = '100%';
		c.style['background-color'] = 'transparent';
		c.style['z-index'] = 9999;

		this.canvasElm = c;

		return c;
	};

	CanvasHelper.prototype.init = function() {
		if( this.canvasElm ) {
			return this.canvasElm;
		}

		return this.build();
	};

	return CanvasHelper;

});