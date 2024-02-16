import React from 'react';
import ReactDOM from 'react-dom/client';
import './MainHome.css';

import Header from './Header';
import Mainmeter from './Mainmeter';
import ThisPeriod from './ThisPeriod';
import Tips from './Tips';
const username = "Welcome" + " Michael !";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
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
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
