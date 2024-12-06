import {useEffect, useState} from "react";

export default function FormLogin() {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const url = "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
        fetch(url).then(rs => rs.json())
            .then(data => {setWeatherData(data.list);
            })
    }, []);

    return (
        <section className="weather-container">
            {weatherData.length > 0 && (
                <div className="grid-container">
                    {weatherData.map((forecast, index) => (
                        <div key={index} className="weather-card">
                            <h3>{new Date(forecast.dt * 1000).toLocaleString()}</h3>
                            <p>{forecast.main.temp}°C</p>
                            <p>{forecast.weather[0].description}</p>
                            <img
                                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                alt="Weather Icon"
                                className="weather-icon"
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}