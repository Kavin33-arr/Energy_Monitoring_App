import React from 'react';
import { Bar, BarChart, Legend, YAxis, XAxis, ResponsiveContainer, Tooltip, Label } from 'recharts';
import { useState,useEffect } from 'react';
import './DeviceBar.css';

const DeviceBar = () => {

    // Sample dataset
    const data = Array.from({ length: 30 }, (_, day) => ({
        month: 'Jan',
        date: `${day + 1}`,
        device1: Math.floor(Math.random() * 1000) + 800,
        device2: Math.floor(Math.random() * 1000) + 800,
        device3: Math.floor(Math.random() * 1000) + 800,
    }));

          const monthOptions = ['Month','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const yearOptions = ['Year', 2023, 2024, 2025]
        const dateOptions=['Date',1,2,3]

        const [selectedMonth, setSelectedMonth] = useState(monthOptions[0]);

        const [selectedDate, setSelectedDate] = useState(dateOptions[0]);
        const [selectedYear, setSelectedYear] = useState(yearOptions[0]);
     
        const [showYearRight, setShowYearRight] = useState(true);
        const [showYearLeft, setShowYearLeft] = useState(false);
        const [showMonthRight, setShowMonthRight] = useState(true);
        const [showMonthLeft, setShowMonthLeft] = useState(false);
        const [showDateRight, setShowDateRight] = useState(true);
        const [showDateLeft, setShowDateLeft] = useState(false);
        // Sample dataset



    

        var yearIndex = yearOptions.indexOf(selectedYear)
        var monthIndex = monthOptions.indexOf(selectedMonth)
        var dateIndex = dateOptions.indexOf(selectedDate)




        const handleNextDate = () => {
             if (dateIndex < dateOptions.length - 1) {
                dateIndex = dateIndex + 1
            }
        setSelectedDate(dateOptions[dateIndex]);
        };

        const handlePreviousDate = () => {
            if (dateIndex >=1) {
                dateIndex = dateIndex - 1
            }
        setSelectedDate(dateOptions[dateIndex]);
        };

        const handleNextYear = () => {
             if (yearIndex < yearOptions.length - 1) {
                yearIndex = yearIndex + 1
            }
        setSelectedYear(yearOptions[yearIndex]);
        };

        const handlePreviousYear = () => {
           if (yearIndex >=1) {
                yearIndex = yearIndex -1
            }
        setSelectedYear(yearOptions[yearIndex]);
        };


        const handleNextMonth = () => {


             if (monthIndex < monthOptions.length - 1) {
                monthIndex = monthIndex + 1
            }
        setSelectedMonth(monthOptions[monthIndex]);
        }
        const handlePreviousMonth = () => {


             if (monthIndex >= 1) {
                monthIndex = monthIndex - 1
            }
        setSelectedMonth(monthOptions[monthIndex]);
        }

        useEffect(() => {
    if (dateIndex === (dateOptions.length) - 1) {
        setShowDateRight(false);
    } else if ((dateIndex > 0) && ((dateIndex < (dateOptions.length) - 1))) {
        setShowDateLeft(true);
        setShowDateRight(true);
    } else if (dateIndex === 0) {
        setShowDateLeft(false);
    } else {
        setShowDateRight(true);
    }
}, [dateIndex,dateOptions.length]);

        useEffect(() => {
    if (monthIndex === (monthOptions.length) - 1) {
        setShowMonthRight(false);
    } else if ((monthIndex > 0) && ((monthIndex < (monthOptions.length) - 1))) {
        setShowMonthLeft(true);
        setShowMonthRight(true);
    } else if (monthIndex === 0) {
        setShowMonthLeft(false);
    } else {
        setShowMonthRight(true);
    }
}, [monthIndex,monthOptions.length]);
useEffect(() => {
    if (yearIndex === (yearOptions.length) - 1) {
        setShowYearRight(false);
    } else if ((yearIndex > 0) && ((yearIndex < (yearOptions.length) - 1))) {
        setShowYearLeft(true);
        setShowYearRight(true);
    } else if (yearIndex === 0) {
        setShowYearLeft(false);
    } else {
        setShowYearRight(true);
    }
}, [yearIndex,yearOptions.length]);

    return (
        <div className="DeviceBar">
            <div className="DeviceBarChart">
                <div className="headerDaily"> Compare Your Usage!</div>
                <div className='deviceBarHeader'>

                <div className='yearLabel'>
                        <div className='smallLeftYearArrow' style={{ display: showYearLeft ? 'block' : 'none' }} onClick={handlePreviousYear}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </div>
                        <div className='wideLabel'>
                            <label for="Year">{selectedYear}</label>
                        </div>
                        <div className='smallRightYearArrow' style={{ display: showYearRight ? 'block' : 'none' }} onClick={handleNextYear}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </div>
                    <div className='monthLabel'>
                        <div className='smallLeftMonthArrow' style={{ display: showMonthLeft ? 'block' : 'none' }} onClick={handlePreviousMonth}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </div>
                        <div className='wideLabel'>
                            <label for="Month">{selectedMonth}</label>
                        </div>
                        <div className='smallRightMonthArrow' style={{ display: showMonthRight ? 'block' : 'none' }} onClick={handleNextMonth}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </div>
                    <div className='dateLabel'>
                        <div className='smallLeftDateArrow' style={{ display: showDateLeft ? 'block' : 'none' }} onClick={handlePreviousDate}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </div>
                        <div className='wideLabel'>
                            <label for="Date">{selectedDate}</label>
                        </div>
                        <div className='smallRightDateArrow' style={{ display: showDateRight ? 'block' : 'none' }} onClick={handleNextDate}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                        </div>
                    </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="date">
                        <Label value="Date" offset={0} position="insideBottom" dy={10} />
                    </XAxis>
                    <YAxis>
                        <Label value="Units" angle={-90} offset={0} position="insideLeft" />
                    </YAxis>
                    <Legend verticalAlign="bottom" dy={70} />
                    <Bar dataKey="device1" fill="#1EB3B3" width={10} />
                    <Bar dataKey="device2" fill="#82ca9d" width={10} />
                    <Bar dataKey="device3" fill="blue" width={10} />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DeviceBar;
