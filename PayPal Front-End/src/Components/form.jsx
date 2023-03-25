import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, HStack, Input, Select, Heading } from "@chakra-ui/react";

const Form = () => {
     return (
          <Box display={"flex"} justifyContent="space-between" padding={"20px"}>

               <Box border={"2px dotted red"} padding="20px" w={"350px"}>
                    <Heading textAlign={"center"} fontSize="20px">Add Task</Heading>

                    <FormControl isRequired mt="10px">
                         <FormLabel mt={"5px"}> Name</FormLabel>
                         <Input mt={"-10px"} placeholder=' Name' />

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

          </Box>
     );
}

export default Form;