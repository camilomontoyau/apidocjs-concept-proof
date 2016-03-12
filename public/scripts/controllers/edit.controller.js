angular.module('todoApp').controller("editCtrl",function ($state, $http, $stateParams) {
	var thisedits = this;
	var prefix = '/api/task';
	thisedits.currentId = $stateParams.id;

	$http.get(prefix+"/"+thisedits.currentId).success(function(data){
		thisedits.task = data;
		var splittedDate = thisedits.task.dueDate.split("T")[0];
		var date = splittedDate.split("-");
		var dueDate = date[0]+"-"+date[1]+"-"+date[2];
		thisedits.task.dueDate = dueDate
		
	});

	thisedits.save = function() {
		if(
			typeof thisedits.task!='undefined'
			&& typeof thisedits.task.name!='undefined' 
			&& typeof thisedits.task.dueDate!='undefined' 
		)
		{
			$http.put(prefix+"/"+thisedits.currentId,thisedits.task).success(function(data){
				alert("Saved!");
				$state.go('pendings');
			});	
		}
		else{
			alert("please fill all the fields!");
		}
	};
});


