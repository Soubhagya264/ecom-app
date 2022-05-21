
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
margin:20px;
height:70vh;
position:relative;

`
const Image = styled.img`
width: 100%;
height: 100%;  
object-fit: cover; 
opacity: 0.9;
z-index: -1;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: rgba(0,0,0,0.3);

`

const Title = styled.h3`
font-size: 1.5rem;
color: white;
margin-bottom: 20px;

`

const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    background-color: white;
    color: gray;
    cursor: pointer;
    color: gray;
    
   border: none;
    border-radius: 10px;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
     <Image src={item.img}/>
     <Info>
         <Title>{item.title}</Title>
         <Button>SHOP NOW</Button>
     </Info>

     
    </Container>
  );
}

export default CategoryItem;
