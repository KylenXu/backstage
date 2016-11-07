

appView.factory('myFactory', ['$scope', '$http', function($scope, $http){
	var service = {};
	var data = [];
	service.getData = function(){
		return data;
	}
	return service;;
}]);