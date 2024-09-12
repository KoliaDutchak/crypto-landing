import img from '../../../assets/images/smartphones/phone2.png'
import { GiStarShuriken } from "react-icons/gi";
import { HiCubeTransparent } from "react-icons/hi";
import { PiCubeTransparent } from "react-icons/pi";
import './Section2.css'

const Section2 = () => {
    return (
        <div className='section2'>
            <img src={img} alt="phone" className='section2-img'/>
            <div className='section-2-content'>
                <h3 className='subtitle'>FEATURES</h3>
                <h2 className='section2-title'>Crypto premium</h2>
                <div className='df'>
                    <GiStarShuriken/>
                    <h4>Budgeting Intervals</h4>
                </div>
                <p>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.</p>
                <div className='df'>
                    <HiCubeTransparent/>
                    <h4>Budgeting Intervals</h4>
                </div>
                <p>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.</p>
                <div className='df'>
                    <PiCubeTransparent/>
                    <h4>Budgeting Intervals</h4>
                </div>
                <p>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.</p>
            </div>
        </div>
    )
}

export default Section2;