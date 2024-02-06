import React from 'react'
import './DeviceThisPeriod.css'
const DeviceThisPeriod = () => {
    return (
        <div className="DeviceThisPeriod">
            <div className="deviceThisPeriodHeader">
                <div className="headerLabel">
                    This Period
                </div>
                <div className="deviceThisPeriodButton">
                    <select className="deviceThisPeriodOption">
                        <option>Total</option>
                        <option>Device 1</option>
                        <option>Device 2</option>
                        <option>Device 3</option>
                    </select>
                </div>
            </div>
            <div className="unitsThisPeriod">
                <div className="unitsLabel">
                    Units Consumed :
                </div>
                <div className="unitsValue">
                    800 Units
                </div>
            </div>
            <div className="priceThisPeriod">
                <div className="priceLabel">
                    Price per unit :
                </div>
                <div className="priceValue">
                    ₹8
                </div>
            </div>
            <div className="horizontalLine"></div>
            <div className="totalThisPeriod">
                <div className="totalLabel">
                    Total Price :
                </div>
                <div className="totalValue">
                    ₹699
                </div>
            </div>
        </div>
    )
}

export default DeviceThisPeriod