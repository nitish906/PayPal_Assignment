package com.paypal.service;

import java.util.List;

import com.paypal.exception.SprintException;
import com.paypal.exception.TaskException;
import com.paypal.exception.UserException;
import com.paypal.model.Task;
import com.paypal.model.User;

public interface UserService {

	public User createUser(User user) throws UserException;
	public List<Task> viewAllTaskOfUser(Integer userID) throws UserException,TaskException;

}
