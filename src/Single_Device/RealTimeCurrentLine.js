  import React, { useEffect, useState } from 'react';
  import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
  import {ref,databaseRef,update,database} from '../firebase/firebase'
  import './RealTimeCurrentLine.css'


  const RealTimeCurrentLine = ( { current ,isChanged}) => {
        const [data, setData] = useState([{ "current": 0, "time": 1 }]);

  useEffect(() => {
    let i = 2; // Start time from 2 since we already have time 1 in initial data

    if (isChanged === 1) {
      const intervalId = setInterval(() => {
        // Calculate the new time
        const time = i++;

        // Update the data with the new record
        setData(prevData => [...prevData, { "current": parseFloat(current), "time": time }].slice(-15));
      }, 1000);

      // Cleanup the interval when isChanged becomes 0
      return () => clearInterval(intervalId);
    } else {
      // Reset data if isChanged is 0
      setData([{ "current": 0, "time": 1 }]);
    }
  }, [current, isChanged]);
    
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
