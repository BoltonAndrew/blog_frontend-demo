import React from 'react';
import styled from 'styled-components';

const Post = () => {
    return(
        <Container>
            <h1>I'm the post</h1>
        </Container>
    ) 
};

const Container = styled.div`
    height: 200px;
    width: 250px;
    border: 1px solid red;
    margin: 3px;
`;

export default Post;