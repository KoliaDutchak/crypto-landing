import img from '../../../assets/images/smartphones/phone3.png'
import Button from '../../UI/Button/Button'
import './Section5.css'

const Section5 = () => {

    return (
        <div className='section5'>
            <img className='section5-img' src={img} alt="phone" />
            <div>
                <h3 className='subtitle'>How it works</h3>
                <h2 className='section5-title'>Viewing long- term and short -term forcast</h2>
                <p className='section5-text'>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.</p>
                <Button text='Explore now'/>
            </div>
        </div>
    )
}

export default Section5;