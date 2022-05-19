
import styled from "styled-components";


const Container = styled.div`
height: 30px;
background-color: green;
color: white;
display: flex;
justify-content: center;
font-size: 14px;
font-weight:500;

`;

const Announcement = () => {
  return (
    <Container>
       Aswesome Announcement !! Free shipping for all orders over $100
        </Container>
  );
}

export default Announcement;
