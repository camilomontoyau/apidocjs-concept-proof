angular.module('todoApp').controller("overdueCtrl",function ($state, $http) {
	var thisoverdues = this;
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

	$http.get(prefix+"?dueDate__lt="+today).success(function(data){
		thisoverdues.pendings = data;
	});

	thisoverdues.predicate = 'name';
	thisoverdues.reverse = true;
	thisoverdues.order = function(predicate) {
		thisoverdues.reverse = (thisoverdues.predicate === predicate) ? !thisoverdues.reverse : false;
	    thisoverdues.predicate = predicate;
	};

	thisoverdues.save = function() {
		if(
			typeof thisoverdues.task!='undefined'
			&& typeof thisoverdues.task.name!='undefined' 
			&& typeof thisoverdues.task.dueDate!='undefined' 
		)
		{
			$http.post(prefix,thisoverdues.task).success(function(data){
				alert("Saved!");
				$http.get(prefix+"?dueDate__lt="+today).success(function(data){
					thisoverdues.pendings = data;
				});
			});	
		}
		else{
			alert("please fill all the fields!");
		}
	};

	thisoverdues.delete = function(id) {
		$http.delete(prefix+'/'+id).success(function(data){
			alert("Successfully deleted");
			$http.get(prefix+"?dueDate__lt="+today).success(function(data){
				thisoverdues.pendings = data;
			});
		});
	};

	thisoverdues.edit = function(id) {
		$state.go('/'+id+'/edit');
	};
});
