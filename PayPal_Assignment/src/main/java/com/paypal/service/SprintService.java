package com.paypal.service;

import java.util.List;

import com.paypal.exception.SprintException;
import com.paypal.exception.TaskException;
import com.paypal.model.Sprint;
import com.paypal.model.Task;

public interface SprintService {

	public Sprint createSprint(Sprint sprint)throws SprintException;
	
	public List<Task> addTaskToSprint(Integer taskID,Integer sprintID) throws TaskException,SprintException;
	public List<Task> viewAllTaskInSprint(Integer sprintID) throws SprintException,TaskException;
}
