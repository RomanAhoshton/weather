const param={
    url: "https://api.openweathermap.org/data/2.5/",
    appid: "f7ce623dcca401335f843af12beb661e", //my_key
    
};


function getWeather(){
    const Kiev=document.querySelector('#city1').value;
    fetch(`${param.url}weather?id=703448&units=metric&APPID=${param.appid}`)
    .then(weather=>{
        return weather.json();
    }).then(showWeather);
}

function showWeather(data){
    console.log(data);
      document.querySelector('.temperature').innerHTML = Math.round(data.main.temp)+'&deg';
      document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.description').textContent = data.weather[0]['description'];
      document.querySelector('.direction_of_the_wind').innerHTML = `Wind ${data.wind.deg} `;
      document.querySelector('.wind_speed').innerHTML = ` Wind speed ${data.wind.speed} m/s`;
      document.querySelector('.pressure').innerHTML = ` Pressure ${data.main.pressure} millibars`;
      document.querySelector('.select').innerHTML=data.name;
}


 getWeather();

