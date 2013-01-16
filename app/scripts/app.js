define([
	'screenbuilder'
	], 
	function(Screenbuilder) {

		function BrowserWars() {

		}

		BrowserWars.prototype = {};

		BrowserWars.prototype.init = function() {
			var sb = this.sb = new Screenbuilder();
			sb.init();
		};

		return BrowserWars;

});