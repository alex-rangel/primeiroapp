import React from "react"
import {Alert, Text} from "react-native"
import {
    Box,
    Titulo,
    Texto,
    Input,
    Botao,
    Link
} from './style'


const SignIn = () => {

  return <Box>
            <Titulo>LOOKAPP</Titulo>
            <Texto>SignIn my account.</Texto>
            <Input placeholder="E-mail" placeholderTextColor="lightgray"/>
            <Input margin="40px" placeholder="Password" placeholderTextColor="lightgray"/>
            <Botao><Text>Sigin into my account</Text></Botao>  
            <Link onPress={()=>alert('teste')}>Create new account</Link>
          </Box>
};


export default SignIn;