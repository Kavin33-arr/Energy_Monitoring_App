import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import './RealTimeCurrentLine.css'

const RealTimeCurrentLine = () => {
  const [data, setData] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    const newDataPoint = {
      time: currentTime,
      current: Math.floor(Math.random() * 100) + 50, // Replace with your actual current data
    };

    setData((prevData) => {
      const newData = [...prevData, newDataPoint].slice(-15);
      setCurrentTime((prevTime) => prevTime + 1);
      return newData;
    });
  }, 1000); // Update every second

  // Clear interval on component unmount
  return () => clearInterval(interval);
}, [currentTime]);


  return (
      <div className="RealTimeCurrentLine">
          <div className='realTimeCurrentLineHeader'>
              This Session - Current Flow
          </div>
            <div className='realTimeCurrentLineChart'>
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottom', dy: 10 }} />
            <YAxis label={{ value: 'Current', angle: -90, position: 'insideLeft', dy: 40, dx: -10 }} />

            <Tooltip />
            <Line
            
            dataKey="current"
            name="Current"
            stroke="#1EB3B3"
            strokeWidth={3}
            dot={false} // Disable dots for smoother curve
          />
            </LineChart>
        </ResponsiveContainer>
    </div>
    </div>
  );
};

export default RealTimeCurrentLine;
