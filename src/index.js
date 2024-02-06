import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Assuming App is your main component
import DeviceIndex from './Devices_Screen/DeviceIndex'; // Import DeviceIndex
import SingleDeviceIndex from './Single_Device/SingleDeviceIndex';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/devices" element={<DeviceIndex />} />
      <Route path="/device1" element={<SingleDeviceIndex />} />
    </Routes>
  </Router>,
);
