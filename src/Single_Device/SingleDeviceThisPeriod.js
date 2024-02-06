import React from 'react'
import Meter from '../Home_Screen/Meter'
import './SingleDeviceThisPeriod.css'

const SingleDeviceThisPeriod = () => {
    return (
        <div className='SingleDeviceThisPeriod'>
            <div className='singleDeviceThisPeriodLabel'>
                This Period
            </div>

            <div className='main'>

                <div className='meters'>
                    <Meter />
                    <p>Units</p>

                </div>

                <div className='meters'>
                    <Meter />
                    <p>Price</p>

                </div>
            </div>
        </div>
    )
}

export default SingleDeviceThisPeriod