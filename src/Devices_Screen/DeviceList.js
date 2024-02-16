import './DeviceList.css'
import React from 'react';
import { Link } from 'react-router-dom';

const DeviceList = ({meter,voltage,isChanged,current}) => {
  
     
   
  console.log('Meter in DeviceList:', meter);
    return (
        <div className="deviceList">
            <div className='tableHeader'>
                <div className="yourDeviceLabel">Your Devices</div>
                <div className='buttonGroup'>
                    <button className="new" data-hover-text="Add New Device"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg></button>
                    <button className='remove' data-hover-text="Remove a Device"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                    </svg></button>
                </div>
            </div>
            <table className="deviceTable">
                <thead>
                    <tr>
                        <th>Device No</th>
                        <th>Device ID</th>
                        <th className="wideColumn">Device Name</th>
                        <th>Consumed Units</th>
                        <th>Device Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td>{1}</td>
                            <td>{"JA09"}}</td>
                            <td>{"Charger"}</td>
                            <td>{"123"}</td>
                            <td ><Link className="deviceLink" to="/device1">
                                {isChanged === 1 ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgOnline" viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <span className='onlineStatus'>Online <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="45"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                        </svg>
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgOffline" viewBox="0 0 16 16">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <span className='offlineStatus'>Offline <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="45"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                        </svg></span>
                                    </>
                                )}
                            </Link>
                            </td>

                        </tr>
                    }
                </tbody>
            </table>
        </div>

    )
}
export default DeviceList