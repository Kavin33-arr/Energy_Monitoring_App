import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';
import "./Meter.css";
const data = [{ name: 'value', value: 75 }, { name: 'empty', value: 25 }];
const COLOR = "#00FFD1";


const Meter = ({ label, value }) => {
    
    return (
        <div className='Meter' >
            <ResponsiveContainer width="100%" height={200} style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                <PieChart background={{ fill: 'none' }}>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="0%">
                            <stop offset="30%" style={{ stopColor: COLOR, stopOpacity: 2 }} />
                            <stop offset="80%" style={{ stopColor: 'red', stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={69}
                        outerRadius={80}
                        fill={`url(#gradient)`}
                        dataKey="value"
                        stroke='none'
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`url(#gradient)`} />
                        ))}

                        {/* Label to display the data value inside the circle */}
                        <Label value={value} position="center" fill={COLOR} fontSize={30} fontStyle="italic" />
                        <Label value={label} position="center" fill={COLOR} fontSize={20} dy={30} fontStyle="italic" fontWeight={200} />
                    </Pie>
                    <style>
                        {`path.recharts-sector{ background: none; }`}
                    </style>

                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Meter;
