package com.paypal.service;

import java.util.List;

import com.paypal.exception.TaskException;
import com.paypal.exception.UserException;
import com.paypal.model.Task;

public interface TaskService {

	public Task createTask(Task task) throws TaskException;
	public List<Task> addAssigneeToTask(Integer taskID,Integer userID) throws TaskException,UserException;
	public Task updateTaskStatus(Integer taskID,String taskStatus) throws TaskException;
}
