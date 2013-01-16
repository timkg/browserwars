require.config({
	shim: {
	},

	paths: {
		jquery: 'vendor/jquery.min'
	}
});
 
require([
	'app'
	], function(App) {

	var bw = window.bw = new App();

	// use setTimeout to clear the call stack from all the require.js calls
	window.setTimeout(bw.init, 0);

});