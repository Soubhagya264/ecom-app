import styled from "styled-components";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import sliderData from "../data";
import { useState } from "react";
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props => props.slidedir}vw);

`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top:0;
bottom:0;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
cursor: pointer;
margin: auto;
opacity: 0.8;
z-index:2;
`;

const Slide = styled.div`

display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
background-color: #${props => props.bg};





`

const ImageContainer = styled.div`
height: 100%;
flex: 1;
color: lightgray;
`
const Image = styled.img`
height: 90%;






`
const Title = styled.h4`
  font-size: 40px;
`;

const Desc = styled.p`
  margin: 40px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const InfoContainer = styled.div`
flex: 1;

`

const Slider = () => {
     const [slideIndex, setSlideIndex] = useState(0);
     const[slidedir, setSlidedir] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
            var newSlide = slideIndex*-100
            console.log(newSlide)
            setSlidedir(newSlide);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
            var newSlide = slideIndex*-100
            setSlidedir(newSlide);
            
        }
    }
    
    return (

        <Container>
            <Arrow direction="left"  onClick={()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slidedir= {slidedir}>
            {sliderData.map(slide => (
                <Slide bg={slide.bg}>
                
                    
                    <ImageContainer key={slide.id} >
                    {/* https://www.jing.fm/clipimg/full/81-818047_shopping-lady-png-girl-with-shopping-bag-png.png */}

                    {/* https://greatsmokiesfleamarket.com/wp-content/uploads/2014/10/family1.png */}
                    
                        <Image src={slide.img} alt="images">
                          </Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>
                           {slide.title}
                           
                        </Title>
                        <Desc>
                            {slide.desc}
                        </Desc>
                        <Button>
                            Show Now
                        </Button>
                    </InfoContainer>
                

                </Slide>
                ))}
                
                    
                
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>

        </Container>
    )
}

export default   Slider
