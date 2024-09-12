import HeaderNavigation from '../../UI/HeaderNavigation/HeaderNavigation.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './headerPages/Home/Home.jsx';
import {Events} from './headerPages/Events/Events.jsx';
import {Services} from './headerPages/Services/Services.jsx';
import {About} from './headerPages/About/About.jsx'
import styles from './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <HeaderNavigation/>
            <Routes>
                <Route path='crypto-landing/about' element={<About/>}/>
                <Route path='crypto-landing/events' element={<Events/>}/>
                <Route path='crypto-landing/services' element={<Services/>}/>
                <Route path='crypto-landing/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Header;