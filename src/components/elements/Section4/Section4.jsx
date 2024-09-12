import { Section4Card } from '../../UI/Section4-Card/Section4Card';
import { CiHeadphones } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { RiArchiveStackFill } from "react-icons/ri";
import { LuFolderHeart } from "react-icons/lu";
import { RiPieChartLine } from "react-icons/ri";

import './Section4.css';

const Section4 = () => {

    const data = [
        {
            icon: <CiHeadphones />, title: 'Support', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', className: 'section4-card rightBottom'
        },
        {
            icon: <FaChartLine />, title: 'Sales', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', className: 'section4-card rightBottom'
        },
        {
            icon: <MdOutlineDashboard />, title: 'Onboarding', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', className: 'section4-card bottom'
        },
        {
            icon: <RiArchiveStackFill />, title: 'Product', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', className: 'section4-card rightTop'
        },
        {
            icon: <LuFolderHeart />, title: 'Quality', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', className: 'section4-card rightTop'
        },
        {
            icon: <RiArchiveStackFill />, title: 'Result', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', className: 'section4-card top'
        }
    ]


    return (
        <div className='section4'>
            <h2>Make every step user-centric</h2>
            <p className='section4-text'>Lorem ipsum dolor sit amet, consectetur adipis elit</p>
            <div className='section4-cards'>
                {
                    data.map((item) => {
                        return <Section4Card icon={item.icon} title={item.title} text={item.text} className={item.className} />
                    })
                }
            </div>
        </div>

    )
}

export default Section4;