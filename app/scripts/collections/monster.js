/*global define*/

define([
    'underscore',
    'backbone',
    'models/monster'
], function (_, Backbone, MonsterModel) {
    'use strict';

    var MonsterCollection = Backbone.Collection.extend({
        model: MonsterModel
    });

    return MonsterCollection;
});
