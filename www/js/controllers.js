angular.module('starter.controllers', [])

.controller('SetsCtrl', function($scope, $http, $state) {
  $http.get('js/AllSets.json').then(function(resp) {
    $scope.sets = resp.data;
    var curData = $state.params.setCode;
    var set = [];
    angular.forEach($scope.sets, function(value, key) {
      if( value.code == curData) this.push(value);
    }, set);
    $scope.set = set;
    $scope.goto = function(toState, params){
      $state.go(toState, params);
    }
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
})

.controller('CardsCtrl', function($scope, $http, $state) {
  $http.get('js/AllSets.json').then(function(resp) {
    $scope.sets = resp.data;
    var curData = $state.params.setID;
    var card = [];
    angular.forEach($scope.sets, function(value, key) {
      angular.forEach(value.cards, function(value2, key2) {
        if( value2.multiverseid == curData) this.push(value2);
      }, card);
    }, card);
    $scope.card = card;

    $
    console.log($scope.card);
  })
})




;