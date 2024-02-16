import React from 'react'
import Meter from '../Home_Screen/Meter'
import './DeviceStatus.css'
const DeviceStatus = ({meter,isChanged,voltage,current}) => {
  
    return (
        <div className='DeviceStatus'>
            <div className='deviceStatusHeader'>
                <div className='deviceStatusHeaderLabel'>
                    Device Status
                </div>
                <div className='deviceStatusHeaderStatus'>
                    {isChanged === 1 ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgOnline" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            <span className='onlineStatus'>Online


                            </span>
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgOffline" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            <span className='offlineStatus'>Offline


                            </span>
                        </>
                    )}
                </div>
            </div>
            <div className='main'>

                <div className='meters'>
                    <Meter label={`Volts`} value={voltage}/>
                    <p>Voltage</p>

                </div>

                <div className='meters'>
                    <Meter label={`Amps`} value={current}/>
                    <p>Current</p>

                </div>
            </div>
        </div>
    )
}

export default DeviceStatus