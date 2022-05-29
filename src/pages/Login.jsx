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
 width:30%;
 background-color:white;
`
const Form = styled.form`
display:flex;

flex-direction:column;



`
const Input = styled.input`
flex:1;
margin:10px 0px;
padding:5px;
border-radius:5px;
font-size:20px;
font-weight:200;

`
const Button = styled.button`

width:25%;
padding:5px;
border:none;
border-radius:5px;
background-color:green;
color:white;
font-weight:300;
font-size:16px;
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
const Link = styled.a`
color:green;
margin:5px 0px;
font-size:13px;
font-weight:200;
text-decoration:underline;
&:hover{
    color:blue;
    transition:0.5s;
    text-decoration:none;
    cursor:pointer;
}
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>

            <Input placeholder="User Name" />
            <Input placeholder="Password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMBER THE PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
        

    </Wrapper>
</Container>
  )
}

export default Login
