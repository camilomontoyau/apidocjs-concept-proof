angular.module('todoApp').controller("pendingCtrl",function ($state, $http) {
		var thispendings = this;
		var prefix = '/task';
		
		$http.get(prefix).success(function(data){
			thispendings.pendings = data;
		});

		thispendings.predicate = 'name';
		thispendings.reverse = true;
		thispendings.order = function(predicate) {
			thispendings.reverse = (thispendings.predicate === predicate) ? !thispendings.reverse : false;
		    thispendings.predicate = predicate;
		};
	});
