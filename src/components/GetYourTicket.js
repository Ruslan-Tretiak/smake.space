import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-image: url('/michael-wave-fif3VD4XVKg-unsplash-min.jpeg');
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

const HeroTextTicket = styled.h1`
  font-size: 10.5em;
  font-family: 'Italiana', sans-serif;
`;

const UnderHeroText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2em;
  line-height: 1.6;
`;

const TicketBtnContainer = styled.div`
  margin-top: 100px;
`;

const TicketBtn = styled.button`
  position: relative;
  display: inline-flex;
  padding: 10px 30px;
  background: #e0e0db;
  color: #048a16;
  text-decoration: none;
  letter-spacing: 1px;
  overflow: hidden;
  border-radius: 10px;
  font-size: large;

  &::before {
    content: '';
    position: absolute;
    top: var(--y);
    left: var(--x);
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    background: #9fe2aa;
    border-radius: 50%;
    transition: width 0.5s, height 0.5s;
  }

  span {
    position: relative;
    font-family: 'Italiana', sans-serif;
    z-index: 1;
    font-weight: bolder;
  }

  &:hover::before {
    width: 300px;
    height: 300px;
  }
`;

const CalendarContainer = styled.div`
  margin-top: 50px;
`;

const CalendarWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const GetYourTicket = () => {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      const calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: [
          {
            title: 'Introduction to Wine Tasting',
            start: '2024-06-10',
            backgroundColor: '#9fe2aa',
            borderColor: '#9fe2aa'
          },
          {
            title: 'Exploring Red Wines',
            start: '2024-06-15',
            backgroundColor: '#9fe2aa',
            borderColor: '#9fe2aa'
          }
        ]
      });
      calendar.render();
    }
  }, []);

  return (
    <HeroSection>
      <HeroContainer>
        <HeroTextWrapper>
          <HeroTextTicket>TASTE WITH US</HeroTextTicket>
          <UnderHeroText>
            <p>Don't miss out on this exceptional opportunity to deepen your wine knowledge and enjoy a delightful evening. Reserve your spot now and embark on a wine adventure like no other.</p>
          </UnderHeroText>
        </HeroTextWrapper>
        <TicketBtnContainer>
          <TicketBtn type="button" id="buy-ticket-btn"><span>BUY YOUR TICKET</span></TicketBtn>
        </TicketBtnContainer>
      </HeroContainer>
      <CalendarContainer>
        <CalendarWrapper id="calendar"></CalendarWrapper>
      </CalendarContainer>
    </HeroSection>
  );
};

export default GetYourTicket;
