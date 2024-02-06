import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarDisplay.css'

const CalendarDisplay = () => {
    const data = {
        '2024-01-16': '24KWh',
        '2024-01-17': '32KWh',
        // Add more date-value pairs as needed
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (date) => {
        // Handle the click event for the selected date
        setSelectedDate(date);
        // You can perform additional actions based on the selected date if needed
    };

    const tileContent = ({ date, view }) => {
        // Customize content for each date tile
        if (data[date.toISOString().split('T')[0]]) {
            return (
                <div>
                    <p>{data[date.toISOString().split('T')[0]]}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="CalendarDisplay">
            <div className="headerCal">
                <div className="headerCalLabel">
                    <h2>Track Your Usage !</h2></div>
                <div className="filterOption">
                    <select id="calButton">
                        <option>Power</option>
                        <option>Price</option>
                    </select>
                </div>
            </div>
            <div className="dispCal">
                <Calendar width="90%"
                    onChange={handleDateClick}
                    value={selectedDate}
                    tileContent={tileContent}
                />
            </div>
        </div>
    );
};

export default CalendarDisplay;

