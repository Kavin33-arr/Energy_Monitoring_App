import React from 'react'
import Header from '../Home_Screen/Header'
import DeviceLine from './DeviceLine'
import DeviceList from './DeviceList'
import DevicePie from './DevicePie'
import DeviceComposed from './DeviceComposed'
import DeviceBar from './DeviceBar'
import DeviceThisPeriod from './DeviceThisPeriod'
import './DeviceIndex.css'
import DeviceStats from './DeviceStats'
const DeviceIndex = () => {
    return (
        <div className="DeviceIndex">
            <header>
                <Header headerText="Manage Device" />
            </header>
            <div>
                <DeviceList />
                <div className="pieDiv">
                    <DevicePie />
                    <DeviceThisPeriod />
                    <DeviceStats />

                </div>
                <div className='consumptionGraph'>
                    <DeviceLine />
                    <DeviceBar />
                </div>
                <DeviceComposed />
            </div>
        </div>
    )
}

export default DeviceIndex