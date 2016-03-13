/**
 * Модуль позволяет визуально выбрать инфомрацию для того что бы сделать poke людей в ТС.
 * Предоставляет меню в которо можно выбрать, канал, и название квеста
 */
/*global define*/
define(['jquery'], function ($) {

    'use strict';

    var initialize;
    initialize = function (settings) {
        var $container = $(settings.selector),
            $temlateContext = $(settings.template);
        $('#bdoChannel', $temlateContext).append('<option value="media1">Медия 1</option>');
        $container.append($temlateContext);
    };

    return {
        initialize: initialize
    };
});