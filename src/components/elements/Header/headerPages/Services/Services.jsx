import { ServiceCard } from '../../../../UI/ServiceCard/ServiceCard'
import { GiBuyCard } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { RiBtcFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import './Services.css'

export const Services = () => {
    return (
        <div className='services-wrapper'>
            <ServiceCard icon={<FaWallet/>} title='Crypto Wallet' text='Safeguard and manage your digital assets with our secure wallet, featuring top-tier encryption and accessibility.'/>
            <ServiceCard icon={<GiBuyCard/>} title='Trading Platform' text='Enjoy effortless trading on our intuitive platform. Buy, sell, and exchange cryptocurrencies with real-time market insights.'/>
            <ServiceCard icon={<FaBookOpen/>} title='Educational Resources' text='Enhance your crypto knowledge with our extensive resources, offering everything from beginner guides to expert market analysis.'/>
            <ServiceCard icon={<RiStackFill/>} title='Staking & Earning' text='Boost your crypto portfolio by staking your assets and earning rewards while supporting blockchain network security.'/>
            <ServiceCard icon={<RiBtcFill/>} title='DeFi Integration' text='Explore decentralized finance with our integrated services. Access DeFi protocols, participate in yield farming, and more.'/>
            <ServiceCard icon={<FaHandsHelping/>} title='24/7 Support' text='Count on our dedicated support team, available around the clock to assist you with any needs or concerns.'/>
        
            
        </div>
    )
}

