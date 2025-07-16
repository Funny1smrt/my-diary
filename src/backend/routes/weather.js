
// navigator.geolocation.getCurrentPosition(async (position) => {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const key = import.meta.env.VITE_WEATHER_API_KEY;
//     console.log("🌍 Геолокація:", lat, lon);

//     const res = await fetch(
//         `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=uk&exclude=minutely,hourly,daily,alerts&appid=${key}`
//     );
//     const data = await res.json();

//     const temp = data.current.temp;
    
//     const feelsLike = data.current.feels_like;
// });