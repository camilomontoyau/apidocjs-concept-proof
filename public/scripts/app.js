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
		controllerAs:"overdues"
	}).state("edit", {
		url: "/:id/edit",
		templateUrl: "partials/edit.html",
		controller: "editCtrl",
		controllerAs:"edit"
	});
});

	

