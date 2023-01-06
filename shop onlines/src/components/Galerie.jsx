
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 98vw;
  height: 300px;
  background-image: url(/bannerimage.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 5%;
  padding: 0px;
`;

function Galerie() {
    return <Container />;
};

export default Galerie;