import { EmailRounded, Facebook, Instagram, PhoneEnabledRounded, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
flex:1 ;
display: flex;
flex-direction: column;
padding: 10px;
`;

const LogoTitle = styled.h1`
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-right: 22px;
background-color: #${props => props.color};
color: white;
`;

const Center = styled.div`
flex: 1;
padding: 10px;
${mobile({ display: "none" })};
`;

const Title = styled.h3`
margin-bottom: 20px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
list-style: none;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#eeebe0" })};
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 60%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <LogoTitle>MOTO BIKE</LogoTitle>
                <Desc>
                    Magazin pe piese de motociclete,scutere, atv si motoutilaje, vanzare de scutere si atv-uri, reparatia şi intretinerea acestora. Aici gasesti o gama completa de piese pentru motorul tau. Piese de cea mai buna calitate la cel mai bun pret si piese pe OEM - original direct de la fabrica.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Link-uri utile</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Livrare</ListItem>
                    <ListItem>Piese</ListItem>
                    <ListItem>Termeni si conditii</ListItem>
                    <ListItem>Accesorii</ListItem>
                    <ListItem>Favorite</ListItem>
                    <ListItem>Vehicule</ListItem>
                    <ListItem>Cum cumpar</ListItem>
                    <ListItem>Livrare</ListItem>
                    <ListItem>Retur</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{
                        marginRight: "10px"
                    }} />
                    Str Focsani- Vrancea
                </ContactItem>
                <ContactItem><PhoneEnabledRounded style={{
                    marginRight: "10px"
                }} />
                    Telefon : 00000068774
                </ContactItem>
                <ContactItem><EmailRounded style={{
                    marginRight: "10px"
                }} />
                    e-mail: mail@moto-bike.ro
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer

