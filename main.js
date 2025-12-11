// 1. <-- Main Selectors -->
let searchInput = document.getElementById("search-input"),
    searchBtn = document.getElementById("search-btn"),
    temp = document.getElementById("temp"),
    city = document.getElementById("city"),
    condition = document.getElementById("condition"),
    humidity = document.getElementById("humidity"),
    wind = document.getElementById("wind"),
    themeBtn = document.getElementById("theme-icon");

// 2. <-- Start Variables -->
let theme = "light";

// 3. <-- Functions -->

const getData = async (city) => {
    // Fetch Data
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25c66ab9631c6269c272a585437cc3ff&units=metric`
    );
    const data = await res.json();

    // Set Data in the page
    temp.innerHTML = `${data.main.temp}°C`;
    city.innerHTML = data.name;
    condition.innerHTML = data.weather[0].description;
    humidity.innerHTML = data.main.humidity;
    wind.innerHTML = data.wind.speed;
};

const handleTheme = () => {
    let rootElement = document.documentElement;

    if (theme == "light") {
        rootElement.style.setProperty("--main-container-color", "#d9d9d980");
        rootElement.style.setProperty(
            "--secondary-container-color",
            "#0000004d"
        );
        rootElement.style.setProperty("--text-color", "#000");

        theme = "dark";
    } else {
        rootElement.style.setProperty("--main-container-color", "#0000004d");
        rootElement.style.setProperty(
            "--secondary-container-color",
            "#d9d9d980"
        );
        rootElement.style.setProperty("--text-color", "#fff");

        theme = "light";
    }
};

// 4. <-- Start Program -->

searchBtn.addEventListener("click", () => {
    let city = searchInput.value.trim();

    getData(city);

    // Empty the input
    searchInput.value = "";
});

themeBtn.addEventListener("click", handleTheme);
