import './ServiceCard.css'

export const ServiceCard = ({icon, title, text}) => {

    return (
        <div className="card">
            {icon}
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}