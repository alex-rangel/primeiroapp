import React from "react"
import {Alert, Text} from "react-native"
import {
    Box,
    Titulo,
    Texto,
    Botao,
    Link,
    Div
} from './style'


const Home = () => {

  return <Box>
            <Div>
              <Titulo>LOOKAPP</Titulo>
              <Texto>Stay on top of the fashion world and buy your favorite looks.</Texto>
            </Div>
            <Div>
              <Botao><Text>Sigin my account</Text></Botao>  
              <Link onPress={()=>alert('teste')}>Create new account</Link>
            </Div>
          </Box>
};


export default Home;