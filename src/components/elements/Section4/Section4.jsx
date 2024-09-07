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
            icon: <CiHeadphones />, title: 'Support', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', styles: {
                borderRight: '1px solid #C23893',
                borderBottom: '1px solid #C23893'
            }
        },
        {
            icon: <FaChartLine />, title: 'Sales', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', styles: {
                borderRight: '1px solid #C23893',
                borderBottom: '1px solid #C23893'
            }
        },
        {
            icon: <MdOutlineDashboard />, title: 'Onboarding', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', styles: {
                borderBottom: '1px solid #C23893'
            }
        },
        {
            icon: <RiArchiveStackFill />, title: 'Product', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', styles: {
                borderRight: '1px solid #C23893',
                paddingTop: '57px'
            }
        },
        {
            icon: <LuFolderHeart />, title: 'Quality', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', styles: {
                borderRight: '1px solid #C23893',
                paddingTop: '57px'
            }
        },
        {
            icon: <RiArchiveStackFill />, title: 'Result', text: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.', styles: {
                paddingTop: '57px'
            }
        }
    ]


    return (
        <div className='section4'>
            <h2>Make every step user-centric</h2>
            <p className='section4-text'>Lorem ipsum dolor sit amet, consectetur adipis elit</p>
            <div className='section4-cards'>
                {
                    data.map((item) => {
                        return <Section4Card icon={item.icon} title={item.title} text={item.text} styles={item.styles} />
                    })
                }
            </div>
        </div>

    )
}

export default Section4;