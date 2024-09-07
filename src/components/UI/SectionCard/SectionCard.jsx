import './SectionCard.css';

export const SectionCard = ({icon, title, text, index}) => {
    return(
        <div className='section1-card'>
            <span className='card-number'>0{index}</span>
            <span className='icon'>{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

