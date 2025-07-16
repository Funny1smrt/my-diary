import { useEffect, useRef, useState } from "react";

function WeatherNow() {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const hasFetched = useRef(false);


    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        async function getWeather() {
            try {
                const lat = 49.59306;
                const lon = 36.52389;

                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=uk&appid=${apiKey}`
                );
                if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
                const data = await res.json();

                const iconCode = data.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
                console.log("🌤️ Погода отримана:", data);
                setWeatherData(data);
                const link = document.querySelector("link[rel~='icon']");
                if (link) {
                    link.href = iconUrl;
                } else {
                    const newLink = document.createElement("link");
                    newLink.rel = "icon";
                    newLink.href = iconUrl;
                    document.head.appendChild(newLink);
                }
            } catch (err) {
                console.error("❌ Помилка при запиті погоди:", err);
            }
        }

        getWeather();
    }, []);

    if (!weatherData) return <div>Завантаження погоди...</div>;

    const { name, weather, main, wind, clouds, sys } = weatherData;
    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString("uk-UA");
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString("uk-UA");
    const icon = weather[0].icon;
    const cityTranslations = {
        "Komsomol's'ke": "Cлобожанське",
        "Kharkiv": "Харків",
        "Kyiv": "Київ",
        // додаєш інші міста
    };

    const localizedCityName = cityTranslations[name] || name;
    return (
        <div className="p-4 border rounded max-w-sm bg-white m-auto my-2 text-black shadow-lg">
            <h2 className="text-xl font-bold mb-2">Погода в місті { localizedCityName}</h2>
            <div className="flex items-center gap-4">
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={weather[0].description} />
                <div>
                    <p className="text-lg">{weather[0].description}</p>
                    <p>Температура: {main.temp}°C</p>
                    <p>Відчувається як: {main.feels_like}°C</p>
                    <p>Вологість: {main.humidity}%</p>
                    <p>Тиск: {main.pressure} гПа</p>
                    <p>Вітер: {wind.speed} м/с</p>
                    <p>Хмарність: {clouds.all}%</p>
                    <p>Схід сонця: {sunrise}</p>
                    <p>Захід сонця: {sunset}</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherNow;
