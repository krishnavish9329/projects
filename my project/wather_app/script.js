const inputBox =document.getElementById("inputbox");
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.querySelector(".weatherimg");
const temperature =document.getElementById("temp");
const description=document.querySelector(".description");
const humidity= document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");

const weather_body=document.getElementById('weather-body');

const location_not_found = document.querySelector('.erroe404');

async function checkWeather(city){
    const api_key="2241ee123190cde393cfeb1576e3b4f0";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    else{
        weather_body.style.display = "flex";
        location_not_found.style.display = "none";
        temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`;
        humidity.innerHTML=`${weather_data.main.humidity}`;
        wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        
        switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src = "/image/Clouds.png";
            break;
            case 'Clear':
            weather_img.src = "/image/sun.jpg";
            break;
        case 'Rain':
            weather_img.src = "/image/cloud_rain.jpg";
            break;
        case 'Mist':
            weather_img.src = "/image/Mist.jpg";
            break;
        case 'Snow':
             weather_img.src = "/image/Snow.jpg";
            break;
        case 'Haze': 
            weather_img.src = "/image/hoze.png";
            break;
        default:
            weather_img.src ="/image/no.png";
            }
            console.log(weather_data);
        }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})
