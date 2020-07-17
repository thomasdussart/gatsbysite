import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/t0m1337/" target="blank_">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/t0m1337" target="blank_">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://github.com/thomasdussart" target="blank_">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/thomasdussart/" target="blank_">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
