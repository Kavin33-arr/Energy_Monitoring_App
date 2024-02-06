import React from 'react'
import CurrentReadings from './CurrentReadings'
import './This_period.css'
const This_period = () => {
    return (
        <div className='This_period'>
            <div className='This_period_header'>
                <span>This Period</span>
                <button className="Reset">Reset</button>
            </div>
            <div className='Current_values'>
                <CurrentReadings />
                <CurrentReadings />

            </div>
            <div className='ML_Component'>
                <div className='Text'>
                    <p id='Expected'>Expected Price</p>
                    <p id='Duration'>After 60 Days</p>

                </div>
                <div className='Price'>
                    <label>₹100000</label>

                </div>
            </div>
        </div>
    )
}

export default This_period