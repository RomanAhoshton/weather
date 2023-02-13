const param={
    url: "https://api.openweathermap.org/data/2.5/",
    appid: "f7ce623dcca401335f843af12beb661e", //my_key
    
};

const cities = {
    'kyiv,ua': "KYIV",
    'uzhhorod,ua': "UZHHOROD",
    'nova kakhovka,ua': "NOVA KAKHOVKA",
  
}

function createSelector() {

    let select = document.createElement('select');
    select.id = 'city';
    for (let key in cities) {
        let option = document.createElement('option');
        option.value = key;
        option.textContent = cities[key];
        select.append(option);
        
        
       
    }
     document.querySelector('.select12').append(select);
    
   
}



createSelector();






function getWeather(){
    const cityName = document.querySelector('select').value;
  
    fetch(`${param.url}weather?q=${cityName}&units=metric&APPID=${param.appid}`)
    .then(weather=>{
        return weather.json();
    }).then(showWeather);
}

getWeather();

function showWeather(data){
    
      document.querySelector('.temperature').innerHTML = Math.round(data.main.temp)+'&deg';
      document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.description').textContent = data.weather[0]['description'];
      document.querySelector('.direction_of_the_wind').innerHTML = `Wind ${data.wind.deg} `;
      document.querySelector('.wind_speed').innerHTML = ` Wind speed ${data.wind.speed} m/s`;
      document.querySelector('.pressure').innerHTML = ` Pressure ${data.main.pressure} millibars`;
};




getWeather();



 
 
 document.querySelector('select').onchange = getWeather;



 





 
