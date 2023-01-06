import React from 'react'
import styled from 'styled-components'
import Mesaje from '../components/Mesaje';
import Galerie from '../components/Galerie';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';



const Container = styled.div``;

const Wrapper = styled.div`
padding: 50px; 
display: flex;
${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
display:flex;
align-items: center;
width: 70%;
`;

const Image = styled.img`
width: 60%;
height: 50vh;
object-fit: cover;
border-radius: 15px;
box-shadow: 0 4px 8px 0 rgba(125, 60, 60, 0.2), 0 6px 20px 0 rgba(116, 39, 39, 0.19);
${mobile({ height: "35vh" })}
`;


const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
font-weight: 400;
margin-top: 20px;
`;

const Description = styled.p`
margin: 30px 0px;
`;

const Price = styled.span`
font-size: 40px;
font-weight: 80;
color: red;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
${mobile({ width: "100%" })}
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 100;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center; 
justify-content: space-between;
cursor: pointer;
${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 600;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 4px;
border-radius: 10px;
border: 2px solid lightgrey;
`;

const Button = styled.button`
border: 2px solid lightgrey;
font-weight: 400;
padding: 10px;
color: white;
background-color: black;
cursor: pointer;
&:hover{
    background-color: #670f0f
}
`;


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Galerie />
            <Wrapper>
                <ImageContainer>
                    <Image src="../thor125a.jpg" />
                </ImageContainer>
                <InfoContainer>

                    <Title> BARTON THOR 125cc</Title>

                    <Description>

                        <p>MOTOR – 4T, monocilindric</p>
                        <p>MOTOR – 4T, monocilindric</p>
                        <p>MOTOR – 4T, monocilindric</p>
                        <p>MOTOR – 4T, monocilindric</p>
                        MOTOR – 4T, monocilindric
                        CAPACITATE – 125 cm 3
                        APRINDERE – electrica la buton
                        PUTERE MAXIMĂ – 5,2kW / 8.500 rpm
                        TRANSMISIE – automata
                        DIMENSIUNI SI GREUTATE
                        LUNGIME: 1530 mm
                        ÎNĂLȚIME: 980 mm
                        Lațime: 930 mm
                        Înălțimea scaunului: 700 mm
                        Ampatament: 950 mm
                        Greutate : 92 kg
                        JANTE FATA: Otel 8”
                        FRANA FATA: tambur
                        JANTE SPATE: Oțel 8”
                        FRANA SPATE: Disc, hidraulica
                    </Description>

                    <Price> 5800 lei </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Culoare</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="blue" />
                            <FilterColor color="green" />
                            <FilterColor color="yellow" />
                            <FilterColor color="red" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Marime</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>49</FilterSizeOption>
                                <FilterSizeOption>125</FilterSizeOption>
                                <FilterSizeOption>150</FilterSizeOption>
                                <FilterSizeOption>300</FilterSizeOption>
                                <FilterSizeOption>450</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>AGAUGA IN COS</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
