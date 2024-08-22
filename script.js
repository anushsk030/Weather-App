const apiKey = "e1cab0d49324a8420ef748cf138e3cff";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox = document.querySelector(".search input");
const searcBtn = document.querySelector(".search button");
async function checkWeather(city){
     const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
     var data = await response.json();
     console.log(data);
     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
     document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
     document.querySelector(".humidity").innerHTML=data.main.humidity;
     document.querySelector(".block").style.display="block";
}
searcBtn.addEventListener("click" ,() => {
     checkWeather(searchBox.value);
})

