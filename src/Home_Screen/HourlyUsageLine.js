import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const HourlyUsageLine = () => {
    // Create a dataset with all 24 hours
    const data = Array.from({ length: 24 }, (_, index) => {
        const hour = index < 10 ? `0${index}:00` : `${index}:00`;
        return {
            "hour": hour,
            "consumedUnits": 0 // Default value, 0 when devices are not active
        };
    });

    // Set consumedUnits for active hours
    // For example, setting some sample active hours
    data[8].consumedUnits = 150;
    data[10].consumedUnits = 200;
    data[12].consumedUnits = 180;
    data[14].consumedUnits = 220;
    data[16].consumedUnits = 170;

    return (
        <div className='HourlyUsageLine'>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                    <XAxis dataKey="hour" label={{ value: 'Time in a Day', position: 'insideBottom', dy: 10 }} />
                    <YAxis label={{ value: 'Units Consumed', angle: -90, position: 'insideLeft', dy: 40, dx: -10 }} />

                    <Tooltip />
                    <Line
                        dataKey="consumedUnits"
                        name="Units Consumed"
                        stroke="#1EB3B3"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HourlyUsageLine;
