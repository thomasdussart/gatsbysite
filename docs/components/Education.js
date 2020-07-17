import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Becode.org</h3>
          <p className="info">
            Junior Web Development
            <span>&bull;</span>
            <em className="date">January 2020 - Present</em>
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>IFAPME</h3>
          <p className="info">
            Electrician
            <span>&bull;</span>
            <em className="date">September 2016 - May 2017</em>
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Don Bosco Verviers</h3>
          <p className="info">
            CESS
            <span>&bull;</span>
            <em className="date">September 2008- June 2012</em>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
