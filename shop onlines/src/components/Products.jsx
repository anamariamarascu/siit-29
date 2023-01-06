
import styled from "styled-components";
import { latestProducts } from "../data.js"
import Product from "./Product";
import axios from "axios";
import React from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>
            {latestProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};


export default Products;