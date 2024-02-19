function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");

  h1.innerHTML = searchInput.value;

  function displayCurrentTemperature(response) {
    let currentTemp = Math.round(response.data.temperature.current);
    let temperature = document.querySelector(".current-temp-value");
    temperature.innerHTML = currentTemp;
  }
  let city = h1.innerHTML;
  let apiKey = "a3o9d7df3bbf08311320b1800bt42c25";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentTemperature);
}

let form = document.querySelector("#search-form-submit");
form.addEventListener("submit", search);

let now = new Date();

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let weekDay = weekDays[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let dayTime = `${weekDay} ${hour}:${minutes}`;

let span = document.querySelector(".current-date");
span.innerHTML = dayTime;
