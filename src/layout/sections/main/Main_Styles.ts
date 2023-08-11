import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import exp from "constants";

const Main = styled.section`
  height: 100vh;
  margin-top: 50px;
  display: flex;
  

`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;
  
  @media ${theme.media.mobile}{
    width: 310px;
    height: 380px;
  }
`

const PhotoWrapper = styled.div`
position: relative;
  z-index: 1;
  
 
  &::before{
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    
    @media ${theme.media.mobile}{
      width: 314px;
      height: 414px;
      top: -20px;
      left: 20px;
   
    }
  }

  @media ${theme.media.mobile}{
    margin-top: 65px;
  }


`

const MainTitle = styled.h1`
  ${font({family: 'Josefin Sans, sans-serif',weight: 400, Fmax: 27, Fmin: 20})};
  
  p{
    display: none;
  }
`

const Name = styled.h2`
  ${font({family: 'Josefin Sans, sans-serif',weight: 700, Fmax: 50, Fmin: 36})}
  letter-spacing: 2.5px;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 1;
    white-space: nowrap;
    
    &::before{
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
  
  
  @media ${theme.media.mobile}{
    margin: 15px 0 22px;
  }
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

export const S = {
    Main,
    Photo,
    PhotoWrapper,
    MainTitle,
    Name,
    SmallText,
}