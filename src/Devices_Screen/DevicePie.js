import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './DevicePie.css';


const DevicePie = () => {
    const device_and_consumption = [
        {
            "id": 1,
            "name": "Charger",
            "value": 200,
        },
        {
            "id": 2,
            "name": "Charger2",
            "value": 200,
        },
        {
            "id": 3,
            "name": "Charger3",
            "value": 600,
        }
    ];

    const colors = [
        '#00cccc',
        '#00ffaa',
        '#66ffff'
    ];

    return (
        <div className='DevicePie'>
            <div className="header">
                Devices and Units Consumption
            </div>
            <div className="Chart">
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={device_and_consumption}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"  // Replace valueKey with dataKey
                            label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                                const RADIAN = Math.PI / 180;
                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                return (
                                    <text
                                        x={x}
                                        y={y}
                                        fill={colors[index % colors.length]}
                                        textAnchor={x > cx ? 'start' : 'end'}
                                        dominantBaseline="central"
                                    >
                                        {device_and_consumption[index].name}
                                    </text>
                                );
                            }}
                            stroke="black"
                            strokeWidth="4px"
                        >
                            {
                                device_and_consumption.map((entry, index) => (
                                    <Cell key={`cell-${device_and_consumption[index].id}`} fill={colors[index]} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DevicePie;
