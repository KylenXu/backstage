
var appControllers = angular.module('appControllers', ['ui.router']);
  appControllers

    
    .controller('loginCtrl', ['$scope', '$state', function($scope, $state){
      $scope.adminName = '';
      $scope.adminPwd = '';
  	  $scope.test = function(){
        if($scope.adminName === 'Kylen' && parseInt($scope.adminPwd) === 123){
          $state.go('index.content', {contactId: 'products'});
        }
  	  }
    }])
    .controller('indexCtrl', ['$scope', '$state', function($scope, $state){
      $scope.choose = function(e){
         $state.go('index.content', {contactId: e.target.id});
      }
    }])
    .controller('showContent', ['$scope', '$http', '$state', 'factory_getData', '$q', function($scope, $http, $state, factory_getData, $q){
      var curId = $scope.$resolve.$stateParams.contactId;
      if(curId == 'products'){
        // 获取商品数据，待封装
        factory_getData.setter('http://localhost:8888/0');
        var deferred = $q.defer();
        setTimeout(function(){
          factory_getData.getter();
        }, 1000);
        $http.get('http://localhost:8888/0')
          .then(function(res){
            $scope.productsData = res.data.data;
            // console.log(typeof res.data.data);
          }, function(){
            cosole.log('error');
          })

        $scope.godetail = function(e){
          var curId = parseInt(e.target.parentNode.children[0].id);
          var len = $scope.productsData.length;
          var curPro = {};
          $state.go('index.Prodetail', {contactId: e.target.parentNode.children[0].id});
        }
      }
    }])
    .controller('showProDetail', ['$scope', '$http', '$state', 'factory_getData', function($scope, $http, $state, factory_getData){
      $scope.curPro = {};
      var curId = parseInt($scope.$resolve.$stateParams.contactId);
      //找到对应id的商品，待封装
      $scope.proData = factory_getData.getter();
      
      var len = $scope.proData.length;
      // console.log(curId);
      // console.log(factory_getData.getter());

      console.log(!$scope.curPro.length)
      if(!$scope.curPro.length){
        for(var i=0; i<len; i++){
          if(curId == $scope.proData[i].product_id){
            $scope.curPro = $scope.proData[i];
            return true;
          }
        }
      }

    }])
 