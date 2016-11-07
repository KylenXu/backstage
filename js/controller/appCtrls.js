
var appControllers = angular.module('appControllers', ['ui.router']);
  appControllers
    .controller('loginCtrl', ['$scope', '$state', function($scope, $state){
      $scope.adminName = '';
      $scope.adminPwd = '';
  	  $scope.test = function(){
        if($scope.adminName === 'kylen' && parseInt($scope.adminPwd) === 123){
          $state.go('index.content', {contactId: 'products'});
        }
  	  }
    }])
    .controller('indexCtrl', ['$scope', '$state', function($scope, $state){
      $scope.choose = function(e){
         $state.go('index.content', {contactId: e.target.id});
      }
    }])
    .controller('showContent', ['$scope', '$http', '$state', function($scope, $http, $state){
      var curId = $scope.$resolve.$stateParams.contactId;
      if(curId == 'products'){
        // 获取商品数据，待封装
        $http.get('http://localhost:8888/0')
          .then(function(res){
            $scope.productsData = res.data.data;
            // console.log(typeof res.data.data);
          }, function(){
            cosole.log('error');
          })
        $scope.godetail = function(e){
          // console.log($state);
          console.log(e.target.parentNode.children[0].id);
          $state.go('index.Prodetail', {contactId: e.target.parentNode.children[0].id});
        }
      }
    }])
    .controller('showProDetail', ['$scope', '$http', '$state', function($scope, $http, $state){
      var curId = $scope.$resolve.$stateParams.contactId;
      //找到对应id的商品，待封装
      console.log(typeof $scope.productsData); 

      // for(var i=0; i<$scope.productsData.length; i++){
      // }
      // console.log($scope.productsData[0])

    }])
 