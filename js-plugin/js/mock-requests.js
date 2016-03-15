/**
 * Mock  для тестовых запросов.
 * @param {[[Type]]} ['jquery'                         [[Description]]
 * @param {[[Type]]} 'mock-ajax']                      [[Description]]
 * @param {[[Type]]} function                          ($  [[Description]]
 */
/*global define*/
define(['jquery', 'jquery-mockjax'], function ($) {

    'use strict';

    $.mockjax({
        url: '/api/events',
        responseText: {
            "current": 1,
            "rowCount": 10,
            "rows": [
                {
                    "channel": "Кальфеон-1",
                    "event": "Камни",
                    "startDate": "2014-05-30T22:15:00"
                },
                {
                    "channel": "Кальфеон-2",
                    "event": "Дерево",
                    "startDate": "2014-04-30T20:15:00"
                },
                {
                    "channel": "Кальфеон-2",
                    "event": "Дерево",
                    "startDate": "2014-03-30T20:15:00"
                },
                {
                    "channel": "Кальфеон-2",
                    "event": "Дерево",
                    "startDate": "2014-02-30T20:15:00"
                }

            ],
            "total": 1000
        }
    });

});