import { useState } from "react";
import ButtonSelection from './buttonSelection.jsx';
import Animate from './animation.jsx';
import '../styles/showCount.css'


function ShowCount() {
    const [isClicked, setIsClicked] = useState(false);
    const handleButtonClick = () => {
        setIsClicked(true);
    };

    return (
        <div className="parentWithButton">
            {isClicked ? <Animate /> : <ButtonSelection onButtonClick={handleButtonClick} />}
        </div>
    );
}

export default ShowCount;