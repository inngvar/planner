/*global require,requirejs*/
require.config({
    waitSeconds: 0,
    shim: {
        jquery: {
            exports: '$'
        },
        'jquery-mockjax': [
            'jquery'
        ],
        bootstrap: [
            'jquery'
        ]
    },
    map: {
        '*': {
            css: 'require-css'
        }
    },
    paths: {
        requirejs: '../bower_components/requirejs/require',
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        domReady: '../bower_components/domReady/domReady',
        'jquery.bootgrid': '../bower_components/jquery.bootgrid/dist/jquery.bootgrid',
        'jquery-mockjax': '../bower_components/jquery-mockjax/dist/jquery.mockjax'
    },
    packages: [

    ]
});