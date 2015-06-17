app.controller('SyncController', ['$scope', function($scope){
        document.addEventListener("deviceready", onDeviceReady, false);


        function onSuccess(contacts) {
            $scope.contacts=contacts;
        };

        function onError(contactError) {
            alert('onError!');
        };

        function onDeviceReady() {
            var options      = new ContactFindOptions();
            options.filter   = "";
            options.multiple = true;
            var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
            navigator.contacts.find(fields, onSuccess, onError, options);
        }

    }
]);