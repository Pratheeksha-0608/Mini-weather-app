import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';
export default function Searchbox({updateinfo,error,seterror}) {
    const apikey = import.meta.env.VITE_API_KEY;
    let [city, setcity] = useState("");
        const getinfo = async () => {
            try{
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apikey}`;
            let res = await fetch(url);
            const data = await res.json();
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error("City not found");
            }
            let name = data[0].name;
            let latitude = data[0].lat;
            let longitude = data[0].lon;
            // Request metric units (Celsius) from API. As a fallback, convert Kelvin->C if values look like Kelvin.
            const wurl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
            const weares = await fetch(wurl);
            const weadata = await weares.json();
            const finaldata = weadata.main;
            const toCelsius = (v) => {
                if (v == null) return v;
                // OpenWeatherMap returns Kelvin by default; Kelvin values are large (>200).
                if (v > 200) return Math.round((v - 273.15) * 100) / 100;
                return Math.round(v * 100) / 100;
            };
            let result = {
                city: name || city,
                temp_max: toCelsius(finaldata.temp_max),
                temp_min: toCelsius(finaldata.temp_min),
                temp: toCelsius(finaldata.temp),
                humidity: finaldata.humidity,
                pressure: finaldata.pressure,
                feels_like: toCelsius(finaldata.feels_like)
            };
            return result;
        }
        catch(err){
           throw err;
        }
        };
    let handleSubmit = async (event) => {
        try{
        event.preventDefault();
        seterror(false);
        let res=await getinfo();
        updateinfo(res);
        }
        catch(err){
             seterror(true);
             updateinfo(null);
        }
        setcity("");
    }
    let handleChange = (event) => {
        setcity(event.target.value);
        if (error) {
            seterror(false);
        }
    }
    return (
        <>
            <div className="searchbox">
                <form onSubmit={handleSubmit}>
                    <h3>Serach city for its weather</h3>
                    <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange} /><br></br><br></br>
                    <Button variant="contained" type="submit">Search</Button>
                    {error&&<p style={{color:"red"}}>No such place exists.</p>}
                </form>
            </div>
        </>
    )
}