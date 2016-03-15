/**
 * Предоставляет список доступных названий каналов.
 * @param {[[Type]]} function( [[Description]]
 */
/*global define*/
define(function () {

    'use strict';

    var serverNameList = ['Медия', 'Баленос', 'Кальфеон', 'Еще-какойто'];
    
    return {
        getServerNames: function () {
            return serverNameList;
        }
    }
});