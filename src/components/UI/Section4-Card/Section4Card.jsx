import './Section4Card.css';

export const Section4Card =  ({icon, title, text, className}) => {

    // const styles = JSON.parse(style)
    
    return (
        <div className={className}>
            {icon}
            <h3 className='section4-card-title'>{title}</h3>
            <p className='section4-card-text'>{text}</p>
        </div>
    )

}

