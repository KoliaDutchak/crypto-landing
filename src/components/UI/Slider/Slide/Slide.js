import './Slide.css'
import gradient from '../../../../assets/images/gradient.png'

const Slide = ({title, text}) => {

    return (
        <div className="slide">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Slide;