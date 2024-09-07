import { FaWallet } from "react-icons/fa";
import { SectionCard } from '../../UI/SectionCard/SectionCard';
import { FaRegEye } from "react-icons/fa6";
import { RiFileList3Line } from "react-icons/ri";
import './Section1.css';

const Section1 = () => {
    const cardsData = [
        { index: 1, icon: <FaWallet />, title: 'Connect wallet & exchanges', text: 'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.' },
        { index: 2, icon: <FaRegEye />, title: 'Connect wallet & exchanges', text: 'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.' },
        { index: 3, icon: <RiFileList3Line />, title: 'Connect wallet & exchanges', text: 'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.' }
    ]

    return (
        <div className='section1'>
            <h2>Automated portfolio tracking</h2>
            <p className="text">Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</p>

            <div className="cards">
                {

                    cardsData.map((item) => {
                        return <SectionCard index={item.index} icon={item.icon} title={item.title} text={item.text} />
                    })
                }
            </div>


        </div>
    )
}

export default Section1;