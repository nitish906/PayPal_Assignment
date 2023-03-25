package com.paypal.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paypal.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{

}
