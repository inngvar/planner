/**
 * Предоставляет список квестов, о которых можно послать сообщение.
 *
 */
/*global define*/
define(function () {

    'use strict';

    var questList = ['Брёвна', 'Камни', 'Элики'];

    return {
        getQuestList: function () {
            return questList;
        }
    };

});