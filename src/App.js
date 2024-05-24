import React,{useState} from "react";
import axios from 'axios';
import "./test.css"

function App() {
  const[data,setData]=useState({});
  const[location,setLocation]=useState('');
  
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d5b8700b929219a07be6d8d77db46ed0`
 
  const searchLocation=(event)=>{
    if(event.key==='Enter'){
        axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
       })
       setLocation('')
    } 
  }

  return (
    <div className="app">
      <div className="search">
        <input 
          value={location}
          onKeyPress={searchLocation}
          onChange={event=> setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text" 
        />
      </div>


     <div className="container">

        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} F</h1> : null}
          </div>
          <div className="description">
            {data.weather? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
      
    
      {data.name!== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main?<p className='bold'>{data.main.feels_like}F</p> : null}
            <p className="bold">65F</p>
            <p>feels like</p>
          </div>
          <div className="humidity">
            {data.main? <p className='bold'>{data.main.humidity}%</p> : null}
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind? <p className='bold'>{data.main.speed}</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      }

     </div>  
    </div>
  );
};

export default App;
