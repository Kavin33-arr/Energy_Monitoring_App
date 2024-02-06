import React from 'react'
import './Tips.css'

const Tips = () => {
    const electricityQuotes = [
        "Save electricity, save money, save the planet.",
        "Conserve energy today, enjoy a brighter tomorrow.",
        "Electricity saved is electricity generated for the future.",
        "Be bright, turn off the light.",
        "Energy saved is energy earned.",
        "Unplug to save a plug.",
        "Switch off, power down, save up!",
        "Use energy wisely, be energy efficient.",
        "Don't be a bulb blower, be an energy saver.",
        "Energy conservation is the foundation of energy independence.",
        "Be a part of the solution, not part of the pollution.",
        "Turn off the lights when not in use, and brighten your future.",
        "Don't be careless, turn off your appliances and be power aware.",
        "Keep the Earth clean, it's not Uranus.",
        "Light today, gone tomorrow. Conserve energy!",
        "Spark the change, conserve energy.",
        "Think globally, act locally, conserve energy daily.",
        "Use energy wisely, it’s not infinite.",
        "Save electricity, save the world.",
        "The less you burn, the more you earn.",
        "Reduce, reuse, and recycle energy.",
        "Energy conservation: A small step for you, a giant leap for the planet.",
        "Be watt-smart, don't let energy depart.",
        "Keep the current flowing, conserve energy.",
        "Conservation is key to a brighter, greener future.",
        "Energy saved today is prosperity for tomorrow.",
        "Save energy, save money, save the planet.",
        "Power down for a brighter future.",
        "Don't be a power hog, conserve like a log.",
        "Energy efficiency is the first step to energy independence.",
        "Be bright about saving light.",
        "Be a power saver; the world will thank you later.",
        "Think conservation, not consumption.",
        "Don’t waste electricity; it’s shocking how much you can save.",
        "Turn off the lights and turn on the future.",
        "Unplug it today, save it for tomorrow.",
        "Light up your life, not just your room.",
        "Save energy – it’s the only Earth we’ve got.",
        "Use electricity wisely; it’s a choice, not a chance.",
        "Power is in your hands, use it wisely.",
        "Watt you do today can improve tomorrow.",
        "Conserve energy, conserve life.",
        "Save energy, it's a small price to pay for a big future.",
        "Energy saved is a future earned.",
        "Be energy efficient, be magnificent.",
        "Conserve energy – brighten your destiny.",
        "Power down to power up the future.",
        "Reduce your carbon footprint, step lightly on the Earth.",
        "Be energy aware, show the Earth you care.",
        "Use energy wisely, make the future bright.",
        "Turn off what you're not using.",
        "Switch to LED bulbs for a brighter and greener future.",
        "Unplug chargers when not in use, they still consume energy.",
        "Opt for natural light during the day to reduce electricity usage.",
        "Invest in energy-efficient appliances for long-term savings.",
        "Weatherize your home to conserve energy and reduce heating costs.",
        "Teach the next generation about the importance of energy conservation.",
        "Consider using smart thermostats to optimize your energy consumption.",
        "Turn off electronic devices when not in use to save power.",
        "Install motion sensors for lighting in less frequently used areas.",
        "Regularly maintain your appliances to ensure they operate efficiently.",
        "Support and use renewable energy sources whenever possible.",
        "Don't overcool or overheat your home; set the thermostat wisely.",
        "Opt for energy-efficient landscaping to provide shade and reduce cooling needs.",
        "Encourage your workplace to adopt energy-saving practices.",
        "Choose energy-efficient transportation options when available.",
        "Educate yourself about energy labels when purchasing appliances.",
        "Encourage local businesses to adopt eco-friendly and energy-efficient practices.",
        "Optimize your computer settings for energy efficiency.",
        "Adjust your water heater temperature to save energy.",
        "Be mindful of water usage as energy is often used to pump and heat water.",
        "Support initiatives and policies promoting renewable energy.",
        "Choose energy-efficient lighting options for your home.",
        "Be mindful of phantom energy usage from standby modes; unplug devices when not needed.",
        "Participate in energy conservation programs offered by your utility company.",
        "Use a power strip to easily disconnect multiple devices at once.",
        "Consider solar-powered outdoor lighting for your home.",
        "Set your refrigerator and freezer to the optimal temperature for energy efficiency.",
        "Turn off exhaust fans when they are no longer needed.",
        "Recycle old electronics to prevent energy-intensive manufacturing of new ones.",
        "Use a microwave or toaster oven for small cooking tasks to save energy.",
        "Support and engage in community initiatives focused on energy conservation.",
        "Seal gaps and cracks in your home to prevent energy wastage.",
        "Opt for energy-efficient windows to improve insulation.",
        "Be conscious of your daily energy consumption habits.",
        "Choose energy-efficient office equipment for your workplace.",
        "Implement a carpooling or rideshare program in your community.",
        "Consider energy-efficient alternatives when upgrading home systems.",
        "Encourage local schools to incorporate energy conservation education into their curriculum.",
        "Take advantage of natural ventilation to reduce the need for air conditioning.",
        "Support businesses that prioritize sustainability and energy efficiency.",
        "Regularly check and replace air filters for heating and cooling systems.",
        "Minimize screen brightness on electronic devices to save energy.",
        "Invest in a programmable thermostat to optimize heating and cooling schedules.",
        "Choose energy-efficient appliances even for small household items.",
        "Limit the use of space heaters and opt for layered clothing to stay warm.",
        "Support initiatives aimed at improving energy infrastructure.",
        "Reduce water heater standby losses by insulating the tank.",
        "Opt for energy-efficient landscaping to provide shade and reduce cooling needs.",
        "Consider using a laptop instead of a desktop computer for energy savings.",
        "Join or initiate community clean energy projects.",
        "Invest in energy-efficient curtains or blinds to regulate home temperature.",
        "Educate others about the impact of energy consumption on the environment.",
        "Turn off your computer and other electronics when not in use overnight.",
        "Invest in energy-efficient heating and cooling systems for your home.",
        "Use a power meter to identify energy-intensive appliances in your home.",
        "Consider upgrading to energy-efficient insulation for your home.",
        "Support policies that promote clean and renewable energy sources.",
        "Advocate for the implementation of energy-efficient technologies in your community.",
        "Be conscious of water usage as energy is often used to pump and treat water.",
        "Regularly check for and repair leaks to conserve water and the energy used to pump it.",
        "Consider using a clothesline instead of a dryer for energy-efficient laundry.",
        "Choose energy-efficient appliances with the ENERGY STAR label.",
        "Support and engage in tree planting initiatives to provide natural shade.",
        "Turn off lights in unoccupied rooms to save electricity.",
        "Use natural ventilation when possible instead of relying on air conditioning.",
        "Participate in local initiatives promoting energy awareness and conservation.",
        "Encourage your workplace to implement telecommuting options to reduce energy consumption.",
    ];

    /*Access a random quote
    const initialQuote = "Encourage your workplace to implement telecommuting options to reduce energy consumption.";
    const [currentQuote, setCurrentQuote] = useState(initialQuote);

    // Function to generate and set a new quote
    const generateQuote = () => {
        const randomQuote = electricityQuotes[Math.floor(Math.random() * electricityQuotes.length)];
        setCurrentQuote(randomQuote);
    };
*/
    function generateQuotes() {
        const randomQuote = electricityQuotes[Math.floor(Math.random() * electricityQuotes.length)];
        return randomQuote
    }


    return (
        <div className="Tips">
            <div className='Tips_header'>
                <svg width="35px" height="35px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#1EB3B3  " fill="#1EB3B3"><line x1="50.4" y1="24.38" x2="58.3" y2="23.14" /><line x1="47.93" y1="17.11" x2="52.87" y2="14.2" /><line x1="42.89" y1="11.73" x2="46.21" y2="4.51" /><line x1="33.45" y1="10.69" x2="33.41" y2="4.96" /><line x1="24.29" y1="12.09" x2="21.62" y2="4.51" /><line x1="17.99" y1="17.03" x2="12.96" y2="14.29" /><line x1="15.78" y1="23.97" x2="8.03" y2="22.66" /><path d="M26.22,45.47c0-5.16-3.19-9.49-4.91-12.69A12.24,12.24,0,0,1,19.85,27c0-6.79,6.21-12.3,13-12.3" /><path d="M39.48,45.47c0-5.16,3.19-9.49,4.91-12.69A12.24,12.24,0,0,0,45.85,27c0-6.79-6.21-12.3-13-12.3" /><rect x="23.63" y="45.19" width="18.93" height="4.25" rx="2.12" /><rect x="24.79" y="49.43" width="16.61" height="4.25" rx="2.12" /><path d="M36.32,53.68v.84a3.23,3.23,0,1,1-6.44,0v-.84" /><path d="M24.57,26.25a7.5,7.5,0,0,1,7.88-7.11" /></svg>

                <span>Tips !</span>

            </div>
            <div className='Tips_content' >
                <p>{generateQuotes()}</p>
            </div>
        </div>
    )
}

export default Tips