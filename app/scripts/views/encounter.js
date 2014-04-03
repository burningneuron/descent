/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var EncounterView = Backbone.View.extend({
        template: JST['app/scripts/templates/encounter.ejs']
    });

    return EncounterView;
});
