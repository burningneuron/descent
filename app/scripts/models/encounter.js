/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var EncounterModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return EncounterModel;
});
