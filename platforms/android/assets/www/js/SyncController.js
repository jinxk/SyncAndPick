app.controller('SyncController', ['$scope',
    function($scope){
        document.addEventListener("deviceready", onDeviceReady, false);

        $scope.contacts=[];

        function onSuccess(contacts) {
            alert("Mua");
        };

        function onError(contactError) {
            alert('onError!');
        };

        function onDeviceReady() {
            var options = new ContactFindOptions();
            options.filter = "";
            options.multiple=true;
            var fields = ["displayName", "name"];

            navigator.contacts.find(fields, onSuccess, onError, options);
        }

    }
]);