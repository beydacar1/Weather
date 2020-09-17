const header = document.getElementById("header");
const temp = document.getElementById("part-one");
const hum = document.querySelector(".humidty");
const pres = document.querySelector(".pressure");
const description = document.querySelector(".description");
const konumone = document.querySelector(".lat");
const konumtwo = document.querySelector(".lon");


class Request{
    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
        }
        
}
const request = new Request();
let veri ;
request.get("http://api.openweathermap.org/data/2.5/weather?q=Ankara,tr&appid=4f066c804c48b14074e02624b63ad3cf")
.then(data => {
    veri = data;
    console.log(veri)
header.textContent = veri.name;
temp.textContent = Math.round((veri.main.temp- 273)) + " °C";
hum.textContent = "Nem: " + veri.main.humidity + "%";
pres.textContent = "Basınç: " + veri.main.pressure;
description.textContent = veri.weather[0].description;
konumone.textContent = veri.coord.lat + "N ";
konumtwo.textContent = veri.coord.lon + "E";
const icon = veri.weather[0].icon;
setIcon(icon,document.querySelector("#changes"));
})
.catch(err => console.error(err))

function setIcon(icon,iconID){
    const skycon =  new Skycons({colo:"white"});
    const presentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycon.play();
    return skycon.set(iconID , Skycons[presentIcon]);
}