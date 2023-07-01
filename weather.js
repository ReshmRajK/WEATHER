function setData() {
    names = cityName.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${names}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
        .then(data => data.json()).then(data => displayWeather(data))
    function displayWeather(Cdata) {
        country = Cdata.sys.country
        humidity = Cdata.main.humidity
        wind = Cdata.wind.speed
        pressure = Cdata.main.pressure
        temp = eval(Cdata.main.temp - 273.15).toFixed()
        feel = eval(Cdata.main.feels_like - 273.15).toFixed()
        city = Cdata.name
        description = Cdata.weather[0].description

        country1.innerHTML = `
        <label class="text-white">Country</label>
        <p class="text-black">${country}</p>
        `
        humidity1.innerHTML = `
        <label class="text-white">Humidity</label>
        <p class="text-black">${humidity}%</p>
        `
        wind1.innerHTML = `
        <label class="text-white">Wind</label>
        <p class="text-black">${wind} kmph</p>
        `
        pressure1.innerHTML = `
        <label class="text-white">Pressure</label>
        <p class="text-black">${pressure}</p>
        `
        temp1.innerHTML = `
            <label style="font-size:25px;font-style: bold; font-weight: 500;" >${temp}℃,<span style="font-size:11px">${description}</span></label>
            <p style="font-size:12px" >feels like ${feel}℃</p>
            `
        cName.innerHTML = `
            <h4 style="font-weight: 400;" >${city}</h4>
            <p style="font-size:13px" >${Date()}</p>
            `
    }
}
function refresh() {
    cityName.value = ""
    country1.innerHTML = '<p class="text-white">Country</p>'
    humidity1.innerHTML = '<p class=" text-white">Humidity</p>'
    wind1.innerHTML = '<p class=" text-white">Wind</p>'
    pressure1.innerHTML = '<p class=" text-white">Pressure</p>'
    temp1.innerHTML = '<label class="fs-6"">Temperature</label>'
    cName.innerHTML = '<h5>City Name</h5>'
}