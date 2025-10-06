import React from 'react';
import './AboutMe.css';
import ContactForm from './ContactForm';

const DeveloperInfo = () => {
  return (
    <div className="about-container">
       <div className="hi-div">
            <p className="typing">Hi !!!</p>
        </div>

        <div className="about-card">
          <div className="about-image-container">
            <img
              src="/selfpicture.jpeg"
              alt="profile pic"
              className="about-image"
              title="intentionally rotated pic"
            />
          </div>

        <div className="about-content">
          <h1 className="about-heading">
            I’m <span className="name">Siffat</span>, an Ex-GC (PMA) and currently a Computer Science student passionate about Fullstack Web Development.
          </h1>

          <p className="about-text">
            I’m exploring diverse areas of computer science including web development, data structures, and backend engineering. My focus is on building impactful fullstack applications with React, Next and Flask/Django.
          </p>

          <p className="about-text">
            These days, I spend my time learning advanced concepts, creating projects, and preparing for software engineering roles. I love teamwork, continuous learning, and applying knowledge to real-world solutions.
          </p>

          <p className="about-text">
            Outside of coding, you’ll find me working out at the gym, doing chart analysis, or riding horses whenever I find one.
          </p>
        </div>
      </div>

      <div className="connect-div">
        <p>Let's Connect</p>
      </div>


      <ContactForm />
     
    </div>
  );
};

export default DeveloperInfo;
