import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <h1>My Blog</h1>
    </Container>
  );
};

const Container = styled.dev`
  height: 100vh;
  width: 100vw;
  background-color: lightsalmon;
  display: flex;
  justify-content: center;
`;

export default App;
