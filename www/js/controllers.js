angular.module('starter.controllers', [])

.controller('SetsCtrl', function($scope, $http, $state) {
  $http.get('js/AllSets.json').then(function(resp) {
    $scope.sets = resp.data;
    $scope.curData = $state.params.setCode;
    var set = [];
    angular.forEach($scope.sets, function(value, key) {
      if( value.code == $scope.curData) this.push(value);
    }, set);
    $scope.set = set;

    var card = [];
    if (set.length == 0) {
      angular.forEach($scope.sets, function(value, key) {
        angular.forEach(value.cards, function(value2, key2) {
          if( value2.multiverseid == $scope.curData) this.push(value2);
        }, card);
      }, card);
    }
    $scope.card = card;





  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
})


/*
.controller('CardsCtrl', function($scope, $http, $state) {
  $http.get('js/AllSets.json').then(function(resp) {
    $scope.sets = resp.data;
    $scope.curData = $state.params.setID;
    var card = [];
    angular.forEach($scope.sets, function(value, key) {
      angular.forEach(value.cards, function(value2, key2) {
        if( value2.multiverseid == $scope.curData) this.push(value2);
      }, card);
    }, card);
    $scope.card = card;
    console.log($scope.card);
  })
})
*/



;