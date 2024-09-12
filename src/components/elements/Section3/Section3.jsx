import img from '../../../assets/images/section3.png'
import Button from "../../UI/Button/Button";
import './Section3.css'

const Section3 = () => {
    return (
        <div className="section3">
            <div className='section3-content'>
                <h2 className='section3-title'>
                    Invite team members & enlarge your groups
                </h2>
                <p className='section3-text'>
                Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.
                </p>
                <Button className='section3-btn' text='Explore now'/>
            </div>
            <img className='section3-img' src={img} alt="comments" />
        </div>
    )
}


export default Section3;