import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, HStack, Input, Select, Heading } from "@chakra-ui/react";


import React, { useState } from 'react';
import axios from 'axios';
import Anavbar from "./Anavbar";

const Form = () => {


     const [formData, setFormData] = useState({
          name: '',
          Taskname: '',
          TaskType: ''
     });

     const handleSubmit = (event) => {
          // event.preventDefault();
          axios.post('http://localhost:8888/createUser', formData)
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


     return (<Box>
          <Anavbar/>
          <Heading textAlign={"center"} fontSize="20px">Welcome in Nitish's world</Heading>
          <Box display={"flex"} justifyContent="space-between" padding={"20px"}>

               <Box border={"2px dotted red"} padding="20px" w={"350px"}>
                    <Heading textAlign={"center"} fontSize="20px">Create A user with task</Heading>

                    <FormControl isRequired mt="10px" onSubmit={handleSubmit} >
                         <FormLabel mt={"5px"}>User Name</FormLabel>
                         <Input mt={"-10px"} placeholder=' Full Name' />

                         <FormLabel mt={"5px"}>Task Name</FormLabel>
                         <Input mt={"-10px"} placeholder='Task Name' />
                         <FormControl as='fieldset' mt={"5px"}>
                              <FormLabel as='legend' htmlFor={null} >
                                   Task Type
                              </FormLabel>
                              <RadioGroup defaultValue='Itachi' mt={"-10px"}>
                                   <HStack spacing='24px'>
                                        <Radio value='Bug'>Bug</Radio>
                                        <Radio value='Feature'>Feature</Radio>
                                        <Radio value='Story'>Story</Radio>
                                   </HStack>
                              </RadioGroup>
                         </FormControl>


                         <FormLabel mt={"5px"}>Status</FormLabel>
                         <Select mt={"-10px"} placeholder='Select Status'>
                              <option>Pending</option>
                              <option>Complete</option>
                         </Select>

                         <FormLabel mt={"5px"}>Date</FormLabel>
                         <Input mt={"-10px"} placeholder='Date' type={"date"} />
                         <FormLabel mt={"5px"}>Sprint name</FormLabel>
                         <Input mt={"-10px"} placeholder='Sprint name' />


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
               <Box w="300px" border={"2px dotted red"} padding="20px" >Bug
               </Box>
               <Box w="300px" border={"2px dotted red"} padding="20px">Feature

               </Box>
               <Box w="300px" border={"2px dotted red"} padding="20px">Story

               </Box>

          </Box> </Box>
     );
}

export default Form;