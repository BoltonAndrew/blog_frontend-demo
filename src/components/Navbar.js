import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return(
    <Container>
        <h1>I'm the navbar</h1>
    </Container>
    )
};

const Container = styled.dev`
    width: 100vw;
    height: 50px;
    background-color: lightseagreen;
`;

export default Navbar;