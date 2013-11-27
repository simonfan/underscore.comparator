require.config({
    urlArgs: 'bust=0.5499906602781266',
    baseUrl: '/',
    paths: {
        requirejs: 'bower_components/requirejs/require',
        text: 'bower_components/requirejs-text/text',
        'underscore.comparator': 'src/underscore.comparator',
        jquery: 'bower_components/jquery/jquery',
        'requirejs-text': 'bower_components/requirejs-text/text',
        underscore: 'bower_components/underscore/underscore',
        backbone: 'bower_components/backbone/backbone'
    },
    shim: {
        backbone: {
            exports: 'Backbone',
            deps: [
                'jquery',
                'underscore'
            ]
        },
        underscore: {
            exports: '_'
        }
    }
});
