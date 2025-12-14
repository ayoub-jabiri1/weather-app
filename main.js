// 1. <-- Main Selectors -->
let searchInput = document.getElementById("search-input"),
    searchBtn = document.getElementById("search-btn"),
    appBody = document.querySelector(".body"),
    themeBtn = document.getElementById("theme-icon");

// 2. <-- Start Variables -->
let theme = "light";

// 3. <-- Functions -->

const getData = async (city) => {
    // Fetch Data
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25c66ab9631c6269c272a585437cc3ff&units=metric`
    );

    // Handle 404 error
    if (!res.ok) {
        appBody.innerHTML = `
            <div id="error-msg">
                <h2>City not found!</h2>
            </div>
        `;

        return;
    }

    const data = await res.json();

    // Set app background image
    handleAppBackground(city);

    // Set data in the page
    appBody.innerHTML = `
        <h2 id="temp">${data.main.temp}°C</h2>
        <span id="city">${data.name}</span>
        <span id="condition">${data.weather[0].description}</span>
        <img id="condition-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
        <div class="wind-and-humidity">
            <div class="humidity-box">
                <i class="ri-water-percent-line icon"></i>
                <div class="info">
                    <span id="humidity">${data.main.humidity}%</span>
                    <span>Humidity</span>
                </div>
            </div>
            <div class="wind-box">
                <i class="ri-windy-fill icon"></i>
                <div class="info">
                    <span id="wind">${data.wind.speed} Km/h</span>
                    <span>Wind</span>
                </div>
            </div>
        </div>

    `;
};

const handleAppBackground = async (query) => {
    const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=_Ah4AchsiC5I3Ld-w0xM9D6ZixG_fW0ud2xmfr19imI`
    );

    const data = await res.json();

    // Set the fetched image as the background image
    document.getElementById(
        "app"
    ).style.backgroundImage = `url("${data.results[0].urls.regular}")`;
};

const handleTheme = () => {
    let rootElement = document.documentElement,
        logo = document.querySelector(".logo img");

    // Toggle the global css variables
    if (theme == "light") {
        rootElement.style.setProperty("--main-container-color", "#d9d9d980");
        rootElement.style.setProperty(
            "--secondary-container-color",
            "#0000004d"
        );
        rootElement.style.setProperty("--text-color", "#000");

        logo.src = "./imgs/dark-logo.png";

        theme = "dark";
    } else {
        rootElement.style.setProperty("--main-container-color", "#0000004d");
        rootElement.style.setProperty(
            "--secondary-container-color",
            "#d9d9d980"
        );
        rootElement.style.setProperty("--text-color", "#fff");

        logo.src = "./imgs/light-logo.png";

        theme = "light";
    }
};

// 4. <-- Start Program -->

searchBtn.addEventListener("click", () => {
    let city = searchInput.value.trim();

    if (city != "") {
        getData(city);

        // Empty the input
        searchInput.value = "";
    }
});

themeBtn.addEventListener("click", handleTheme);
