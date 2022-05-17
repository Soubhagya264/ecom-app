import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
const Container = styled.div`

  height: 60px;
  
`;
const Wrapper = styled.div`
  padding: 0px 18px;
  display: flex;
  justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
  flex: 1;
    display: flex;
    align-items: center;
`;
const Right = styled.div`
   flex: 1;
  display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 25px;

`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Language = styled.span`
    margin-right: 5px;
    font-size: 18px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    display: flex;
    border:0.7px solid lightgrey;
    align-items: center;
    border-radius: 3px;
    margin-left: 18px;
    padding: 2px 2px;
`;
const Input = styled.input`
    border:none;
    border-radius: 3px;
    padding: 4px 8px;
    `;
const Logo=styled.h1`
font-weight: bold;

`;

const MenuItem = styled.div`
font-size: 14px;
font-weight: bold;
padding: 10px;

cursor: pointer;
`;











const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                    <Input></Input>
                        <SearchIcon style={{color:"grey",fontSize:16}} />
                        

                        
                    </SearchContainer>
                    
                </Left>
                <Center>
                    <Logo>eMart.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER </MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    
                        <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlinedIcon/>
                        </Badge>
                    
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
