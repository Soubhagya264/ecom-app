import styled from "styled-components"

const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
url(https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center fixed;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;

` 
const Wrapper = styled.div`
 padding:20px;
 width:40%;
 background-color:white;
`
const Form = styled.form`
display:flex;

flex-wrap:wrap;

`
const Input = styled.input`
flex:1;
margin:10px;
padding:8px;
border-radius:5px;
font-size:20px;
font-weight:200;
`
const Button = styled.button`

width:20%;
padding:5px;
border:none;
border-radius:5px;
background-color:green;
color:white;
font-weight:300;
font-size:20px;
cursor:pointer;
&:hover{
    background-color:white;
    color:green;
    transition:0.5s;
    border:1px solid green;
}

`
const Title = styled.h3`
font-size:30px;
font-weight:200;

`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="User Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Button>Create</Button>
            </Form>
            

        </Wrapper>
    </Container>
  )
}

export default Register
