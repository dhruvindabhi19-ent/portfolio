import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      {/* LinkedIn - Keep target="_blank" */}
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/dhruvin-dabhi-02302ab1?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>

      {/* Instagram - Keep target="_blank" */}
      <li className="social-icons">
        <a
          href="https://www.instagram.com/shriadhik?igsh=YjIxbWd1cHF3Ynhz&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li>

      {/* Email - REMOVED target="_blank" */}
      {/* <li className="social-icons">
        <a
          href="mailto:Shriadhikagency15@gmail.com"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li> */}

      {/* WhatsApp */}
      <li className="social-icons">
        <a
          href="https://wa.me/917600118392"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          {/* Import FaWhatsapp from react-icons/fa */}
          <FaWhatsapp className="social-icon" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;