import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup";
import Login from "../components/Authentication/Login";
import  { useNavigate } from 'react-router-dom';


const HomePage = () => {

  const navigate = useNavigate();
    useEffect(()=>{
        const user= JSON.parse(localStorage.getItem('userInfo'));

        if(user){
            navigate("/chats");
        }
    },[navigate])
    
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Gap-Chap
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius={"lg"}
        color="black"
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
