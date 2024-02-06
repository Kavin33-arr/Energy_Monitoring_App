import React from 'react'
import './TableandDetails.css'

const TableAndDetails = () => {
    return (

        <div className='tableAndDetails'>
            <div className='todayTable'>
                <table className='todayTable1'>
                    <thead>
                        <th>
                            Date

                        </th>
                        <th>
                            Duration

                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>19/03/2024</td>
                            <td>1.25 hrs</td>
                        </tr>
                        <tr>
                            <td>19/03/2024</td>
                            <td>1.25 hrs</td>
                        </tr>
                        <tr>
                            <td>19/03/2024</td>
                            <td>1.25 hrs</td>
                        </tr>
                    </tbody>
                </table>
            </div>







            <div className='todayDetails'>
                <div className='percent'>
                    2%
                </div>
                <div className='otherDetails'>
                    rise when compared to last 3 days...
                </div>
            </div>
        </div>
    )
}

export default TableAndDetails