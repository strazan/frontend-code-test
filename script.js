const cardsContainer = document.getElementById("cards-container");
const heroContainer = document.getElementById("hero");

const fetchData = () => {
    fetch("https://fa-frontend-code-test.herokuapp.com/getdata")
        .then((response) => {
            if (!response.ok) {
                throw Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            displayData(data.data);
        });
};

const displayData = (data) => {
    const { heroBanner, profiles } = data;

    profiles.forEach((profile) => {
        cardsContainer.insertAdjacentHTML(
            "beforeend",
            `
    <div class="card">
        <img src=${profile.imgUrl} alt="Picture of ${profile.firstName} ${profile.lastName}" />
        <div class="card-content">
            <h3 class="name">${profile.firstName} ${profile.lastName}</h3>
            <p class="expertise">${profile.expertise}</p>
        </div>
    </div>`
        );
    });

    heroContainer.insertAdjacentHTML(
        "afterbegin",
        `
    <video autoplay="true" muted="true" playsinline loop src=${heroBanner.videoUrl}></video>
    <div class="intro">
        <h1 class="title">${heroBanner.title}</h1>
        <p class="paragraph">${heroBanner.paragraph}</p>
    </div>`
    );
};

fetchData();
