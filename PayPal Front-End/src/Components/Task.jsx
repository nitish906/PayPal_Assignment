import React from 'react'
import { option,  Box, Button, FormControl, FormLabel, Radio, RadioGroup, HStack, Input, Select, Heading } from "@chakra-ui/react";
import Anavbar from './Anavbar';
import axios from 'axios';
import { useState } from 'react';
const Task = () => {

    const [formData, setFormData] = useState({
        name: '',
        Taskname: '',
        TaskType: ''
    });

    const handleSubmit = (event) => {
        // event.preventDefault();
        axios.post('http://localhost:8888/createTask', formData)
            .then(response => {
                console.log(response);
                // do something with the response
            })
            .catch(error => {
                console.log(error);
                // do something with the error
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (<Box> <Anavbar/>
        <Box display={"flex"} justifyContent="space-between" padding={"20px"}>

            <Box border={"2px dotted red"} padding="20px" w={"350px"}>
                <Heading textAlign={"center"} fontSize="20px">Add Task</Heading>

                <FormControl isRequired mt="10px" onSubmit={handleSubmit} >
                    <FormLabel mt={"5px"}> Task Name</FormLabel>
                    <Input mt={"-10px"} placeholder=' Enter Your Task Name' />
                    <FormLabel mt={"5px"}> Task Description</FormLabel>
                    <Input mt={"-10px"} placeholder=' Enter Your TaskDescription' />
                    <FormLabel mt={"5px"}> Task StartDate</FormLabel>
                    <Input mt={"-10px"} type='date' />
                    <FormLabel mt={"5px"}> Task EndDate</FormLabel>
                    <Input mt={"-10px"} type='date' />
                    <FormLabel mt={"5px"}> Task UpdateDate</FormLabel>
                    <Input mt={"-10px"} type='date' />
                    <FormLabel mt={"5px"}> Sprint</FormLabel>
                    <Select> 
                        <option>Bug</option>
                        <option> Features  </option>
                        <option> Story</option>
                    
                    </Select>
                    <FormControl as='fieldset' mt={"5px"}>
                        <FormLabel as='legend' htmlFor={null} >
                            Task Status
                        </FormLabel>
                        <RadioGroup defaultValue='Itachi' mt={"-10px"}>
                            <HStack spacing='24px'>
                                <Radio value='Bug'>TODO</Radio>
                                <Radio value='Feature'>INPROGRESS</Radio>
                                <Radio value='Story'>DONE</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>




                    <Button
                        ml="6rem"
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                        textAlign={"center"}
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>


        </Box></Box>
    )
}

export default Task