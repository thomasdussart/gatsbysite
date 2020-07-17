import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Tech enthusiast since the age of 5. In search of an intership from 14
          September 2020 for 3 months.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Thomas Dussart</span>
              <br />
              <span>
                Rue de Willine, 40
                <br /> 4257, Berloz
              </span>
              <br />
              <span>+32496741533</span>
              <br />
              {/* <span>anyone@website.com</span> */}
            </p>
          </div>
          <div className="columns download">
            <p>
              <a
                href="https://cloud.orange.be/share/ona18pFWpr9dvLhD"
                className="button"
                target="blank_"
              >
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
