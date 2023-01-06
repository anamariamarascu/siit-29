
import { SendRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
height: 40vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #f6f5e6;
`;

const Desc = styled.div`
font-size: 28px;
font-weight: 400;
margin-bottom: 20px;
${mobile({ textAlign: "center" })}
`;


const InputContainer = styled.div`
width : 50%;
height: 10%;
display: flex;
justify-content: space-between;
background-color: white;
border: 1px solid lightgrey;
${mobile({ width: "80%" })}
`;

const Input = styled.input`
flex: 8;
border: none;
padding-left: 20px;

`;

const Button = styled.button`
flex: 1;
border: none;
color: red;
background-color: black;
`;

const Newsletter = () => {
    return (
        <Container>
            <Desc>INSCRIE-TE LA NEWSLETTER</Desc>
            <InputContainer>
                <Input placeholder="Adauga E-mail" />
                <Button>
                    <SendRounded />
                </Button>
            </InputContainer>

        </Container >
    )
}

export default Newsletter
