import styled from "styled-components"
import { mobile } from "../responsive";
import React from 'react';
import { Link } from "react-router-dom";



const Container = styled.div`
flex: 1;
margin: 6px;
height: 50vh;
position: relative;
box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.2);
`;


const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "25vh" })}
`;

const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
color: white;
margin-bottom: 20px;
border: 1px solid white;
padding: 5px;
background-color: rgba(255, 0, 0, 0.5);
`;

const Button = styled.button`
border: none;
padding: 8px;
cursor: pointer;
color: grey;
font-weight: 400;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>CUMPARA</Button>
                </Info>
            </Link>

        </Container>
    )
}

export default CategoryItem
