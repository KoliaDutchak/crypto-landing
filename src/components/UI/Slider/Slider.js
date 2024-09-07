import Slide from './Slide/Slide.js';
import './Slider.css';

const Slider = ({slides, currentIndex}) => {
    return (
        <div className='slider'>
            <Slide
                title={slides[currentIndex].title}

                text={slides[currentIndex].text}
            />
        </div>
    )
}

export default Slider;