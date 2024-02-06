import React from 'react'
import { Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Bar, ComposedChart } from 'recharts';
import { useState } from 'react';
import './DeviceComposed.css'

const DeviceComposed = () => {
    const [selectedDevice, setSelectedDevice] = useState('device1');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedRoutine, setRoutine] = useState('')

    // Sample dataset
    const data = Array.from({ length: 30 }, (_, day) => ({
        month: "Jan",
        date: `${day + 1}`,
        device1: Math.floor(Math.random() * 1000) + 800,
        device2: Math.floor(Math.random() * 1000) + 800,
        device3: Math.floor(Math.random() * 1000) + 800,
    }));


    const filteredData = selectedMonth
        ? data.filter((entry) => entry.date.startsWith(selectedMonth))
        : data;

    const deviceOptions = ['device1', 'device2', 'device3'];
    const monthOptions = ['Jan', 'Feb', 'Mar'];
    const routineOptions = ['Daily', 'Monthly', 'Yearly'];

    return (
        <div className="DeviceComposed">
            <div className="DeviceLineChart">
                <div className="headerDaily"> Daily Consumption</div>

                <div className="dropdowngroup">
                    <select
                        id="Consumption"
                        value={selectedRoutine}
                        onChange={(e) => setRoutine(e.target.value)}
                    >
                        {routineOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <select
                        id="deviceDropdown"
                        value={selectedDevice}
                        onChange={(e) => setSelectedDevice(e.target.value)}
                    >
                        {deviceOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        id="monthDropdown"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                        {monthOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


            <ResponsiveContainer width="80%" height={300}>
                <ComposedChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                    <XAxis dataKey="date" label={{ value: 'Days', position: 'insideBottom', dy: 10 }} />
                    <YAxis label={{ value: 'Units Consumed', angle: -90, position: 'insideLeft', dy: 40, dx: -10 }} />

                    <Tooltip />
                    <Line
                        dataKey={selectedDevice}
                        name={`Device ${selectedDevice.charAt(selectedDevice.length - 1)}`}
                        stroke="red"
                    />
                    <Bar
                        dataKey={selectedDevice}
                        width={10}
                        stroke="aqua" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};


export default DeviceComposed
