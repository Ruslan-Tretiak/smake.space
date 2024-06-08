import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  padding: 52px 52px;
  position: absolute;
  background: transparent;
  z-index: 1000;
`;

const NavPage = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #e0e0db;
  position: relative;
  font-weight: 400;
  padding: 5px 0;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #9fe2aa;
    transition: width 0.5s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const LogoContainer = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Logo = styled.img`
  height: 70px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 10px;
    color: #fffffb;
    text-decoration: none;
    font-weight: 700;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }

    svg {
      height: 24px;
      width: 24px;
      fill: #ffffff;

      &:hover {
        fill: #9fe2aa;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavPage>
        <NavItems>
          <li><NavLink to="/tastings">TASTINGS</NavLink></li>
          <li><NavLink to="/get-your-ticket">GET YOUR TICKET</NavLink></li>
        </NavItems>
        <LogoContainer to="/"><Logo src="/logoRT.png" alt="Logo" /></LogoContainer>
        <SocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <svg width="24" height="24">
              <use href="/sprite.svg#icon-facebook"></use>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <svg width="24" height="24">
              <use href="/sprite.svg#icon-youtube"></use>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <svg width="24" height="24">
              <use href="/sprite.svg#icon-instagram"></use>
            </svg>
          </a>
        </SocialIcons>
      </NavPage>
    </HeaderContainer>
  );
};

export default Header;
