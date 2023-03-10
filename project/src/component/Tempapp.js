import React, { useEffect, useState } from 'react'
import './css/style.css'
import axios from "axios"



const Tempapp = () => {

    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");

    


    useEffect(()=>{
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid={API KEY}`  //this API KEY we get https://openweathermap.org/api
      axios.get(url)
      .then((response)=>{
        console.log(response);
      setCity(response.data);
      })
      .catch(()=>{
        console.log("data not fetched");
      })
    },[search])


  return (
    <section className='box'>


      <div className='box1'>

        <div className='box1right'>

          <div className='container'>
            
            <input type="search" value={search} placeholder="Enter the city name" style={{marginTop:"4px",background: "transparent", color:"white", height:"40px",width:"80%"}} className="search" onChange={(e)=>{setSearch(e.target.value)}} />
            {!city ? (
              <div className='container'> <p className='container'>Not Found</p></div>
           
            ):(

            <div className='container'>

              <form>
                <table className='container' style={{marginTop: "100px"}}>
                  <tr>
                  <td>
                   City : {city.name}, {city.sys.country}
                    </td>
                  </tr>
                  <tr>
                  <td>
                    Weather : {city.weather[0].description}
                  </td>
                  </tr>
                  <tr>
                  <td>
                Temprature : {city.main.temp} °c
                   </td>
                  </tr>
                  <tr>
                  <td>
                    Humidity : {city.main.humidity} %
                  </td>
                  </tr>
                  <tr>
                  <td>
                    Visibility : {city.visibility} mi
                  </td>
                  </tr>
                  <tr>
                  <td>
                   Wind Speed : {city.wind.speed} km/h
                   </td>
                  </tr>

                </table>
              </form>

            </div>
            )}
          </div>

        </div>






      </div>




    </section>
  )
}

export default Tempapp
