import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-image: url('/michael-wave-gVkAiPchYhY-unsplash-min.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #ffffff;
  text-align: center;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HeroContainer = styled.div`
  padding-bottom: 188px;
  padding-top: 120px;
`;

const HeroTextWrapper = styled.div`
  background: rgba(25, 25, 25, 0.4);
  padding: 20px;
  border-radius: 10px;
`;

const HeroTextProf = styled.h1`
  font-size: 3.5em;
  font-family: 'Italiana', sans-serif;
`;

const HeroTextName = styled.h2`
  font-size: 10.5em;
  font-family: 'Italiana', sans-serif;
`;

const UnderHeroText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2em;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Location = styled.a`
  width: 250px;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #ffffff;
    margin-top: 10px;
    text-decoration: none;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTextWrapper>
          <HeroTextProf>SOMMELIER</HeroTextProf>
          <HeroTextName>RUSLAN TRETIAK</HeroTextName>
          <UnderHeroText>
            <p>Come and join a relaxed wine journey where each glass has its own story. With over 10 years in the wine industry, I'll guide you through a variety of flavors and aromas, adding a touch of humor and practical wine tips. Wine is simple, and there won't be any promotions—just pure enjoyment and discovery of hidden gems.</p>
            <p>Experience wine like never before with Ruslan Tretiak.</p>
          </UnderHeroText>
          <ContactInfo>
            <Location href="https://goo.gl/maps/sykkylvsvegen125" target="_blank" rel="noreferrer">Sykkylvsvegen 125, 6230 Sykkylven NÆRINGSFABRIKKEN</Location>
            <Contacts>
              <a href="mailto:theruslantretiak@gmail.com">theruslantretiak@gmail.com</a>
              <a href="tel:09861183">09861183</a>
            </Contacts>
          </ContactInfo>
        </HeroTextWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
