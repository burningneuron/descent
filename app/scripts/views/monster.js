/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MonsterView = Backbone.View.extend({
        template: JST['app/scripts/templates/monster.ejs']
    });

    return MonsterView;
});
