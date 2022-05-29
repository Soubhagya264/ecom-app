
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Announcement from '../components/Announcement';


const ProductList = () => {
    const Container=styled.div`
    `;
    const Title=styled.h2`
       margin:20px;
    `;
    const Filter=styled.div`
    margin:20px;

    `;
    const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    `;

    const FilterText=styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:10px;
    `;

    const Select=styled.select`
    width:60px;
    height:40px;
    border-radius:5px;
    border:1px solid #ccc;
    cursor:pointer;
    margin-left:10px;

    `;
    

    const Option=styled.option`
    font-size:15px;
    font-weight:300;
    cursor:pointer;
    `;

    
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter By</FilterText>
                <Select>
                    <Option>All</Option>
                    <Option>New</Option>
                    <Option>Sale</Option>
                </Select>
                <Select>
                    <Option>Size</Option>
                    <Option>Small</Option>
                    <Option>Medium</Option>
                    <Option>Large</Option>
                </Select>
                <Select>
                    <Option>Color</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort By</FilterText>
                <Select>
                    <Option>Price</Option>
                    <Option>Name</Option>
                </Select>

            </Filter>
        </FilterContainer>
         <Products/>
        <Footer/>
    </Container>
  );
}

export default ProductList;
