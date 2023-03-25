package com.paypal.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer taskid;
	@NotNull
	private String taskType;
	
	private String taskStatus;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private Sprint sprint;
	@ManyToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private User assignee;
	
	
	
	
}
