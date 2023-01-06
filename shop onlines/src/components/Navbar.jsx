
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartTwoTone } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive.js'

const Container = styled.div`
height: 60px;
margin-bottom: 15px;
${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items:center;
justify-content: space-between;
font-size: 20px;
${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
display:flex;
align-items: center;
flex:1;
`;

const Language = styled.span`
font-size: 20px;
cursor: pointer;
${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
display: flex;
align-items: center;
margin-left: 25px;
border : 3px solid lightgray;
padding: 8px;
`;

const Input = styled.input`
border: none;
font-size: 18px;
${mobile({ width: "50px" })}
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
font-weight: bold;
cursor: pointer;
color : black;
font-size: 40px;
${mobile({ fontSize: "14px" })}
`;

const Right = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuLink = styled.div`
margin-left: 25px;
font-size: 20px;
cursor: pointer;
${mobile({ fontSize: "12px", marginLeft: "10px" })}

`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Cauta' />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo> MOTO BIKE </Logo>
                </Center>

                <Right>
                    < MenuLink>Creaza cont</MenuLink>
                    < MenuLink>Log in</MenuLink>
                    < MenuLink>
                        <Badge overlap="rectangular" badgeContent={4} color="primary" />
                        <ShoppingCartTwoTone />
                    </MenuLink>
                </Right>

            </Wrapper>

        </Container>
    )
}

export default Navbar
