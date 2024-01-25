import React from "react";
import { Box, Title, Touchable } from "../../componentes"
import { colors } from "../../styles/tema.json";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 
const Header = () => {
    return(  
    <Box background="light" fluid row height="60px" border={`1px solid ${colors.muted}50`} >
        <Touchable width="80px"><Icon name="menu" size={20}/></Touchable> 
        <Box justify="center" align="center"><Title>Explore</Title></Box>
        <Box width="80px"></Box>
    </Box>
    )
}

export default Header