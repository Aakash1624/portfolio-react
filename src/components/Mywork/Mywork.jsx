import React from 'react';
import './Mywork.css';
import data from '../../constant';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Mywork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <div className="underline"></div>
      </div>
      <div className="mywork-container">
        {data.map((work, id) => {
          return (
            <div key={id}>
              <img src={work.image} alt="image" className="project-img" />
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <HiArrowNarrowRight />
      </div>
    </div>
  );
};

export default Mywork;
