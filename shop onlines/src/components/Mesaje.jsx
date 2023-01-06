
import styled from 'styled-components'
import React from 'react';

const Container = styled.div`
display: flex;
align-items:  center;
justify-content: center;
font-size: 20px;
font-weight: 500;
height: 50px;
display:none;
color: white;
`;
;

const Mesaje = () => {
    return (
        <Container>
            Totul pentru motorul tau!
        </Container>
    )
}

export default Mesaje
