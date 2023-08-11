import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Work = styled.div`


  background-color: ${theme.colors.secondaryBg};
  //
  //width: 330px;
  //flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  // @media ${theme.media.desktop} {
  //   max-width: 540px;
  // }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }


  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -30%);
      transition: ${theme.animations.transition};
    }
  }

@media ${theme.media.mobile}{
  opacity: 1;

    &::before {
      opacity: 1;
    }
  ${Button} {
    opacity: 1;
  }
}


`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`

`

const Text = styled.p`
  margin: 14px 0 20px;
`

const Works = styled.section`

  position: relative;

    
    ${FlexWrapper}{
      gap: 30px;
    }
`


export const S = {
    Work,
    Image,
    ImageWrapper,
    Description,
    Title,
    Text,
    Works

}