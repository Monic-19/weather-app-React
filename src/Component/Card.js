import React, { useState } from 'react'
import './Card.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {

  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [imgSrc ,setImgSrc] = useState("");
  const [err ,setErr] = useState(false);
  const [details, setDetails] = useState(false);

  function fillData(event) {
    setInput(event.target.value);
    console.log(event.target.value)
  }

  function showData() {
    console.log("Final value : " + input)

    if (input.length === 0) {
      toast.error('Enter something!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

    else {
      checkWeather(input);
    }
  }

  async function checkWeather(city) {

    const apiKey = "e072993a2468923ec6b95c350ded12d8";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data = await response.json();
      // if(response.status=404){
      //   document.querySelector(".error").style.display="block";
      //   document.querySelector(".weather").style.display="none ";
      // }
      console.log(data);
      setErr(false);
      setDetails(true);
      setCity(data.name);
      setTemp(Math.round(data.main.temp) + " °c");
      setHumidity(data.main.humidity + " %");
      setWind(data.wind.speed + " km/h");

        if(data.weather[0].main==="Clouds"){
          setImgSrc("../clouds.png")
      }

      else if(data.weather[0].main==="Clear"){
          setImgSrc("../clear.png")
      }

      else if(data.weather[0].main==="Rain"){
          setImgSrc("../rain.png")
      }

      else if(data.weather[0].main==="Drizzle"){
          setImgSrc("../drizzle.png")
      }

      else if(data.weather[0].main==="Mist"){
          setImgSrc("../mist.png")
       }

    }
    catch (error) {
      setErr(true);
      setDetails(false);
      setCity("");
      setTemp("");
      setHumidity("");
      setWind("");
      setImgSrc("");
      toast.error('Enter a Valid City!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }


  }


  return (
    <div>

      <div className='card'>

        <div className='search'>

          <input type='text' placeholder="enter city name" spellcheck="false" onChange={fillData} value={fillData.input}></input>
          <button onClick={showData}><img src='../search.png'></img></button>

        </div>

        {err &&
        <div className='error'>
          <p>Invalid City Name</p>
        </div>
        }

        <div className='weather'>

          <img src={imgSrc} alt="" className="weather-icon" />
          <h1 className='temp'>{temp}</h1>
          <h1 className='city'>{city}</h1>

         { details&&

         <div className='details'>

            <div className="col">
              <img src="../humidity.png" alt="" />
              <div>
                <p className="humidity">{humidity}</p>
                <p>Humidity</p>
              </div>
            </div>

            <div className="col">
              <img src="../wind.png" alt="" />
              <div>
                <p className="wind">{wind}</p>
                <p>Wind Speed</p>
              </div>
            </div>

          </div>}

        </div>


      </div>

      <ToastContainer></ToastContainer>

    </div>
  )

}

export default Card
