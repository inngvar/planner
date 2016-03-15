/**
 * Модуль отвечает за показ истории событий.
 * @param   {[[Type]]} ['jquery'                         [[Description]]
 * @param   {[[Type]]} 'bootstrap'                       [[Description]]
 * @param   {[[Type]]} 'jquery.bootgrid']                [[Description]]
 * @param   {[[Type]]} function                          ($        [[Description]]
 * @returns {object}   [[Description]]
 */
/*global define*/
define(['jquery', 'bootstrap', 'jquery.bootgrid'], function ($) {

    'use strict';

    var initialize;
    initialize = function (settings) {
        var $container = $(settings.selector),
            $templateContext = $(settings.template);
        $container.append($templateContext);
        $(settings.tableSelector).bootgrid({
            ajax: true,            
            url: "/api/events"            
        });

    };
    return {
        initialize: initialize
    };
});