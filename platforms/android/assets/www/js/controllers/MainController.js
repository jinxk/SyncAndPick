app.controller('MainController', ['$scope', function($scope){
    document.addEventListener("deviceready", onDeviceReady, false);
    //$scope.contacts=[];
    function onDeviceReady() {
        var options      = new ContactFindOptions();
        options.filter   = "";
        options.multiple = true;
        var fields = ["displayName", "name", "phoneNumbers"];
        navigator.contacts.find(fields, onSuccess, onError, options);
    };

    function onSuccess(contacts) {
        $scope.contacts=["ATM","TTM","PPM"];
        alert("Mission Successful");
    };

    function onError(contactError) {
        alert('onError!');
    };


}
]);
