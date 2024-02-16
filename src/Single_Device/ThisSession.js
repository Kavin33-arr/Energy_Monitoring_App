import React, { useEffect, useState } from 'react';
import './ThisSession.css';

const ThisSession = ({ time, totalPower, totalPrice }) => {
    
  
  return (
    <div className='ThisSession'>
          <div className='thisSessionHeader'>This Session</div>
   <table className='thisSessionTable'>
  <tbody>
                  <tr>
                      <td>
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-stopwatch" viewBox="0 0 16 16">
  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
</svg>
                      </td>
      <td>
        <div className='thisSessionDuration'>
          {`${time.hours}:${time.minutes}:${time.seconds}`}
        </div>
      </td>
      <td>
        <div className='smallFont'> hours</div>
      </td>
    </tr>
                  <tr>
                      <td>
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-lightning-charge" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
</svg>
                      </td>
      <td>
        <div className='thisSessionPower'>
          {`${totalPower} `}
        </div>
      </td>
      <td>
        <div className='smallFont'> watt</div>
      </td>
    </tr>
                  <tr>
                      <td><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg></td>
      <td>
        <div className='thisSessionPrice'>
          {`${totalPrice} `}
        </div>
      </td>
      <td>
        <div className='smallFont'> INR</div>
      </td>
    </tr>
  </tbody>
</table>

    </div>
  );
};

export default React.memo(ThisSession);
