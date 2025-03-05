
const apiKey = "8b8d77610090dea39296d10e11577f1e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
      document.querySelector('.error').style.display = 'block';
      document.querySelector('.weather').style.display = 'none';
    }
    else{
      var data = await response.json();
    console.log(data);
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
      weatherIcon.src="Assets/clouds2.png";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src="Assets/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src="Assets/drizzle.png";
    }
    else if(data.weather[0].main == "Humidity"){
      weatherIcon.src="Assets/humidity.png";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src="Assets/rain1.png";
    }
      
    else if(data.weather[0].main== "Snow"){
      weatherIcon.src="Assets/snow.png";
    }
      
    else if(data.weather[0].main== "Mist"){
      weatherIcon.src="Assets/mist.png";
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    }


    
      
}

searchButton.addEventListener('click', ()=>{
  checkWeather(searchBox.value);
})

