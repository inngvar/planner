/**
 * Генерирует набор каналов, по названию.
 * Например - указываешь название Медия - на выходе получаешь (Медия1, Медия2, Медия3, Медия4, МедияWar)
 */
/*global define*/
define(function () {

    'use strict';

    var i,
        options = {
            count: 4,
            warPostfix: 'WAR',
            delimiter: '-'
        },
        getChannelsForName = function (name) {
            var result = [],
                channelNumber;
            for (i = 0; i < options.count; i = i + 1) {
                channelNumber = i + 1;
                result.push(name + options.delimiter + channelNumber);
            }
            result.push(name + options.delimiter + options.warPostfix);
            return result;
        };
    return {
        getChannelsForName: getChannelsForName
    };

});