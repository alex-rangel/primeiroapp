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


const SignUp = () => {

  return <Box>
            <Titulo>Create new account.</Titulo>
            <Texto>Enter your details below:</Texto>
            <Input placeholder="Nome" placeholderTextColor="lightgray"/>
            <Input placeholder="E-mail" placeholderTextColor="lightgray"/>
            <Input margin='60px' placeholder="Password" placeholderTextColor="lightgray"/>
            <Botao><Text>Create new account</Text></Botao>  
            <Link onPress={()=>alert('teste')}>Back to signin</Link>
          </Box>
};


export default SignUp;