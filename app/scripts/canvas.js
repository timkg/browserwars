define([], function() {

	function Canvas() {

	};

	Canvas.prototype = {};

	Canvas.prototype.build = function() {

		var c = document.createElement('canvas');
		c.style.position = 'absolute';
		c.style.top = 0;
		c.style.left = 0;
		c.style.width = '100%';
		c.style.height = '100%';
		c.style['background-color'] = 'transparent';
		c.style['z-index'] = 9999;

		this.canvas = c;

		return c;
	};

	Canvas.prototype.init = function() {
		if( this.c ) {
			return c;
		}

		return this.build();
	};

	return Canvas;

});