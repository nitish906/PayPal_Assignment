package com.paypal.DTO;

import java.time.LocalDate;

import ch.qos.logback.core.status.Status;


public class TaskDTO {
	private int id;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalDate updateDate;
    private UserDTO user;
    private Status status;

}
