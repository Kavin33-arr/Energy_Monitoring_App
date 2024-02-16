import React from 'react'
import './TodayVsYesterdayConsumptionChart.css'
import { ResponsiveContainer, Line, LineChart, XAxis, YAxis, Tooltip, Legend } from 'recharts'
const TodayVsYesterdayConsumptionChart = () => {
    const data = Array.from({ length: 30 }, (_, day) => ({
        month: "Jan",
        date: `${day + 1}`,
        device1: Math.floor(Math.random() * 1000) + 800,
        device2: Math.floor(Math.random() * 1000) + 800,
        device3: Math.floor(Math.random() * 1000) + 800,
    }));
    return (
        <div className='TodayVsYesterdayConsumptionChart'>

            <div className='TodayVsYesterdayConsumptionHeader'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
                <span>Last 2 Days</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>



            </div>
            <div className='TodayVsYesterdayMain'>


                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                        <XAxis dataKey="date" label={{ value: 'Days', position: 'insideBottom', dy: 10 }} />
                        <YAxis label={{ value: 'Units Consumed', angle: -90, position: 'insideLeft', dy: 40, dx: -15 }} />

                        <Tooltip />
                        <Line
                            dataKey="device1"
                            stroke="#1EB3B3"
                            dot={false}
                        />
                        <Line
                            dataKey="device2"
                            stroke="#d0d5ff"
                            dot={false}
                        />
                      
                    
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TodayVsYesterdayConsumptionChart