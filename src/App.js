import styled from 'styled-components';
import NavBar from './components/Navbar';
import Post from './components/Post';

const App = () => {
  return (
    <Container>
      <NavBar/>
      <h1>My Blog</h1>
      <Post/>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lightsalmon;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
