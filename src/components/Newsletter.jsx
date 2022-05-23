import styled  from "styled-components"
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Container = styled.div`
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #f6fbff;
flex-direction: column;
`
const Title = styled.h2`
font-size: 2rem;
font-weight: bold;
color: #2f2f2f;
margin-bottom: 20px;
`

const Chat = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
flex-direction: column;
font-size: 1.5rem;
`
const Description = styled.div`
font-size: 0.85rem;
color: #2f2f2f;
margin-bottom: 20px;

`
const InputContainer = styled.div`
width: 35%;
height: 40;
display: flex;

justify-content: space-between;
border: 1px solid #2f2f2f;
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 40px;
&:hover{
    border: 1px solid #2f2f2f;
    
}
`
const Button = styled.button`
flex: 1;
border: none;
background-color: #2f2f2f;
color: white;
&:hover{
    
    transform: scale(1.1);
    cursor: pointer;
}

`

const Return = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.2rem;
color: #2f2f2f;
margin-bottom: 20px;
flex-direction: column;


`
const ReturnButton=styled.button`
background-color: #2f2f2f;
color: white;
border: none;
&:hover{
    transform: scale(1.1);
    cursor: pointer;
}
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#00d70b;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;


` 


const Newsletter = () => {
  return (
    <Container>
    <Chat>
        Wanna chat with us?
        <SocialIcon><WhatsAppIcon/></SocialIcon>
        +91-637-119-0636

    </Chat>
    <Return>
        Wanna return a product?
        <ReturnButton>Click Here</ReturnButton>

    </Return>
    <Title>BRIGHTEN UP YOUR INBOX</Title>
    <Description>
    JOIN OUR EMAIL LIST FOR  TIMELY UPDATES ON NEW ARRIVALS AND SALE OF YOUR FAVORITE PRODUCTS AND GET 20% OFF YOUR NEXT ORDER.
    </Description>
    <InputContainer>
      <Input placeholder="Your Email "/>
        <Button>
            <SendIcon/>
        </Button>
    </InputContainer>
    </Container>
  )
}

export default Newsletter