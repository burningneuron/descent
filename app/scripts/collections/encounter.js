/*global define*/

define([
    'underscore',
    'backbone',
    'models/encounter'
], function (_, Backbone, EncounterModel) {
    'use strict';

    var EncounterCollection = Backbone.Collection.extend({
        model: EncounterModel
    });

    return EncounterCollection;
});
