var searchInput = $("#searchInput");
var searchBtn = $("#searchBtn");
var fiveDayForcast = $("#fiveDayForcast");


function findCity(city){
  var geocode = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&units=imperial&appid=644a309709552dabb2b7758d92fb6096`;
  fetch(geocode)
    .then(function (unzip){
      return unzip.json();
    })
    .then(function (data){
      console.log(data);

      var latitude = data[0].lat
      var longitude = data[0].lon
      console.log(latitude);
      console.log(longitude);

      var weather = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=644a309709552dabb2b7758d92fb6096`
      fetch(weather)
        .then(function (unzip){
          return unzip.json();
        })
        .then(function (weatherData){
          console.log(weatherData)

          var city = weatherData.city.name
          console.log(city)
          
          var daysData = weatherData.list
          console.log(daysData)

          fiveDayForcast.empty();

          for (i = 5; i < 40; i+=8){
            var dayFeel = daysData[i].main.feels_like;
            console.log(dayFeel);
            var dayTemp = daysData[i].main.temp;
            console.log(dayTemp);
            var dayWeather = daysData[i].weather[0].description
            console.log(dayWeather)
            var weathericon = daysData[i].weather[0].icon

            // var weatherIconURL = "https://openweathermap.org/img/wn/10d@2x.png"
            
            const today = $(`
              <div class="col w-card">
                  <img src="https://openweathermap.org/img/wn/${weathericon}@2x.png" alt="${dayWeather}" />
                  <p>Temp: ${dayTemp}F</p>
                  <p>Feels:${dayFeel}</p>
                  <p>${dayWeather}</p>
              </div>
            `)

            fiveDayForcast.append(today);
          }        
        })
    })
};

$(document).ready(function () {
  $("#searchBtn").click(function () {
    findCity (searchInput.val());
    $("#searchInput").empty();
  })
});



// we have weatherData! now what?












