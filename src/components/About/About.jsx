import React from 'react';
import './About.css';
import profile from '../../assets/profile-img.jpg';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <div className="underline"></div>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="profile" className="about-profile" />
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
          <div className="about-containers">
            <div className="details-containers">
              <h2 className="experience-sub-title">My Skills</h2>
              <div className="article-container">
                <article>
                  <IoMdCheckmarkCircleOutline className="checkmark" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <IoMdCheckmarkCircleOutline className="checkmark" />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <IoMdCheckmarkCircleOutline className="checkmark" />
                  <div>
                    <h3>Tailwind CSS</h3>
                    <p>Basics</p>
                  </div>
                </article>
                <article>
                  <IoMdCheckmarkCircleOutline className="checkmark" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <IoMdCheckmarkCircleOutline className="checkmark" />
                  <div>
                    <h3>React JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <IoMdCheckmarkCircleOutline className="checkmark" />
                  <div>
                    <h3>Node JS</h3>
                    <p>Basics</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
