import React from 'react';
import styled from 'styled-components';

const TastingsSection = styled.section`
  background-color: #fff;
  padding: 60px 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 40px 0;
`;

const TastingsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const TastingsTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 40px;
  font-family: 'Minerva Modern', serif;
`;

const TastingEvent = styled.div`
  background-color: #f1f1f1;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TastingTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  font-family: 'Minerva Modern', serif;
`;

const TastingDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TastingDetail = styled.li`
  font-size: 1.1em;
  margin: 5px 0;
  line-height: 1.6;
`;

const Tastings = () => {
  return (
    <TastingsSection>
      <TastingsContainer>
        <TastingsTitle>WINE TASTING SCHEDULE</TastingsTitle>
        <TastingEvent>
          <TastingTitle>Introduction to Wine Tasting</TastingTitle>
          <TastingDetails>
            <TastingDetail><strong>Date:</strong> 12.08.2024</TastingDetail>
            <TastingDetail><strong>Time:</strong> 19:00</TastingDetail>
            <TastingDetail><strong>Location:</strong> [Location]</TastingDetail>
            <TastingDetail><strong>Description:</strong> A beginner-friendly session covering the basics of wine tasting, types of wine, and how to identify different aromas and flavors.</TastingDetail>
          </TastingDetails>
        </TastingEvent>
        <TastingEvent>
          <TastingTitle>Exploring Red Wines</TastingTitle>
          <TastingDetails>
            <TastingDetail><strong>Date:</strong> [Date]</TastingDetail>
            <TastingDetail><strong>Time:</strong> [Time]</TastingDetail>
            <TastingDetail><strong>Location:</strong> [Location]</TastingDetail>
            <TastingDetail><strong>Description:</strong> Dive into the world of red wines, from light-bodied to full-bodied, and discover the diverse range of flavors and aromas.</TastingDetail>
          </TastingDetails>
        </TastingEvent>
      </TastingsContainer>
    </TastingsSection>
  );
};

export default Tastings;
