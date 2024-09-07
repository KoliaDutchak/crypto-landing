import DottedMapComponent from '../../UI/dottedMap/DottedMapComponent.jsx'
import './Section7.css';

const Section7 = () => {
    return (
        <div className='section7'>
            <div className="section7-content">
                <h5 className='sub-title'>About us</h5>
                <h2 className="section7-title">We’re a distributed team</h2>
                <p className='section7-text'>We have offices and teams all around the world.</p>
            </div>
            <div className='map'>
                <DottedMapComponent />
            </div>
        </div>
    )
}

export default Section7;