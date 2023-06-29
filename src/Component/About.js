import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about-container'>
      <p className='about-data'>
      In this project I created a React weather app, which uses an API from <b>openweathermap</b> to get weather information of any city all over the world. You can use search button to get weather data at your location. You can also use search to find the current weather at a city. The app displays local temperature, gives you information about wind speed & humidity and also shows an icon based on the weather.
      </p>
    </div>
  )
}

export default About
