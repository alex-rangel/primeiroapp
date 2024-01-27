import React from "react";
import { Box, Text} from "../../componentes"
import Header from "../../componentes/Header";
import StoryList from "../../componentes/Story/storylist";

const Feed = () => {
    return(
    <Box background="light">
        <Header/>
        <StoryList/>
    </Box>
    )
}

export default Feed