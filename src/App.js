// App.js
import React from 'react';
import './App.css';
import Header from './Home_Screen/Header';
import Mainmeter from './Home_Screen/Mainmeter';
import ThisPeriod from './Home_Screen/ThisPeriod';
import Tips from './Home_Screen/Tips';
import CalendarDisplay from './Home_Screen/CalendarDisplay';
import Details from './Home_Screen/Details';
const username = "Welcome Michael!";

const App = () => {

    return (<div className="App">
        <header>
            <Header headerText={username} />
        </header>
        <main>
            <Mainmeter />
            <div>
                <ThisPeriod />
                <Tips />
            </div>
        </main>
        <section id="Overall">
            <div className="calendarDiv">
                <CalendarDisplay />
                <Details />
            </div>
        </section>


    </div >)
};

export default App;
