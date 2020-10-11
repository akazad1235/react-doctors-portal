import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infoData = [
        {
            title:'Opening Hours',
            desc: 'Lorem inpse is 10 clock',
            icon: faClock,
            background: 'primary'
        },
        {
            title:'Visit Out Location',
            desc: 'Booking, NY 100003, united stats ',
            icon: faMapMarker,
            background: 'drak'
        },
        {
            title:'Contact us now',
            desc: '09887458751',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 row" >
                {
                    infoData.map( bsnInfo => <CardInfo info={bsnInfo}></CardInfo>)
                }
           </div>
        </div>
    );
};

export default BusinessInfo;