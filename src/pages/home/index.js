import React from "react"
import {  } from "react-native"
import { Box, Title, Button, Spacer, Text} from "../../componentes"


const Home = () => {

  return <Box justify="center" hasPadding align="center" background="dark">
            <Box justify="center" align="center">
              <Title color="light" bold>LOOKAPP</Title>
              <Spacer/>
              <Text align="center" spacing="0px 40px" color="light">Stay on top of the fashion world and buy your favorite looks.</Text>
            </Box>
            <Box fluid justify="center" align="center">
              <Button block><Text color="light">Sigin my account</Text></Button>  
              <Spacer/>
              <Text underline color="light" onPress={()=> alert('teste')}>Create new account</Text>
            </Box>
          </Box>
};


export default Home;