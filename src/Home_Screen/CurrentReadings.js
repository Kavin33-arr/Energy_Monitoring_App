import React from 'react';
import './Current_readings.css';

const Current_readings = () => {
    return (
        <div className="Current_readings">
            <p className='Readings'>500</p>
            <div className='Unit'>Units
                <label>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                    >
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </label>
            </div>
        </div>
    );
}

export default Current_readings;
