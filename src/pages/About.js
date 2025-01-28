import React from "react";
import "./About.css";
import profilePic from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img
          src={profilePic}
          alt="Profile"
          className="about-profile"
        />
        <h2>Hi, I'm Oladeji!</h2>
        <p>
          A passionate front-end developer with experience in creating
          responsive websites and interactive UIs. I have certifications in Responsive Web Design, JavaScript Algorithms and Data Structures, and Front End Development Libraries from freeCodeCamp, which showcase my passion for creating visually stunning and highly functional websites. I developed a love for problem-solving and creativity, which has fueled my drive to build web applications that solve real-world problems. My journey into tech began with curiosity, exploring how code could shape digital experiences. From crafting dynamic portfolio projects like an AI-Powered Personal Finance Tracker to designing modern, user-centric interfaces, I aim to create intuitive, impactful solutions that resonate with users. I'm diving deeper into app development with projects like FutureLine, a personalized virtual assistant platform. My goal is to push the boundaries of what’s possible in web and mobile development.
        </p>
      </div>
      <div className="about-right">
        <h3>My Certifications</h3>
        <ul>
          <li>Responsive Web Design - freeCodeCamp</li>
          <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
          <li>Front End Development Libraries - freeCodeCamp</li>
        </ul>
        <h3>My Values</h3>
        <ul>
          <li>🔥 Passion for Learning</li>
          <li>🌟 Always Strive for Excellence</li>
          <li>🚀 Embrace Challenges</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
