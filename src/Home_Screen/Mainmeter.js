import React from 'react'
import "./Mainmeter.css"
import Meter from './Meter'
const Mainmeter = () => {
    return (
        <div className='Mainmeter'>
            <h3>Total Energy Consumed</h3>
            <div className='main'>

                <div className='meters'>
                    <Meter />
                    <li className='learnmoreMainmeter'><a href="/">Learn more...</a></li>
                </div>

                <div className='meters'>
                    <Meter />
                    <li className='learnmoreMainmeter'><a href="/">Learn more...</a></li>
                </div>
            </div>
        </div>
    )
}

export default Mainmeter