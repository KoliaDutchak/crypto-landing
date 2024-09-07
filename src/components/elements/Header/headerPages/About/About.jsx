import BackgroundAnimation from '../../../../UI/Background Animation/BackgroundAnimation'
import './About.css'


export const About = () => {
    return (
        // <BackgroundAnimation>
        //     <div>something</div>
        // </BackgroundAnimation>

        <div className='about-wrapper'>
            <h2>About Us</h2>
            <p>Welcome to <span>Crypton</span>, where innovation meets the future of finance. We are a cutting-edge platform dedicated to empowering individuals and businesses to seamlessly engage with the world of cryptocurrency. Our mission is to make digital assets accessible, secure, and simple for everyone.</p>
            <h3>Who We Are</h3>
            <p>At <span>Crypton</span>, we are a passionate team of blockchain enthusiasts, financial experts, and tech innovators who believe in the transformative power of cryptocurrency. Our diverse backgrounds and shared vision drive us to create a platform that not only facilitates crypto transactions but also educates and inspires our community.</p>
            <h3>What We Do</h3>
            <p>We provide a comprehensive suite of services designed to meet the needs of both novice and seasoned crypto users. From secure wallets to intuitive trading interfaces, our platform offers everything you need to buy, sell, and manage your digital assets with confidence. Whether you’re exploring the world of Bitcoin, Ethereum, or altcoins, we’ve got you covered.</p>

            <span>Join us on our journey to redefine finance and unlock the full potential of the digital economy. At <span>Crypton</span>, your financial future is in your hands.</span>
        
        </div>
    )
}