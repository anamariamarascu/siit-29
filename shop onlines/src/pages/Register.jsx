import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';


const Container = styled.div`
width: 100vw;
height: 100vh;
background-image: url("background_image.webp");
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const GPDR = styled.span`
  font-size: 12px;
  margin: 30px 6px;
`;

const Button = styled.button`
  width: 20%;
  margin: 20px 6px;
  border: none;
  padding: 10px 5px;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #670f0f}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAZA CONT</Title>
        <Form>
          <Input placeholder="Prenume" />
          <Input placeholder="Nume" />
          <Input placeholder="UserName" />
          <Input placeholder="Email" />
          <Input placeholder="Parola" />
          <Input placeholder="Repeta parola" />
          <GPDR>Declar ca sunt de acord cu <b>Termeni si Conditii</b></GPDR>
          <Button>CREAZA CONT</Button>
        </Form>
      </Wrapper>
    </Container >
  );
};

export default Register
