import React from "react"
import{ Box, Title, Text, Input, Spacer, Button} from "../../componentes"

const SignUp = () => {

  return <Box background="light" justify="center" align="center" hasPadding>
             <Title bold variant="big">LOOKUP</Title>
             <Spacer/>
             <Text bold color="dark" >SignIn my account.</Text>
             <Spacer size="40px"/>
             <Input placeholder="E-mail" placeholderTextColor="lightgray"/>
             <Spacer/>
             <Input placeholder="Password" placeholderTextColor="lightgray" secureTextEntry/>
             <Spacer size="50px"/>
             <Button block><Text color="light">SignIn my account</Text></Button>  
             <Spacer/>
             <Text underline onPress={()=> alert('teste')}>Create new account</Text>
          </Box>
};


export default SignUp;