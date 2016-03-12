var myApp = angular.module('todoApp', ['ngRoute','ui.router'])
		.config(function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider){
			$httpProvider.defaults.withCredentials = true;
			$urlRouterProvider.otherwise("/");
			$stateProvider.state("pendings", {
				url: "/",
				templateUrl: "partials/home.html",
				controller: "pendingCtrl",
				controllerAs: 'pendings'
			})
			.state("overdues", {
				url: "/overdue",
				templateUrl: "partials/overdue.html",
				controller: "overdueCtrl",
				controllerAs:"overdue"
			});
		});

	

	/*
	myApp.controller("colegiosCtrl",function ($state, $http, $cookies) {
		var colegiosController = this;
		var prefix = '/api/v0';
		var prefix2 = '/masterdata/colegios?'
		$http.get(prefix+prefix2+'token='+$cookies.get('token')).success(function(data){
			colegiosController.colegios = data;
		});

		colegiosController.search = function(){
			if(
				typeof colegiosController.selBusquedaAvanzada!='undefined' 
				&& typeof colegiosController.txtBusquedaAvanzada!='undefined' 
				&& colegiosController.selBusquedaAvanzada.length > 0 
				&& colegiosController.txtBusquedaAvanzada.length > 0 
			)
			{
				if(!isFinite(colegiosController.txtBusquedaAvanzada)){
					colegiosController.txtBusquedaAvanzada = colegiosController.txtBusquedaAvanzada.toUpperCase();
				}

				$http.get(prefix+prefix2+colegiosController.selBusquedaAvanzada+'='+colegiosController.txtBusquedaAvanzada+'&token='+$cookies.get('token')).success(function(data){
					colegiosController.colegios = data;
				});	
			}
			else{
				alert("Por favor seleccione el campo de busqueda y escriba el texto a buscar");
			}
		};
	});

	myApp.directive('myEnter', function () {
	    return function (scope, element, attrs) {
	        element.bind("keydown keypress", function (event) {
	            if(event.which === 13) {
	                scope.$apply(function (){
	                    scope.$eval(attrs.myEnter);
	                });

	                event.preventDefault();
	            }
	        });
	    };
	});


	myApp.controller("people",function ($scope,$http) {
		$http.get("data/database.json")
		.success(function(response){
			$scope.persons = response.records;
		});		
	});
	*/