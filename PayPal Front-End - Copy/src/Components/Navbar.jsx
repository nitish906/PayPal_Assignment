import { Box, Text, Image, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Nav = () => {
     return (

          <Box  w={"100%"} backgroundColor="white" id="main" display={"flex"} p="10px" justifyContent="space-between" alignItems={"center"} height={"70px"} boxShadow="" >

               <Box display={"flex"} alignItems="center" gap={"30px"} ml="10px">
                    <Image w={"20%"} src="https://cdn-icons-png.flaticon.com/512/196/196566.png" />
                    <Text fontWeight={"bold"} color="gray.600" _hover={{ color: "blue" }} cursor="pointer" fontSize={"19px"} >Sprint</Text>
                    <Text fontWeight={"bold"} color="gray.600" _hover={{ color: "blue" }} cursor="pointer" fontSize={"19px"}>Bug</Text>
                    <Text fontWeight={"bold"} color="gray.600" _hover={{ color: "blue" }} cursor="pointer" fontSize={"19px"}> Feature</Text>
                    <Text fontWeight={"bold"} color="gray.600" _hover={{ color: "blue" }} cursor="pointer" fontSize={"19px"}>Story</Text>
               </Box>
               <Box>
             <Link to="form" >     <Button w="12rem" height={"70px"} fontSize="19px" fontWeight={"600"} backgroundColor="
#0065ff" _hover={{ backgroundColor: "#134da3" }} color="white" borderRadius="0px">Get Started</Button></Link>  
               </Box>


          </Box>

     );
}

export default Nav;