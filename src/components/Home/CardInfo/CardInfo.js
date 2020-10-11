import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CardInfo.css'

const CardInfo = (props) => {
    const {title, desc, icon, background} =props.info;
    return (
        
            <div className="col-md-4 text-white info-card ">
                <div className={`d-flex justify-content-center  info-container ${background}`}>
                    <div>
                        <FontAwesomeIcon className="info-icon mr-3" icon={icon}></FontAwesomeIcon>
                    </div>
                    <div>
                        <h5>{title}</h5>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
       
    );
};

export default CardInfo;