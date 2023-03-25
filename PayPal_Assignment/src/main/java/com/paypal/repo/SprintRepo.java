package com.paypal.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paypal.model.Sprint;

@Repository
public interface SprintRepo extends JpaRepository<Sprint, Integer>{

}
