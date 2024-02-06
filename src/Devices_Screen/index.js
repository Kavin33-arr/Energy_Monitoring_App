import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './Home_Screen/reportWebVitals';
import Header from './Home_Screen/Header';
import './Devices_Screen/DeviceList'
import DeviceList from './Devices_Screen/DeviceList';
import DevicePie from './Devices_Screen/DevicePie';
import DeviceLine from './Devices_Screen/DeviceLine';
import DeviceBar from './Devices_Screen/DeviceBar';
import DeviceThisPeriod from './Devices_Screen/DeviceThisPeriod';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <Header headerText="Manage Device" />
    </header>
    <main>
      <DeviceList />
      <div className="pieDiv">
        <DevicePie />
        <DeviceThisPeriod />
      </div>
      <DeviceLine />
      <DeviceBar />
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
