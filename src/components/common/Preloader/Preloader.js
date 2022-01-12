import React from "react";
import preloader from '../../../assets/images/Preloader.svg'

const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={{width:"250px"}}/>
        </div>
    )
}

export default Preloader