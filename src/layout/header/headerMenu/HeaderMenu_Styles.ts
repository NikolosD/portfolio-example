import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

// Menu



const MenuItem = styled.li`
  position: relative;
`


const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  transition: ${theme.animations.transition};

  color: ${theme.colors.accent};
  
  & + & {
    top: 50%;
    span{
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`


const NavLink = styled(Link)`

  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  color: transparent;

  &::before{
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    border-radius: 10px;

    transform: scale(0);
    transition:  ${theme.animations.transition}
  }

  &:hover, &.active{

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};
      & + ${Mask}{
        transform: skewX(12deg) translateX(-5px);
      }
    }

    &::before {
      transform: scale(1);
    }

  }

`



// Mobile Menu


const MobileMenu = styled.nav`
    
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(31, 31, 32, 0.90);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 0.8s ease-in-out;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    transition: ${theme.animations.transition};
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    & ul{
    gap: 30px;
    }
    
  `
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  z-index: 99999999;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;

  span {

    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    

    ${props => props.isOpen && css<{ isOpen: boolean }>`
     background-color: rgba(255, 255, 255, 0);
      width: 0;
    `}
    
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0px) rotate(-45deg);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: calc(36px - 50%);
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0px) rotate(45deg);
        width: 36px;
      `}
    }
  }
`

// Desktop Menu

const HeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  
`




export const S = {
    NavLink,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    HeaderMenu,
}