// Configure RequireJS
requirejs.config({
    baseUrl: "js",
    paths: {
        'jquery': 'common/jq/jq1.9.1',
        'backbone': 'common/backbone/backbone',
        'text': 'common/requirejs/text',
        'underscore': 'common/underscore/underscore',
        'backbone.controller': 'common/backbone-controller/backbone.controller',
        'backbone.localstorage': 'common/backbone-localstorage/backbone.dualstorage.amd',
        'backbone.stickit': 'common/backbone-stickit/backbone.stickit',
        'TimelineMax': 'common/gsap/TimelineMax',
        'TweenMax': 'common/gsap/TweenMax',
        'TweenLite': 'common/gsap/TweenLite',
        'CSSPlugin': 'common/gsap/plugins/CSSPlugin',
        'Base64': 'common/base64/jquery.base64',
        'localizer': 'common/localizer/dist/jquery.localize',
        'RC4': 'common/rc4/RC4',
        'RC4V2': 'common/rc4/RC4V2',
        'Lib': 'common/libs/Lib',
        'Pepper': 'libs/Pepper',
        'PepperHelper': 'libs/PepperHelper',
        'ComBroker': 'common/comBroker/ComBroker',
        'Elements': 'Elements',
        'StackView': 'common/stackview/StackView'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.controller': {
            deps: ['underscore', 'jquery']
        },
        'underscore': {
            exports: '_'
        },
        'ComBroker': {
            deps: ['backbone', 'jquery']
        },
        'RC4': {
            exports: 'RC4'
        },
        'TweenMax': {
            exports: 'TweenMax'
        },
        'TweenLite': {
            exports: 'TweenLite'
        },
        'TimelineMax': {
            dep: ['TweenLite'],
            exports: 'TimelineMax'
        },
        'CSSPlugin': {
            dep: ['TweenLite'],
            exports: 'CSSPlugin'
        },
        'Pepper': {
            deps: ['jquery', 'Base64', 'RC4V2'],
            exports: 'Pepper'
        },
        'PepperHelper': {
            exports: 'PepperHelper'
        }
    }
});

requirejs(["app"],
    function (app) {
    }
);