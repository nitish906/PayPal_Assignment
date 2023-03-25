package com.paypal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paypal.exception.TaskException;
import com.paypal.exception.UserException;
import com.paypal.model.Sprint;
import com.paypal.model.Task;
import com.paypal.model.User;
import com.paypal.repo.TaskRepo;
import com.paypal.repo.UserRepo;

@Service
public class TaskServiceImpl implements TaskService{

	@Autowired
	private TaskRepo taskRepo;
	@Autowired
	private UserRepo userRepo;
	@Override
	public Task createTask(Task task) throws TaskException {
		// TODO Auto-generated method stub
		return taskRepo.save(task);
	}
	@Override
	public List<Task> addAssigneeToTask(Integer taskID, Integer userID) throws TaskException, UserException {
		// TODO Auto-generated method stub
		Optional<Task> opt=taskRepo.findById(taskID);
		if(opt.isEmpty())
		{
			throw new TaskException("no task found with given task id");
		}
		
		Optional<User> opt2=userRepo.findById(userID);
		if(opt.isEmpty())
		{
			throw new TaskException("no assignee found with given user id");
		}
		
		//opt2.get().setSprint(opt.get());
		opt.get().setAssignee(opt2.get());
		taskRepo.save(opt.get());
		User usr=opt2.get();
		usr.getTasklist().add(opt.get());
		
		User us=userRepo.save(usr);
		return us.getTasklist();
		

	}
	@Override
	public Task updateTaskStatus(Integer taskID, String taskStatus) throws TaskException {
		// TODO Auto-generated method stub
		Optional<Task> opt=taskRepo.findById(taskID);
		if(opt.isEmpty())
		{
			throw new TaskException("no task found with given task id");
		}
		opt.get().setTaskStatus(taskStatus);
		return taskRepo.save(opt.get());
		 
	}

	
}
