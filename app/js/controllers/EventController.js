'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        $scope.sortorder = 'name';
        eventData.getEvent().then(function (e) {
            $scope.event = e;
        }, function (status) {
            console.log(status);
        });

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }
    }
);