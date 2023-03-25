import { Box, Image, Input, Text, Button } from "@chakra-ui/react";
import pic from "../pic1.png"
import Footer from "./Footer";
import Nav from "./Navbar";
import UFooter from "./UFooter";
import { Link } from "react-router-dom";

const Home = () => {
     return (

          <Box >
               <Nav/>
               <Box backgroundImage={"https://cdn2.f-cdn.com/contestentries/1672507/3722903/5dd7ded066799_thumb900.jpg"} height="100vh" backgroundSize={"cover"}  >
                    <Box display={"flex"} justifyContent="space-between" p={"40px"}>
                         <Box ml={"20px"} padding="30px" w={"80%"}>
                              <Text fontSize={"3rem"} lineHeight="1.25" color="white" fontWeight={"500"}>Trello brings all your tasks, teammates, and tools together
                              </Text>
                              <Text fontSize={"18px"} mt="20px" lineHeight="1.25" color="white" fontWeight={"500"} >
                                   Keep everything in the same place—even if your team <br /> isn’t.
                              </Text>
                              <Box display={"flex"} gap="15px" mt={"25px"} >
                                   <Input height={"8vh"} w="50%" backgroundColor={"white"} type="text" placeholder="Email" />
                                   <Button height={"8vh"} bg="#0065ff " color="white" _hover={{ backgroundColor: "blue.600" }} w="30%"> <Link to="/form"> Get Started </Link>  </Button>
                              </Box>
                         </Box>
                         <Box >
                              <Image w="75rem" height={"38rem"} src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp" />
                         </Box>
                    </Box>
               </Box>

               {/* part third  */}
               <Box>
                    <Box w={"50%"} mt="-10rem" padding={"50px"} ml="20px">
                         <Text fontSize={"16px"}>TRELLO 101</Text>
                         <Text fontSize={"36px"} fontWeight="500">A productivity powerhouse</Text><br />
                         <Text fontSize={"20px"}>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}> guide for getting started </span>.</Text>
                    </Box>
               </Box>
               <Box >
                    <Image w="100%" src={pic} />
               </Box>

               <UFooter />
           
               <Footer/>

       
          </Box>


     );
}

export default Home; 