var searchInput = $("#searchInput");
var searchBtn = $("#searchBtn");


function findCity(city){
  var geocode = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=644a309709552dabb2b7758d92fb6096`;
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

      var weather = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=644a309709552dabb2b7758d92fb6096`
      fetch(weather)
        .then(function (unzip){
          return unzip.json();
        })
        .then(function (weatherData){
          console.log(weatherData)
        })
    })
};

$(document).ready(function () {
  $("#searchBtn").click(function () {
    findCity (searchInput.val());
    $("#searchInput").empty();
  })
});





// /*
//   There are a bunch of ways of doing multiple asynchronous requests. Here are two of them. None is better than the other. Choose whichever you feel most comfortable with.

//   #1: Nested anonymous functions.
//   Example:
// */

// fetch("some-url-here")
// .then( function(response){
//   return response.json()
// })
// .then( function(data){
//   // here you can take the data you receive and send any part of it to the next then() block.
//   const coolData = data.stuff
//   return coolData
// })
// .then( function(coolDataFromAbove){
//   // use the coolDataFromAbove for the next fetch call
//   fetch("url-from-cooldata")
//   .then( function(response){
//     return response.json()
//   })
//   .then( function(finalData){
//     // Here is your final data!!
//   })
// })


// /*
//   Example 2: Using async/await
// */

// async function getAllTheData(){
//   const resp1 = await fetch("url-1");
//   const data1 = await resp1.json()

//   // data1 gives is all the prelim stuff, which we can use to 
//   // compose the next fetch call
//   const resp2 = await fetch("url-2");
//   const data2 = await resp2.json()

//   // data2 is the final data we need to populate the page
// }