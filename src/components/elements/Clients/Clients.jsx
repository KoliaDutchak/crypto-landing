import logo1 from '../../../assets/images/clients-logos/client-logo-1.png'
import logo2 from '../../../assets/images/clients-logos/client-logo-2.png'
import logo3 from '../../../assets/images/clients-logos/client-logo-3.png'
import logo4 from '../../../assets/images/clients-logos/client-logo-4.png'
import logo5 from '../../../assets/images/clients-logos/client-logo-5.png'

import './Cllients.css';

const Clients = () => {
    return (
        <div className='clients'>
            <img src={logo1} alt="client logo" />
            <img src={logo2} alt="client logo" />
            <img src={logo3} alt="client logo" />
            <img src={logo4} alt="client logo" />
            <img src={logo5} alt="client logo" />
        </div>
    )
}

export default Clients;