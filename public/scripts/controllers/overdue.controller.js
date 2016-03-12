angular.module('todoApp').controller("overdueCtrl",function ($state, $http) {
	/*
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

	thispendings.save = function() {
		if(
			typeof thispendings.task!='undefined'
			&& typeof thispendings.task.name!='undefined' 
			&& typeof thispendings.task.dueDate!='undefined' 
		)
		{
			$http.post(prefix,thispendings.task).success(function(data){
				thispendings.pendings.push(data);
				alert("Saved!");
			});	
		}
		else{
			alert("please fill all the fields!");
		}
	};
	*/
});
