import React from 'react'
import './SingleDeviceIndex.css'
import Header from '../Home_Screen/Header'
import DeviceStatus from './DeviceStatus'
import SingleDeviceThisPeriod from './SingleDeviceThisPeriod'
import TodayVsYesterdayConsumptionChart from './TodayVsYesterdayConsumptionChart'
import TableAndDetails from './TableAndDetails'
import RealTimeCurrentLine from './RealTimeCurrentLine'
import ThisSession from './ThisSession'

const SingleDeviceIndex = () => {
    return (
        <div className='SingleDeviceIndex'>
            <Header headerText={'Device 1'} />
            <div className='singleDeviceIndexBody'>
                <div className='firstRow'>
                <div className="firstRowFirstHalf">
                    <DeviceStatus />

                </div>
                <div className='firstRowSecondHalf'>
                    <RealTimeCurrentLine/>
                    <ThisSession/>
                </div>
            </div>
            <div className='secondRow'>
                <div className='secondRowFirstHalf'>
            <SingleDeviceThisPeriod /></div>
            <div className='secondRowSecondHalf'>
                    <TodayVsYesterdayConsumptionChart/>
                    <TableAndDetails />
                    </div>
                    </div>

            </div>
            
        </div>

    )
}

export default SingleDeviceIndex