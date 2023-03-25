package com.paypal.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paypal.model.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task, Integer>{

}
