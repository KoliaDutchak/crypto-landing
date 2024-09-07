import { Link } from 'react-router-dom';
import './FooterLinks.css';

const FooterLinks = () => {
    return (
        <div className='footer-links'>
            <div>
                <h4 className='links-title'>Product</h4>
                <Link to='#' className='footer-link'>Overview</Link>
                <Link to='#' className='footer-link'>Features</Link>
                <Link to='#' className='footer-link'>Solutions</Link>
                <Link to='#' className='footer-link'>Tutorials</Link>
                <Link to='#' className='footer-link'>Pricing</Link>
                <Link to='#' className='footer-link'>Releases</Link>
            </div>
            <div>
                <h4 className='links-title'>Company</h4>
                <Link to='#' className='footer-link'>About us</Link>
                <Link to='#' className='footer-link'>Careers</Link>
                <Link to='#' className='footer-link'>Press</Link>
                <Link to='#' className='footer-link'>News</Link>
                <Link to='#' className='footer-link'>Media kit</Link>
                <Link to='#' className='footer-link'>Contact</Link>
            </div>
            <div>
                <h4 className='links-title'>Resources</h4>
                <Link to='#' className='footer-link'>Blog</Link>
                <Link to='#' className='footer-link'>Newsletter</Link>
                <Link to='#' className='footer-link'>Events</Link>
                <Link to='#' className='footer-link'>Help centre</Link>
                <Link to='#' className='footer-link'>Tutorials</Link>
                <Link to='#' className='footer-link'>Support</Link>
            </div>
            <div>
                <h4 className='links-title'>Social</h4>
                <Link to='#' className='footer-link'>Twitter</Link>
                <Link to='#' className='footer-link'>LinkedIn</Link>
                <Link to='#' className='footer-link'>Facebook</Link>
                <Link to='#' className='footer-link'>GitHub</Link>
                <Link to='#' className='footer-link'>AngelList</Link>
                <Link to='#' className='footer-link'>Dribbble</Link>
            </div>
            <div>
                <h4 className='links-title'>Legal</h4>
                <Link to='#' className='footer-link'>Terms</Link>
                <Link to='#' className='footer-link'>Privacy</Link>
                <Link to='#' className='footer-link'>Cookies</Link>
                <Link to='#' className='footer-link'>Licenses</Link>
                <Link to='#' className='footer-link'>Settings</Link>
                <Link to='#' className='footer-link'>Contact</Link>
            </div>
        </div>
    )
}

export default FooterLinks;