import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Section = styled.div`
  text-align: center;
  padding: 50px 20px;
  background: #121212;

  a {
    display: inline-block;
    margin: 10px 15px; /* Add spacing between icons */
    padding: 12px 25px;
    color: #ffffff;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 198, 255, 0.6);
  }

  a:hover {
    background: linear-gradient(90deg, #0072ff, #00c6ff);
    box-shadow: 0 6px 25px rgba(0, 198, 255, 1);
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;

const ContactSection = () => {
  return (
    <Section>
      <a href="https://github.com/dee-12-code" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/oladeji-johnson-137aa1332" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://wa.me/2348065170569" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
      <a href="mailto:dejij4617@gmail.com">
        <FaEnvelope />
      </a>
    </Section>
  );
};

export default ContactSection;
