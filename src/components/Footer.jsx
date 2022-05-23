import styled  from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Container = styled.div`
  display: flex;
  background-color:#2f2f2f;
  color: white;
`;
const Left = styled.div`
  flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 20px;

`
const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
&:hover{
    cursor: pointer;
    transform: scale(1.01);
}

`
const Center = styled.div`
  flex: 1;
  padding: 10px;
`;
const Right = styled.div`
  flex: 1;
`;

const Logo = styled.h3`
`
const Desc = styled.p`
    font-size: 1.1rem;
   
    margin:20px 0px;
    `
const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`   
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
&:hover{
    transform: scale(1.1);
    cursor: pointer;
}
` 
const ContactItem = styled.div`

    display: flex;
    align-items: center;
   
    margin-bottom: 10px;
    
    `

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>eMART</Logo>
        <Desc>If you would like to experience the best of online shopping for  women and kids in India, you are at the right place. eMART is the ultimate destination for fashion and lifestyle. It is time to redefine your style statement with our treasure-trove of trendy item.</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon></FacebookIcon>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon></InstagramIcon>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon></TwitterIcon>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Usefull Links</Title>
        <List>
            <ListItem>FAQ</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Women Fashions</ListItem>
            <ListItem>Returns</ListItem>
            <ListItem>Shipping</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms & Conditions</ListItem>
            <ListItem>Order Tracking</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
        <RoomIcon style={{marginRight:"10px"}}/> Near 6th Floor building,<br/> Gamandia New Colony,<br/>,Cuttack,Odisha,India
        </ContactItem>
        <ContactItem>
        <PhoneIcon style={{marginRight:"10px"}}/> +91-637-119-0636
        </ContactItem>
        <ContactItem>
        <EmailIcon style={{marginRight:"10px"}}/> md.akram.sonu786@gmail.com

        </ContactItem>

      </Right>
    </Container>
  );
};

export default Footer;
