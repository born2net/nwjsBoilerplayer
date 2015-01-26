/**
 Settings Backbone > View
 @class LineListView
 @constructor
 @return {Object} instantiated FQCreatorView
 **/
define(['jquery', 'backbone'], function ($, Backbone) {

    var Elements = Backbone.View.extend({

        initialize: function () {

            // elements
            this.CLOSE_ME = '#closeMe';

            // templates
            this.LANGUAGE_SELECTOR_TEMPLATE = '#ccc';

            // classes
            this.CLASS_CAMPIGN_LIST_ITEM = '.dddd';
        }
    });

    return Elements;
});


