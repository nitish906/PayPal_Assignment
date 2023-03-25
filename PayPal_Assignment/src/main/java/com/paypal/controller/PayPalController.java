package com.paypal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.paypal.exception.SprintException;
import com.paypal.exception.TaskException;
import com.paypal.exception.UserException;
import com.paypal.model.Sprint;
import com.paypal.model.Task;
import com.paypal.model.User;
import com.paypal.service.SprintService;
import com.paypal.service.TaskService;
import com.paypal.service.UserService;

@RestController
public class PayPalController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private TaskService taskService;
	
	@Autowired
	private SprintService sprintService;
	
	
	@PostMapping("/createUser")
	public ResponseEntity<User> createUserHandler(@RequestBody User user) throws UserException{
		User addUser=userService.createUser(user);
		return new ResponseEntity<User>(addUser,HttpStatus.CREATED);
	}
	
	@PostMapping("/createTask")
	public ResponseEntity<Task> createTaskHandler(@RequestBody Task task) throws TaskException{
		Task addTask=taskService.createTask(task);
		return new ResponseEntity<Task>(addTask,HttpStatus.CREATED);
	}
	
	@PostMapping("/createSprint")
	public ResponseEntity<Sprint> createSprintHandler(@RequestBody Sprint sprint) throws SprintException{
		Sprint addSprint=sprintService.createSprint(sprint);
		return new ResponseEntity<Sprint>(addSprint,HttpStatus.CREATED);
	}
	
	@PutMapping("/addAssigneeToTask/{taskid}/{userid}")
    public ResponseEntity<List<Task>>	addAssigneeToTaskHandler(@PathVariable("taskid") Integer taskid,@PathVariable("userid") Integer userid) throws TaskException, UserException{
    	
    	return new ResponseEntity<List<Task>>(taskService.addAssigneeToTask(taskid, userid), HttpStatus.OK);
    }
	
	
	@PutMapping("/addTaskToSprint/{taskid}/{sprintid}")
    public ResponseEntity<List<Task>>	addTaskToSprintHandler(@PathVariable("taskid") Integer taskid,@PathVariable("sprintid") Integer sprintid) throws TaskException, SprintException{
    	
    	return new ResponseEntity<List<Task>>(sprintService.addTaskToSprint(taskid, sprintid), HttpStatus.OK);
    }
	
	//updateTaskStatus(Integer taskID,String taskStatus)
    
	@PutMapping("/updateTaskStatus/{taskid}/{taskstatus}")
    public ResponseEntity<Task> updateTaskStatusHandler(
    		@PathVariable("taskid") Integer taskid,@PathVariable("taskstatus") String taskstatus) throws TaskException {

        return new ResponseEntity<Task>(taskService.updateTaskStatus(taskid, taskstatus),
                HttpStatus.OK);
    }
	
	@GetMapping("/viewAllTaskOfUser/{userid}")
	public ResponseEntity<List<Task>> viewAllTaskOfUserHandler(@PathVariable("userid") Integer userid) throws UserException, TaskException{
		
        return new ResponseEntity<List<Task>>(userService.viewAllTaskOfUser(userid), HttpStatus.FOUND);

		
	}
	
	@GetMapping("/viewAllTaskInSprint/{sprintid}")
	public ResponseEntity<List<Task>> viewAllTaskInSprintHandler(@PathVariable("sprintid") Integer sprintid) throws SprintException, TaskException{
		
        return new ResponseEntity<List<Task>>(sprintService.viewAllTaskInSprint(sprintid), HttpStatus.FOUND);

		
	}
	
	
}
