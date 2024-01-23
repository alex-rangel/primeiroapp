import styled from "styled-components/native";

export const Box = styled.View`
    flex: 1;
    background-color: white;
    justify-content: center;
    align-items: center;
`
export const Titulo = styled.Text`
    font-weight: 800;
    font-size: 30px;
    color: #130F40;
    margin-top: -250px;
`
export const Texto = styled.Text`
    font-weight: 800;
    font-size: 23px;
    width: 350px;
    text-align: center;
    color: #130F40;
    margin-top: 30px;
    margin-bottom: 20px;
`
export const Input = styled.TextInput`
    width: 86%;
    height: 40px;
    border: 1px solid lightgray;
    margin-bottom:${props => props.margin? props.margin:'20px'};
    color: black;
    padding-left: 10px;
`
export const Botao = styled.TouchableOpacity`
    background-color: red;
    padding: 8px 110px;
    border-radius: 3px;
`
export const Link = styled.Text`
    text-decoration: underline;
    margin-top: 20px;
    color: grey;
`

