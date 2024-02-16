import React from 'react'
import './SingleDeviceIndex.css'
import Header from '../Home_Screen/Header'
import DeviceStatus from './DeviceStatus'
import SingleDeviceThisPeriod from './SingleDeviceThisPeriod'
import TodayVsYesterdayConsumptionChart from './TodayVsYesterdayConsumptionChart'
import TableAndDetails from './TableAndDetails'
import RealTimeCurrentLine from './RealTimeCurrentLine'
import ThisSession from './ThisSession'
import { useState, useEffect } from 'react'
import { database, ref, onValue } from '../firebase/firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'; 

const SingleDeviceIndex = () => {
    const [meter, setMeter] = useState('0');
    const [current, setCurrent] = useState('0');
    const [voltage, setVoltage] = useState('0');
    const [isChanged, setIsChanged] = useState(0);
     const [totalPower, setTotalPower] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    });
    const [lastTime,setLastTime]= useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    });
    const [powerArray,setPowerArray]=useState([])
    const [averagePower,setAveragePower]=useState(0)
    let lastRetrievedCurrent;
    let notModified = 0;
    let sum = 0
    let average=0;
     function arrayAverage(powerArray) {
                    sum = powerArray.reduce((acc, currentValue) => acc + currentValue, 0);
                console.log("sum",sum)
                 average = sum / powerArray.length;
                return average
    }
    function timeDuration(time) {
                    console.log(time)
                    let totalTime = (time.hours) + (time.minutes/60) + (time.seconds/3600)
                    console.log("Total time",totalTime)
                    return totalTime
                }

    useEffect(() => {
        const databaseRef = ref(database, 'Electricity monitoring');
    
     
        // Fetch initial data from the database
        onValue(databaseRef, (snapshot) => {
            const currentMeter = snapshot.child('Meter ID').val();
            setMeter(currentMeter);
            // Set the initial state of 'current' to the value retrieved from the database
            lastRetrievedCurrent = snapshot.child('CURRENT(A)').val();
             
        })
    }, [])

    useEffect(() => {
            const databaseRef = ref(database, 'Electricity monitoring');
            const timer = setInterval(() => {
           
    
                onValue(databaseRef, (snapshot) => {
                    const currentMeter = snapshot.child('Meter ID').val();
                    setMeter(currentMeter);
                    setVoltage(snapshot.child('VOLTAGE(V)').val());
                    setCurrent(snapshot.child('CURRENT(A)').val());
                    console.log("in actual", current)

                    // Compare the last retrieved current with the current value
                    const currentDifference = Math.abs(parseFloat(lastRetrievedCurrent) - parseFloat(snapshot.child('CURRENT(A)').val()));
                    console.log("Current Difference", currentDifference)
                    // Check if the current value has changed within the 5-second interval
                    if (currentDifference !== 0) {
                        notModified++
                    }
                    if (notModified > 10) {
                        setIsChanged(0)
                    
                    }
                    else {
                        setIsChanged(1)
                    }
                });
            }, 2000);

            // Cleanup function to clear the interval when the component unmounts
            return () => clearInterval(timer);
    }, [current]);
    
      

        useEffect(() => {
        // This function runs every second when isChanged is set to 1
        const handleInterval = () => {
        // Update time
        setTime(prevTime => {
            const newSeconds = prevTime.seconds + 1;
            const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
            const newHours = prevTime.hours + Math.floor(newMinutes / 60);
            return {
            hours: newHours,
            minutes: newMinutes % 60,
            seconds: newSeconds % 60,
            };
        });
            const calculatedPower = (parseFloat(voltage) * parseFloat(current)).toFixed(2);
        const newTotalPrice =( 4 * (calculatedPower/1000)).toFixed(2);
            setTotalPower(calculatedPower);
            setTotalPrice(newTotalPrice);
            powerArray.push(parseFloat(calculatedPower))
            setPowerArray((prevPowerArray) => [...prevPowerArray, parseFloat(calculatedPower)]);

            };
        
            if (isChanged === 1) {
                const intervalId = setInterval(handleInterval, 1000);
                return () => clearInterval(intervalId);

            }
            else {
    average = arrayAverage(powerArray);
    setAveragePower(average);

    const totalPower = ((average / 1000) * timeDuration(time)).toFixed(2);
  
}
        }, [isChanged]);
    



   

        return (
            <div className='SingleDeviceIndex'>
                <Header headerText={meter} />
                <div className='singleDeviceIndexBody'>
                    <div className='firstRow'>
                        <div className="firstRowFirstHalf">
                            <DeviceStatus isChanged={isChanged} meter={meter} voltage={voltage} current={current} />

                        </div>
                        <div className='firstRowSecondHalf'>
                            <RealTimeCurrentLine current={current} isChanged={isChanged}/>
                            <ThisSession time={time} totalPower={totalPower} totalPrice={totalPrice} />
                        </div>
                    </div>
                    <div className='secondRow'>
                        <div className='secondRowFirstHalf'>
                            <SingleDeviceThisPeriod isChanged={isChanged} /></div>
                        <div className='secondRowSecondHalf'>
                            <TodayVsYesterdayConsumptionChart />
                            <TableAndDetails />
                        </div>
                    </div>

                </div>
            
            </div>

        
        )
}
export default SingleDeviceIndex