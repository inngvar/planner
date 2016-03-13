/**
 * Инициализация модуля. 
 */
/*global define*/
define(['./poke-control', './poke-history', 'jquery'], function (pokeControl, pokeHistory, $) {

    'use strict';

    var pokeSettings = {
            pokeControl: {
                selector: '.poke-control-container',
                template: '<form class="form-inline"><div class="form-group"><label for="bdoChannel">Канал:</label><select name="bdoChannel" id="bdoChannel"></select></div><div class="form-group"><label for="bdoQuest">Квест</label><select name="bdoQuest" id="bdoQuest"></select></div><button>Отправить</button></form>'
            },
            pokeHistory: {
                selector: '.poke-history-container'
            }
        },
        create;
    create = function (options) {
        pokeSettings = $.extend(pokeSettings, options);
        pokeControl.initialize(pokeSettings.pokeControl);
        pokeHistory.initialize(pokeSettings.pokeHistory);
    };

    return {
        create: create
    };
});