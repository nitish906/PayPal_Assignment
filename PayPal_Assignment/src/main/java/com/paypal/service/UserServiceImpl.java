package com.paypal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paypal.exception.SprintException;
import com.paypal.exception.TaskException;
import com.paypal.exception.UserException;
import com.paypal.model.Sprint;
import com.paypal.model.Task;
import com.paypal.model.User;
import com.paypal.repo.UserRepo;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo userRepo;
	@Override
	public User createUser(User user) throws UserException {
		// TODO Auto-generated method stub
		return userRepo.save(user);
	}
	@Override
	public List<Task> viewAllTaskOfUser(Integer userID) throws UserException, TaskException {
		 Optional<User> opt=userRepo.findById(userID);
			
			if(opt.isEmpty())
			{
				throw new UserException("No user found with given id");
			}
			if(opt.get().getTasklist()==null)
			{
				throw new TaskException("no task found for the particular user");
			}
			return opt.get().getTasklist();
	}

}
