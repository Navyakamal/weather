
const currentDate = new Date();

// Array of month names
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Get the day, month, and date
const day = currentDate.toLocaleString('en-US', { weekday: 'long' });
const month = months[currentDate.getMonth()];
const date = currentDate.getDate();
const dateDisplay = document.getElementById('date');
        dateDisplay.textContent = `${day}, ${month} ${date}`;
function fetchData(){
    var city=cname.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(data=>data.json())
    .then((data) => {
        if (data.cod == 404) {
          error();
        } 
        else {
          displayData(data);
        }
      });
}
function displayData(outArray){
    var cityName=outArray.name
    var temperature=Math.round(outArray.main.temp-273)
    var descri=outArray.weather[0].description.charAt(0).toUpperCase() + outArray.weather[0].description.slice(1);
    var max_temp=Math.round(outArray.main.temp_max-273)
    var min_temp=Math.floor(outArray.main.temp_min-273)
    var feels_like=Math.floor(outArray.main.feels_like-273)
    var pressure=outArray.main.pressure+' mb'
    var humidity=outArray.main.humidity+' g/kg'
    var visibility=Math.round(outArray.visibility * 0.000621371)
    var speed=outArray.wind.speed+' km/h'
    var sea_level=outArray.main.sea_level+' mb'
    var icon=outArray.weather[0].icon


    var sun_rise=outArray.sys.sunrise
    var sunriseDate = new Date(sun_rise * 1000);

    // Get the components of the date (hours, minutes, seconds)
    var hours = sunriseDate.getHours();
    var minutes = sunriseDate.getMinutes();
    
    // Format the components to ensure they have leading zeros if needed
    var formattedHours = (hours < 10 ? '0' : '') + hours;
    var formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    
    // Create a string representation of the time
    var formattedTime = formattedHours + ':' + formattedMinutes;
    var sun_set=outArray.sys.sunset

    var sunsetDatee = new Date(sun_set * 1000);

// Get the components of the date (hours, minutes, seconds)
    var hourss = sunsetDatee.getHours();
    var minutess = sunsetDatee.getMinutes();

    // Format the components to ensure they have leading zeros if needed
    var formattedHourss = (hourss < 10 ? '0' : '') + hourss;
    var formattedMinutess = (minutess < 10 ? '0' : '') + minutess;

    // Create a string representation of the time
    var formattedTimee = formattedHourss + ':' + formattedMinutess;



    ciname.innerHTML=cityName
    temp.innerHTML = `<p>${temperature}°C</p>`;  
    desc.innerHTML=descri
    max.innerHTML=max_temp+'°C'+'/'+min_temp+'°C'
    feels.innerHTML='Feels like:'+feels_like+'°C'
    i3.innerHTML=formattedTime+' AM'
    i4.innerHTML=formattedTimee+' PM'
    pre.innerHTML=pressure
    hum.innerHTML=humidity
    spe.innerHTML=speed
    vis.innerHTML=visibility+" mi"
    sea.innerHTML=sea_level
    document.querySelector(
        ".icon"
      ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
function error(){
    ciname.innerHTML="--"
    temp.innerHTML="--°C"
    desc.innerHTML="--"
    max.innerHTML="--"+'°C'+'/'+"--"+'°C'
    feels.innerHTML='Feels like: --'
    i3.innerHTML='-:-:-- AM'
    i4.innerHTML='-:-:-- PM'
    pre.innerHTML='---'
    hum.innerHTML='---'
    spe.innerHTML='---'
    vis.innerHTML='---'
    sea.innerHTML='---'


}