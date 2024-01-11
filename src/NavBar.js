import React from "react";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
    return (
        <div id="navdiv" className="sticky">
            <div id="navbar">
                <div id="inner-navbar">
                <Link className="alink" activeClass="active"
                to="bio-div"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>BIO</Link>
                <Link className="alink" activeClass="active"
                to="live-section"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>LIVE</Link>
                <Link className="alink" activeClass="active"
                to="blog-section"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>MP3s</Link>
                {/* <a className="alink" target="_blank">SHOP</a> */}
                <Link className="alink" activeClass="active"
                to="photo-section"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>PHOTOS</Link>
                <Link className="alink" activeClass="active"
                to="press-section"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>PRESS</Link>
                <Link className="alink" activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-85}
                duration={500}>CONTACT</Link>
                {/* <a className="alink">CONTACT</a> */}
                </div>
            </div>
            <div id="social-links">
                <a href="https://www.instagram.com/meandnobodyband/" className="social-icons" target="_blank"><BsInstagram /></a>
                <a href="https://www.tiktok.com/@meandnobodyband" className="social-icons" target="_blank"><FaTiktok /></a>
                <a href="https://www.facebook.com/people/Me-Nobody/100086959931142/" className="social-icons" target="_blank"><BsFacebook /></a>
                <a href="https://www.youtube.com/channel/UCyRf47aAJI8wIy1AA6-kViQ" className="social-icons" target="_blank"><BsYoutube /></a>
                <a href="https://twitter.com/MeAndNobodyBand" className="social-icons" target="_blank"><BsTwitter /></a>
            </div>
        </div>
    )
}

export default NavBar;