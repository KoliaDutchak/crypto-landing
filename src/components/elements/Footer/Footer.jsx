import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-text">&#169; 2077 Untitled UI. All rights reserved.</p>
            <div className="social">
                <Link to='#'>
                    <FaTwitter/>
                </Link>
                <Link to='#'>
                    <FaLinkedin/>
                </Link>
                <Link to='#'>
                    <FaFacebook/>
                </Link>
                <Link to='#'>
                    <FaGithub/>
                </Link>

            </div>
        </div>
    )
}

export default Footer;