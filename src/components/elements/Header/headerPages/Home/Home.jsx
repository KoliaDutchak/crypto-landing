import './Home.css'
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Slider from '../../../../UI/Slider/Slider'
import Button from '../../../../UI/Button/Button'
import Smartphone from '../../../../../assets/images/smartphones/phone1.png'
import { useState } from 'react';
import './Home.css'


export const Home = () => {

    const slides = [
        { title: 'Live And on-demand trading', text: 'Lorem ipsum dolor sit amet. Qui consequatur sint 33 volupta officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.' },
        { title: 'Live and Immediate Trading', text: 'Lorem ipsum dolor sit amet. Qui consequatur sint 33 volupta officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.' },
        { title: 'On-the-Spot Trading', text: 'Lorem ipsum dolor sit amet. Qui consequatur sint 33 volupta officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.' }

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className='home-wrapper'>
            <div className='slider'>
                <Slider
                    slides={slides}
                    currentIndex={currentIndex}
                />
                <div className='buttons'>
                    <div><Button text='Explore now' /></div>
                    <div className="slider-controlls">
                        <LiaLongArrowAltLeftSolid className='slider-buttons' onClick={prevSlide} />
                        <p className='slides-numbers'><span>0{currentIndex + 1}</span>-0{slides.length}</p>
                        <LiaLongArrowAltRightSolid className='slider-buttons' onClick={nextSlide} />
                    </div>
                </div>
            </div>

            <img src={Smartphone} alt="smartphone" className='home-img' />
        </div>

    )
}