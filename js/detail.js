
//OpenWeatherMap API

const weatherIconEl = document.querySelector(".weatherIcon")
const weatherDescEl = document.querySelector(".weatherDesc")
const dateEl = document.querySelector(".page__header__profile .date")
const logoutBtn = document.querySelector(".page__header__button")
const photoDialog = document.querySelector(".page__dialog")
const widgetPhoto = document.querySelector(".page__body__widget.photo")
const closeBtn = document.querySelector(".section-left__header__button.red")

dateEl.textContent = dayjs(new Date()).format("YYYY-MM-DD")

const getWeather = async () => {
    const API_KEY = '284bfdeb630520653864189833ba7c68'
    const lat = 37.5683
    const lon = 126.9778

    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        console.log(res)

        const weatherIcon = res.data.weather[0].icon
        weatherIconEl.src = `./assets/images/${weatherIcon}.png`
        weatherDescEl.textContent = res.data.weather[0].description
    } catch(error) {console.log(error)}
}
getWeather()

const back = () => {
    location.href = "index.html"
}

widgetPhoto.addEventListener("click", () => {
    photoDialog.classList.add("active")
})
closeBtn.addEventListener("click", () => {
    photoDialog.classList.remove("active")
})