
appView.factory('factory_getData', ['$http', function($http) {
    var myData = {};

    function _getter() {
        // console.log(myData);
        return myData;
    }
    function _setter(url) {
        $http.get(url)
            .then(function(res) {
                // console.log(res.data.data)
                myData = res.data.data;
            }, function() {
                cosole.log('error');
            })
    }
    return {
        getter: _getter,
        setter: _setter
    };
}])
