import React from 'react';
import './AboutMe.css';

const DeveloperInfo = () => {
  return (
    <div className="about-container">
      <div className="hi-div">
  <p className="typing">Hi !!!</p>
</div>

      <div className="about-card">
        <div className="about-image-container">
          <img
            src="/2ndpic.jpeg"
            alt="profile pic"
            className="about-image"
            title="intentionally rotated pic"

          />
          {/* <div className="footerLinks">
            <a href="https://github.com/siffatkhan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/siffat-ullah" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/sifat_kk9" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          </div> */}
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

      <div className="contact-container">
        <form 
          className="contact-form"
          action="https://formsubmit.co/siffatullah.321@example.com"
          method="POST"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
          ></textarea>
           {/* <input type="hidden" name="_captcha" value="false" /> */}
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeveloperInfo;
