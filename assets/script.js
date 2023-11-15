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
};

function CityData(lat, lon) {
var apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  fetch(apiUrl).then(function (res) {
    return res.json();
  })
  // .then(function(data) {
  //   console.log(data);
  // })
  .then(data => {
    console.log(data)

    const tempEl = document.createElement("li");
    tempEl.textContent = ("temp: " + data.list[0].main.temp);
    document.body.appendChild(tempEl);

    const humidityEl = document.createElement("li");
    humidityEl.textContent = ("humidity: " + data.list[0].main.humidity);
    document.body.appendChild(humidityEl);

    const tMaxEl = document.createElement("li");
    tMaxEl.textContent = ("temp max: " + data.list[0].main.temp_max);
    document.body.appendChild(tMaxEl);

    const tMinEl = document.createElement("li");
    tMinEl.textContent = ("temp min: " + data.list[0].main.temp_min);
    document.body.appendChild(tMinEl);

    const feelsEl = document.createElement("li");
    feelsEl.textContent = ("feels like: " + data.list[0].main.feels_like);
    document.body.appendChild(feelsEl);

    const cloudsE1 = document.createElement("li");
    cloudsE1.textContent = (data.list[0].weather[0].description);
    document.body.appendChild(cloudsE1);

    // const cloudsIcon = document.createElement("li");
    // cloudsIcon.textContent = (data.list[0].weather[0].icon);
    // document.body.appendChild(cloudsIcon);
  })  
};

//display the data once the user searches

//store history to local storage

//base url: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}