import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #e0e0db;
  padding: 60px 20px;
  text-align: left;
  position: relative;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutTitle = styled.h3`
  font-family: 'Italiana', serif;
  font-size: 1.5em;
  top: 0;
  left: 20px;
  transform: translateY(-50%);
  margin: 0;
`;

const AboutText = styled.div`
  font-family: 'Italiana', serif;
  font-size: 2.2em;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  text-align: justify;
  padding-top: 60px;
`;

const SupportButton = styled.a`
  display: inline-block;
  background-color: #2523238a;
  color: #e0e0db;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 15px;
  font-weight: normal;
  text-align: center;
  margin-top: 40px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease-in-out;
  text-transform: uppercase;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 1s ease-in-out;
  }

  &::before {
    background-color: #0056b9;
    transform: translateX(-100%);
  }

  &::after {
    background-color: #ffd800;
    transform: translateX(100%);
  }

  &:hover::before {
    transform: translateX(0);
  }

  &:hover::after {
    transform: translateX(0);
  }

  &:hover {
    color: #0056b9;
    transform: scale(0.9);
    font-weight: bold;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutTitle>MAKE IT STAND OUT.</AboutTitle>
        <AboutText>
          <p>IT ALL BEGAN MORE THAN 10 YEARS AGO WHEN, AS A BARTENDER, I DISCOVERED MY PASSION FOR WINE. OVER THE YEARS, I WORKED IN VARIOUS ROLES WITHIN THE WINE INDUSTRY. I HAD THE OPPORTUNITY TO WORK AT A VINEYARD IN PORTUGAL AND CREATED WINE COURSES. HOWEVER, MY TRUE JOY HAS ALWAYS COME FROM HOSTING WINE TASTINGS. UNFORTUNATELY, THE RUSSIAN INVASION FORCED ME AND MY FAMILY TO LEAVE OUR COUNTRY AND START ANEW. YET, MY PASSION FOR WINE HAS REMAINED UNWAVERING. JOIN ME ON AN EXCITING WINE JOURNEY THAT BRINGS FLAVORS AND STORIES FROM AROUND THE WORLD DIRECTLY TO YOUR GLASS.</p>
          <SupportButton href="https://u24.gov.ua/" target="_blank" rel="noreferrer">Support Ukraine</SupportButton>
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
