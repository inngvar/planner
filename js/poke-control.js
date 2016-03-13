/**
 * Модуль позволяет визуально выбрать инфомрацию для того что бы сделать poke людей в ТС.
 * Предоставляет меню в которо можно выбрать, канал, и название квеста
 */
/*global define*/
define(['jquery', './lib/channel-generator', './lib/servername-provider', './lib/questname-provider'], function ($, channelGenerator, servernameProvider, questnameProvider) {

    'use strict';

    var initialize;
    initialize = function (settings) {
        var $container = $(settings.selector),
            $temlateContext = $(settings.template);
        $.each(servernameProvider.getServerNames(), function (index, name) {
            $.each(channelGenerator.getChannelsForName(name), function (index, channelName) {
                var option = '<option value="' + channelName + '">' + channelName + '</option>';
                $('#bdoChannel', $temlateContext).append(option);
            });

        });
        $.each(questnameProvider.getQuestList(), function (index, quest) {
            var option = '<option value="' + quest + '">' + quest + '</option>';
            $("#bdoQuest", $temlateContext).append(option);
        });
        $container.append($temlateContext);
    };

    return {
        initialize: initialize
    };
});