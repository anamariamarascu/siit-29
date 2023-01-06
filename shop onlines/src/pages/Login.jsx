import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive.js'

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-image: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5),
  ),
  url("./background_image.webp");
`;

const Wrapper = styled.div`
width: 15%;
padding: 20px;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 18px;
font-weight: 250;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 8px 0px;
padding: 10px;
`;

const Button = styled.button`
width: 65%;
border: none;
padding: 10px 5px;
margin-bottom: 15px;
background-color: black;
color: white;
cursor: pointer;
&:hover{
    background-color: #670f0f}
`;

const Link = styled.a`
font-size: 12px;
margin: 5px 0px;
cursor: pointer;
    `;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>AUTENTIFICARE</Title>
                <Form>
                    <Input placeholder="Email" />
                    <Input placeholder="Parola" />
                    <Button>INTRA IN CONT</Button>
                    <Link>TI-AI UITAT PAROLA?</Link>
                    <Link>CREAZA CONT NOU</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
