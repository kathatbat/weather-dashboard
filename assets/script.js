document.querySelector("#search-btn").addEventListener("click", searchBar);
var input = document.querySelector("#search-bar");
var apiKey= "4aee353faba376690d272b6e38587e4e";
function searchBar() {
   console.log(input.value);
var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=1&appid=${apiKey}`;
    fetch(apiUrl
      ).then(function (res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        console.log(data[0].lat)
        console.log(data[0].lon)
      CityData(data[0].lat, data[0].lon);
    })
    .then(data => {
      const weatherData = `<li>${data.list.main}</li>`
      document.getElementsByClassName("forecast").insert('beforeend', weatherData);
    });

};

function CityData(lat, lon) {
var apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(apiUrl).then(function (res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
  })
}

//display the data once the user searches

//store history to local storage

//base url: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}