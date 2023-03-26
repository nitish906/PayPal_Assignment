import React from 'react'

import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, HStack, Input, Select, Heading } from "@chakra-ui/react";
import Anavbar from './Anavbar';

import { useState } from 'react';
import axios from 'axios'

const Sprint = () => {


    const [formData, setFormData] = useState({
        name: '',
        Taskname: '',
        TaskType: ''
    });

    const handleSubmit = (event) => {
        // event.preventDefault();
        axios.post('http://localhost:8888/createSprint', formData)
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

    return (
        <Box> <Anavbar />
        <Box display={"flex"} justifyContent="space-between" padding={"20px"}>

            <Box border={"2px dotted red"} padding="20px" w={"350px"}>
                <Heading textAlign={"center"} fontSize="20px">Add Sprint</Heading>

                    <FormControl isRequired mt="10px" onSubmit={handleSubmit} >
                    <FormLabel mt={"5px"}> Sprint Name
                    </FormLabel>
                    <Input mt={"-10px"} placeholder=' Enter Your Sprint Name' />
                    <FormLabel mt={"5px"}> sprint Description

                    </FormLabel>
                    <Input mt={"-10px"} placeholder=' Enter Your sprintDescription' />
                    <FormLabel mt={"5px"}> sprintStartDate

                    </FormLabel>
                    <Input mt={"-10px"} type='date' />
                    <FormLabel mt={"5px"}> sprintDueDate


                    </FormLabel>
                    <Input mt={"-10px"} type='date' />

                  
                    <FormControl as='fieldset' mt={"5px"}>
                        <FormLabel as='legend' htmlFor={null} >
                            Task List
                        </FormLabel>
                        <RadioGroup defaultValue='Itachi' mt={"-10px"}>
                            <HStack spacing='24px'>
                                <Radio value='Bug'>Bug</Radio>
                                <Radio value='Feature'>Feature</Radio>
                                <Radio value='Story'>Story</Radio>
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


            </Box>  </Box> 
    )
}

export default Sprint