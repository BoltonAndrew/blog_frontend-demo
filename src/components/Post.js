import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Post = ({ post }) => {
    
    return(
        <Container>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{moment.utc(post.createdAt).fromNow()}</p>
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