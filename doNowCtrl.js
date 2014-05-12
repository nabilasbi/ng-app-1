angular.module('doNow', ['firebase'])

.constant('fbURL', 'https://donow.firebaseio.com/dos')

.controller('doCtrl',  ['$scope','$firebase', 'fbURL', function($scope, $firebase, fbURL){

	$scope.predicate = 'done';
	$scope.do = {label: '', desc:'', done:false};

	var ref  = new Firebase(fbURL);
	$scope.dos = $firebase(ref);

	$scope.addDo = function(){
		if($scope.do){		
			$scope.dos.$add($scope.do);
			$scope.do = {label: '', desc:'', done:false};
			console.log('Added a new do to the list');}
	}
}]);