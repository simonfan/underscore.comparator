require.config({
	urlArgs: "bust=0.2190631611738354",
	baseUrl: "/dev",
	paths: {
		requirejs: "bower_components/requirejs/require",
		text: "bower_components/requirejs-text/text",
		"underscore.comparator": "../underscore.comparator",
		jquery: "bower_components/jquery/jquery",
		"requirejs-text": "bower_components/requirejs-text/text",
		underscore: "bower_components/underscore/underscore",
		backbone: "bower_components/backbone/backbone"
	},
	shim: {
		backbone: {
			exports: "Backbone",
			deps: [
				"jquery",
				"underscore"
			]
		},
		underscore: {
			exports: "_"
		}
	}
});

(function() {
    var load = window.__load || 'amd-test-runner';
    require([load], function(mod) {
        console.log('Main loading finished.');
    });
})();
