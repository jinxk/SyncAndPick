app.controller('MainController', ['$scope', function($scope){

    document.addEventListener("deviceready", onDeviceReady, false);

    //sorter, try a dedup?
    var cSort = function(a, b) {
        aName = a.displayName;
        bName = b.displayName;
        return aName < bName ? -1 : (aName == bName ? 0 : 1);
    };


    function onSuccess(contacts) {
        contacts.sort(cSort);
        $scope.allContacts=contacts;
        $scope.$apply();
        //alert("Mission Successful "+ $scope.allContacts[0].displayName);
    }

    function onError(contactError) {
        alert('onError!');
    }

    function onDeviceReady() {
        var options      = new ContactFindOptions();
        options.filter = "z";
        options.multiple = true;
        //var fields = ["displayName", "photos", "phoneNumbers"];
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.phoneNumbers];
        navigator.contacts.find(fields, onSuccess, onError, options);
    }

}]);
