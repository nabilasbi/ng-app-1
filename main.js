var myApp = angular.module('myApp',[])

myApp.factory('Data', function(){
	return {message: "Nabil"}
})
function FirstCtrl($scope, Data){
	$scope.data = Data;
}

function SecondCtrl($scope, Data){
	$scope.data = Data;
}

myApp.directive("superhero", function(){
	return {
		restrict: "E",
		template: "Hello World, I'm directive"
	}
})

myApp.directive("enter",function(){
	return function(scope, element){
		element.bind("mouseenter",function(){
			console.log("I'm over you!");
		})
	}
})

myApp.directive("enter",function(){
	return function(scope, element){
		element.bind("mouseleave",function(){
			console.log("I'm leaving you!");
		})
	}
})

