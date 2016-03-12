angular.module('todoApp').controller("pendingCtrl",function ($state, $http) {
	var thispendings = this;
	var prefix = '/api/task';
	
	var date = new Date();
	var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();

    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    }

    var today = yyyy+"-"+mm+"-"+dd;

	$http.get(prefix+"?dueDate__gte="+today).success(function(data){
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
				alert("Saved!");
				$http.get(prefix+"?dueDate__gte="+today).success(function(data){
					thispendings.pendings = data;
				});
			});	
		}
		else{
			alert("please fill all the fields!");
		}
	};

	thispendings.delete = function(id) {
		$http.delete(prefix+'/'+id).success(function(data){
			alert("Successfully deleted");
			$http.get(prefix+"?dueDate__gte="+today).success(function(data){
				thispendings.pendings = data;
			});
		});
	};

	thispendings.edit = function(id) {
		$state.go('/'+id+'/edit');
	};
});
