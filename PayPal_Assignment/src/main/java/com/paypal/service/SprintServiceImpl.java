package com.paypal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paypal.exception.SprintException;
import com.paypal.exception.TaskException;
import com.paypal.model.Sprint;
import com.paypal.model.Task;
import com.paypal.repo.SprintRepo;
import com.paypal.repo.TaskRepo;

@Service
public class SprintServiceImpl implements SprintService{

	@Autowired
	private SprintRepo sprintRepo;
	@Autowired
	private TaskRepo taskRepo;
	@Override
	public Sprint createSprint(Sprint sprint) throws SprintException {
		// TODO Auto-generated method stub
		return sprintRepo.save(sprint);
	}
	@Override
	public List<Task> addTaskToSprint(Integer taskID, Integer sprintID) throws TaskException, SprintException {
		// TODO Auto-generated method stub
		Optional<Sprint> opt=sprintRepo.findById(sprintID);
		
		if(opt.isEmpty())
		{
			throw new SprintException("No sprint found with given id");
		}
		
        Optional<Task> opt2=taskRepo.findById(taskID);
		
		if(opt2.isEmpty())
		{
			throw new SprintException("No task found with given id");
		}
		opt2.get().setSprint(opt.get());
		taskRepo.save(opt2.get());
		Sprint spr=opt.get();
		spr.getTasklist().add(opt2.get());
		
		Sprint sprints=sprintRepo.save(spr);
		return sprints.getTasklist();
		
	
	}
	@Override
	public List<Task> viewAllTaskInSprint(Integer sprintID) throws SprintException, TaskException {
		// TODO Auto-generated method stub
        Optional<Sprint> opt=sprintRepo.findById(sprintID);
		
		if(opt.isEmpty())
		{
			throw new SprintException("No sprint found with given id");
		}
		if(opt.get().getTasklist()==null)
		{
			throw new TaskException("no task found in the sprint");
		}
		return opt.get().getTasklist();
		
	}

}
