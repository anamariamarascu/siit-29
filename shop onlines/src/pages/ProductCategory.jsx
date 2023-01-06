import React, { useState } from 'react';
import styled from 'styled-components'
import Mesaje from "../components/Mesaje"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from '../responsive'
import { useLocation } from 'react-router';


const Container = styled.div`
`;

const Title = styled.h3`
margin: 20px;
${mobile({ fontSize: "24px" })}
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;


const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 10px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 500;
margin-right: 20px;
${mobile({ marginRight: "0px" })}
 `;

const Select = styled.select`
padding: 8px;
margin-right: 20px;
${mobile({ margin: "20px 0px" })}
`;

const Option = styled.option`
`;

const ProductCategory = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState({});

    const handleFilters = (event) => {
        const value = event.target.value;
        setFilters({
            ...filters,
            [event.target.name]: value,
        });
    };


    return (
        <Container>
            <Navbar />
            <Mesaje />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter><FilterText>Filtreaza</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>
                            Culoare
                        </Option>
                        <Option>rosu</Option>
                        <Option>albastru</Option>
                        <Option>verde</Option>
                        <Option>gri</Option>
                        <Option>alb</Option>
                        <Option>galben</Option>
                    </Select>
                    <Select name="capacitate" onChange={handleFilters}>
                        <Option disabled>
                            Capacitate cc
                        </Option>
                        <Option>49</Option>
                        <Option>125</Option>
                        <Option>150</Option>
                        <Option>300</Option>
                        <Option>400</Option>
                        <Option>800</Option>
                        <Option>900</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sorteaza</FilterText>
                    <Select onChange={(event) => setSort(event.target.value)}>
                        <Option value="noutate">Cel mai nou</Option>
                        <Option value="ascendent">Pret</Option>
                        <Option value="descendent">Capacitate</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductCategory;
