import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h2`
  font-weight: 200;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 400;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TopText = styled.span`
  display: flex;
  justify-content: space-between;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
  height: 200px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10px;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
  width:20px;
  height:20px;
  background-color:#${(props) => props.color};
  border-radius: 50%;
  

`
const ProductSize = styled.span`
`
const PriceDetails = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const ProductAmmountContainer = styled.div`

  display: flex;  
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  `
const ProductAmmount = styled.span`
  font-weight: 400;
  font-size: 20px;
  margin: 5px;
  `
const ProductPrice = styled.span`
  font-weight: 400;
  font-size: 20px;
  `
  const Hr=styled.hr`
  border: none;
  background-color: #f5f5f5;
  height: 1px;
  `
  const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 4px 0px #bbb;
  height:50vh;
`;
  const SummaryTitle = styled.h2`
  font-weight: 200;
  text-align: center;
  `
  const SummaryItem = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  align-items: center;
  font-weight:${props=>props.type==="total"&&"500"};
  font-size:${props=>props.type==="total"&&"24px"};
  `
  const SummaryItemText = styled.span`
  font-weight: 400;
  `
  const SummaryItemPrice = styled.span`
  font-weight: 400;
  `
  const Button=styled.button`
  width:100%;
  padding:10px;
  background-color:black;
  color:white;
  font-weight:500;
  &:hover{
    background-color:white;
    color:black;
    cursor: pointer;
    transform: scale(1.01);
    trastition: all 0.8s ease-in-out;
  }


  `





const Cart = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <Title>Your Cart</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT</TopButton>
          </Top>
          <Bottom>
            <Info>

            <Product>
                <ProductDetails>
                  <Image src="https://i.pinimg.com/originals/d6/0c/ae/d60cae213c52ae8111a55da8ff28e5b8.png"/>
                  <Details>
                    <ProductName>
                      <b>Product :</b> <span>Gown</span>
                    </ProductName>
                    <ProductId>
                      <b>Product Id :</b> <span>12345</span>
                    </ProductId>
                    <ProductColor color="7d0090"/>
                    <ProductSize>
                      <b>Size :</b> <span>M</span>
                    </ProductSize>
                  </Details>
                  </ProductDetails>
                  <PriceDetails>
                  <ProductAmmountContainer>
                    <AddCircleIcon style={{cursor:"pointer"}}/>
                    <ProductAmmount>2</ProductAmmount>
                    <RemoveCircleIcon style={{cursor:"pointer"}}/>
                  </ProductAmmountContainer>
                  <ProductPrice>
                    <b>Price :</b> <span>$ 40</span>
                  </ProductPrice>

                </PriceDetails>
              </Product>
              <Hr></Hr>
              <Product>
                <ProductDetails>
                  <Image src="https://www.freepnglogos.com/uploads/women-bag-png/download-women-bag-transparent-png-image-pngimg-5.png"/>
                  <Details>
                    <ProductName>
                      <b>Product :</b> <span>Vanity Bag</span>
                    </ProductName>
                    <ProductId>
                      <b>Product Id :</b> <span>14567</span>
                    </ProductId>
                    <ProductColor color="ffd501"/>
                    <ProductSize>
                      <b>Size :</b> <span>M</span>
                    </ProductSize>
                  </Details>
                  </ProductDetails>
                  <PriceDetails>
                  <ProductAmmountContainer>
                    <AddCircleIcon style={{cursor:"pointer"}}/>
                    <ProductAmmount>2</ProductAmmount>
                    <RemoveCircleIcon style={{cursor:"pointer"}}/>
                  </ProductAmmountContainer>
                  <ProductPrice>
                    <b>Price :</b> <span>$ 40</span>
                  </ProductPrice>

                </PriceDetails>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>
                Order Summary
              </SummaryTitle>
              <SummaryItem>
                <SummaryItemText>
                  <b>Subtotal</b>
                </SummaryItemText>
                <SummaryItemText>
                  <b>$ 80</b>
                </SummaryItemText>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>
                  <b>Estimated Shipping</b>
                </SummaryItemText>
                <SummaryItemText>
                  <b>$ 5.80</b>
                </SummaryItemText>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>
                  <b>Shipping Discount</b>
                </SummaryItemText>
                <SummaryItemText>
                  <b>$ -5.80</b>
                </SummaryItemText>
              </SummaryItem>

              <SummaryItem type="total">
                <SummaryItemText >
                  <b>Total</b>
                </SummaryItemText>
                <SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItemText>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
