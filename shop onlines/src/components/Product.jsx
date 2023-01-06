import { FavoriteBorderOutlined, SearchRounded, ShoppingCartTwoTone } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
z-index: 3;
cursor: pointer;
transition: all 0.4s ease;
box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.2)
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 340px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background-color: #ffffff;
&:hover ${Info} {
    opacity: 1;
}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 75%;
z-index: 2;
`;

const Icon = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
background-color: white;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
&:hover {
    background-color: lightgrey;
    transform: scale(1.1);

}
`;

const Product = ({ item }) => {
    debugger
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartTwoTone />
                </Icon>
                <Icon>
                    <SearchRounded />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;