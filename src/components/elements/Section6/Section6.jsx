import img1 from '../../../assets/images/section6-images/img1.png'
import img2 from '../../../assets/images/section6-images/img2.png'
import img3 from '../../../assets/images/section6-images/img3.png'

import TestemonialCard from '../../UI/TestemonialCard/TestemonialCard';
import './Section6.css'


const Section6 = () => {

    const data = [
        {img: img1, name: 'A. Flores', status: 'Founder of GearUp'},
        {img: img2, name: 'L. Alex', status: <>Womenia Founder</>},
        {img: img3, name: 'C. Henry', status: 'CH Beauty Founder'}
        
    ]

    return (
        <div className='section6'>
            <h2 className="section6-title">Testimonials</h2>
            <p className="section6-text">
                Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.
            </p>
        
        <div className='testemonials'>
             {
                data.map((item) => {
                    return <TestemonialCard className='card' img={item.img} name={item.name} status={item.status}/>
                })
            }

            </div>
        </div>
    )
}

export default Section6;