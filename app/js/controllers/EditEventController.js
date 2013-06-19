'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData, $location) {
        $scope.saveEvent = function(event, newEventForm) {
            console.log(newEventForm);
            if(newEventForm.$valid) {
                eventData.save(event);
            }
        };

        $scope.cancelEdit = function() {
            $location.replace();
            $location.url('/events');
        }
    }
);
