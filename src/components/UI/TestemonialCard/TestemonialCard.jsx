import { CiPlay1 } from "react-icons/ci";
import { AiOutlinePause } from "react-icons/ai";

import './TestemonialCard.css';
import { useState } from "react";

const TestemonialCard = ({img, name, status}) => {

    const [playing, setIsPlaying] = useState(false);

    const PlayPause = () => {
        setIsPlaying(!playing)
    }

    return (
        <div className='testemonial-card'>
            <img className="bg" src={img} alt="testemonial author" />
            <div className='testemonial-card-content'>
                <div>
                    <h2 className="author-name">{name}</h2>
                    <p className='author-status'>{status}</p>
                </div>
                
                    <span className="play-btn">
                        {
                            playing ? <AiOutlinePause onClick={PlayPause}/> : <CiPlay1 onClick={PlayPause}/>
                        }
                    </span>

                
            </div>
        </div>
    )
}

export default TestemonialCard;


