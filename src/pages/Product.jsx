
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';



const Wrapper = styled.div`
    display:flex;
    padding:50px;
`
const ImageContainer = styled.div`
    
    flex:1;
`;
const Image = styled.img`
    width:100%;
    height:80vh;
    
`;
const Container = styled.div`
background-color:#f6fbff;
`;
const Title = styled.h2`
    font-size:30px;
    font-weight:500;
    margin-bottom:10px;

`;
const Price = styled.h3`
    font-size:45px;
    font-weight:550;
    margin-bottom:10px;

`;
const Description = styled.p`
    font-size:18px;
    font-weight:300;
    margin-bottom:10px;

`;
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    `

const FilterContainer = styled.div` 
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    margin:0px 10px;
    &:hover{
        cursor:pointer;
        transform:scale(1.1);
    }

`
const FilterSize = styled.select`
    width:100%;
    height:30px;
    border:none;
    margin-left:15px;
    border-radius:5px;
    background-color:#f5f5f5;
    font-size:15px;
    font-weight:300;
    padding:0px 13px;
    &:focus{
        outline:none;
    }
    &:hover{
        cursor:pointer;
    }
`
const FilterSizeOption = styled.option`
  
`
const AddContainer = styled.div`
    display:flex;
    width:50%;
    justify-content:space-between;
    flex-direction:row;
    align-items:center;
    
    `
const AmmountContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 10px  0px;
    margin-bottom:10px;

 `
const Button = styled.button`
    padding:15px;
    border:1px solid green;
    border-radius:5px;
    background-color:white;
    cursor:pointer;
    font-weight:500;
    &:hover{
        background-color:green;
        color:white;
        transition:0.5s;
    }
    




`   
const Ammount = styled.span`
    font-size:20px;
    font-weight:200;
    display:flex;
    width:30px;
    margin:0px 5px;

    align-items:center;
    justify-content:center;
    border:2px solid #f6f6f6;
    border-radius:5px;
    box-shadow: 0px 0px 4px 0px #bbb;
    `





const Product = () => {
  return (
   <>
    <Navbar/>
    <Announcement/>
    <Container>
    <Wrapper>
        <ImageContainer>
            <Image src="https://assets.ajio.com/medias/sys_master/root/20210403/p1Hs/60687781f997dd7b645ef393/-473Wx593H-461343839-navy-MODEL.jpg"/>
        </ImageContainer>
        <InfoContainer>
        <Title>Dress</Title>
        <Description> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tenetur nostrum vero eveniet earum, alias sed? Blanditiis nisi aperiam laboriosam omnis fuga. Dolorum dolores hic est ea vitae minus voluptates.
        Doloribus</Description>
        <Price>$100</Price>
        <FilterContainer>
        <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black"/>
            <FilterColor color="red"/>
            <FilterColor color="darkblue"/>
        </Filter>
        <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize >
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
            </FilterSize>
        </Filter>
        </FilterContainer>
        <AddContainer>
            <AmmountContainer>
                <AddCircleIcon style={{cursor:"pointer"}}/>
                <Ammount>1</Ammount>
                <RemoveCircleIcon style={{cursor:"pointer"}}/>
            </AmmountContainer>
            <Button>
                Add to cart
            </Button>
        </AddContainer>
        </InfoContainer>
        
    </Wrapper>
    </Container>
     <Footer/>
     </>
  );
}

export default Product;
