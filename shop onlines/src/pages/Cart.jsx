import React from 'react'
import styled from 'styled-components'
import Mesaje from '../components/Mesaje'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div``;

const Wrapper = styled.div`
padding: 10px;
${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
padding: 15px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
flex: 3; `;

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;

const ProductName = styled.span``;

const ProductDetail = styled.div`
flex: 2
display flex;
`;



const ProductImage = styled.img`
width: 200px;
${mobile({ width: "30%" })}
`;

const ProductDetails = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
  justify-content: space-around;
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50 %
background-color, ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductQuantityContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`;

const Quantity = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px", fontSize: "10px" })}
`;


const ProductPrice = styled.div`
font-size: 22px;
font-weight: 200;
${mobile({ marginBottom: "10px", fontSize: "14px" })}
`;

const Separator = styled.h2`
background-color: grey;
border: none;
height: 1px;
`;

const OrderInfo = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const OrderTitle = styled.h3`
font-weight: 200;
`;

const OrderItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"};
`;

const OrderItemText = styled.span``;

const OrderItemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight:600;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Mesaje></Mesaje>

            <Wrapper>
                <Title>Cosul tau</Title>
                <Top>
                    <TopButton>Continua cumparaturile</TopButton>
                    <TopTexts>
                        <TopText>Cosul tau(2)</TopText>
                        <TopText>Favorite (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Finalizeaza comanda</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <ProductImage src="axxis.jpg" />
                                <ProductDetails>
                                    <ProductName>
                                        <b>Product:</b> CASCA MT
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 455145
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Marime:</b> M
                                    </ProductSize>
                                </ProductDetails>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductQuantityContainer>
                                    <Remove />
                                    <Quantity>2</Quantity>
                                    <Add />
                                </ProductQuantityContainer>
                                <ProductPrice>250 LEI</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Separator />
                        <Product>
                            <ProductDetail>
                                <ProductImage src="barton200_1.jpg" />
                                <ProductDetails>
                                    <ProductName>
                                        <b>Product:</b> ATV BARTON 125
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 455758
                                    </ProductId>
                                    <ProductColor color="red" />
                                    <ProductSize>
                                        <b>Capacitate:</b> 125cc
                                    </ProductSize>
                                </ProductDetails>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductQuantityContainer>
                                    <Remove />
                                    <Quantity>1</Quantity>
                                    <Add />
                                </ProductQuantityContainer>
                                <ProductPrice>450 LEI</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <OrderInfo>
                        <OrderTitle> COMANDA</OrderTitle>
                        <OrderItem>
                            <OrderItemText>Subtotal:</OrderItemText>
                            <OrderItemPrice>500 lei</OrderItemPrice>
                        </OrderItem>
                        <OrderItem>
                            <OrderItemText>Subtotal:</OrderItemText>
                            <OrderItemPrice>5800 lei</OrderItemPrice>
                        </OrderItem>
                        <OrderItem>
                            <OrderItemText>Costuri transport:</OrderItemText>
                            <OrderItemPrice> 49 lei</OrderItemPrice>
                        </OrderItem>
                        <OrderItem>
                            <OrderItemText>Reducere transport:</OrderItemText>
                            <OrderItemPrice> -49 lei</OrderItemPrice>
                        </OrderItem>
                        <OrderItem type="total">
                            <OrderItemText>TOTAL COMANDA:</OrderItemText>
                            <OrderItemPrice>6300 LEI</OrderItemPrice>
                        </OrderItem>
                        <Button>TRIMITE COMANDA</Button>
                    </OrderInfo>
                </Bottom >
            </Wrapper >
            <Footer />
        </Container >
    );
};

export default Cart
