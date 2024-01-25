import React from "react"
import{ Box, Title, Text, Input, Spacer, Button} from "../../componentes"

const SignUp = () => {

  return <Box background="light" justify="center" align="center" hasPadding>
             <Title bold>Create new account.</Title>
             <Spacer/>
             <Text>Enter your details below:</Text>
             <Spacer size="40px"/>
             <Input placeholder="Nome" placeholderTextColor="lightgray"/>
             <Spacer/>
             <Input placeholder="E-mail" placeholderTextColor="lightgray"/>
             <Spacer/>
             <Input placeholder="Password" placeholderTextColor="lightgray" secureTextEntry/>
             <Spacer size="50px"/>
             <Button block><Text color="light">Create new account</Text></Button>  
             <Spacer/>
             <Text underline onPress={()=> alert('teste')}>Back to signin</Text>
          </Box>
};


export default SignUp;