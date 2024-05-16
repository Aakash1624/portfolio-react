import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, excepturi. Enim illo minima sunt numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              hic provident molestiae dolor eaque quaerat minus tenetur vero
              iure consectetur?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
