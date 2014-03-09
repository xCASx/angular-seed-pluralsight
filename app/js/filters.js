'use strict';

eventsApp.filter('durations', function() {
    return function(duration) {
        switch(duration) {
            case 1:
                return 'Half Hour';
            case 2:
                return '1 Hour';
            case 3:
                return 'Half Day';
            case 4:
                return 'Full Day';
        }
    }
});

eventsApp.filter('levelIcon', function($sce) {
    return function(level) {
        var result = '';
        switch(level) {
            case 'Advanced':
                result += '<span class="icon-fire"></span>';
            case 'Intermediate':
                result += '<span class="icon-fire"></span>';
            case 'Introductory':
                result += '<span class="icon-fire"></span>';
        }
        return $sce.trustAsHtml(level + ' ' + result);
    }
});