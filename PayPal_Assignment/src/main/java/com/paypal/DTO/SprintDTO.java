package com.paypal.DTO;

import java.time.LocalDate;
import java.util.List;


public class SprintDTO {
	
	private int id;
    private String description;
    private LocalDate startDate;
    private LocalDate dueDate;
    private List<TaskDTO> tasks;

}
