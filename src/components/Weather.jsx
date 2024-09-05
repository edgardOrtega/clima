import { useState, useEffect } from "react";

const Weather = () => {
  const [datos, setDatos] = useState(null);
  const apiKey = '18ea712346ca5ef61017e9fcd3b49c81';
  const city = 'Santiago';
  const country = 'cl';

  const getDatos = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setDatos(data);
      console.log(data);
    } catch (error) {
      console.log("Error al obtener datos: ", error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  if (!datos || !datos.main) {
    return <div>Cargando datos...</div>;
  }

  return (
    <main>
      <>
        <h1>Clima en {datos.name}, {datos.sys.country}</h1>
        <p>Temperatura: {(datos.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Humedad: {datos.main.humidity}%</p>
        <p>Velocidad del viento: {datos.wind.speed} m/s</p>

        <img src={`https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`} alt={datos.weather[0].description} />

      </>
    </main>
  );
};

export default Weather;