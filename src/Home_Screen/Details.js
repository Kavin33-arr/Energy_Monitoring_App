import React from 'react';
import './Details.css';
import HourlyUsageLine from './HourlyUsageLine';

const Details = () => {
    const data = [
        {
            "name": "Charger",
            "Units": 20
        },
        {
            "name": "Charger 2",
            "Units": 120
        },
        {
            "name": "Charger 3",
            "Units": 270
        }
    ];

    const calculateTotalUnits = (data) => {
        let totalUnits = 0;

        data.forEach((item) => {
            totalUnits += item.Units;
        });

        return totalUnits;
    };


    return (
        <div className='Details'>
            <div className='headerDetailsLabel'>
                Date
            </div>
            <div className='Content'>
                {data.map((items, index) => (
                    <div className='listItems' key={index}>
                        <div className='listLabel'>{items.name}</div>
                        <div className='listHorizontalMeter'>
                            <div className='listHorizontalLine'>
                                <span className='color' style={{ width: `${items.Units / 2}px` }}></span>
                            </div>
                            <div className='itemValue'>{items.Units}</div>
                        </div>
                    </div>
                ))}

            </div>
            <HourlyUsageLine />
        </div>
    );
};

export default Details;
