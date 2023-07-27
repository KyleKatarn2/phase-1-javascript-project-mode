function renderAircraft(aircraftData) {
    let list = document.getElementById("aircraft-list");
    let card = document.createElement('li');
    card.className = 'card'
    card.innerHTML = `<h2> ${aircraftData.designation}</h2>
        <img
            src="${aircraftData.image}"
            alt="${aircraftData.name}"
        />

    
    `
}

const init = () => {
    const form = document.querySelector("#Ace-form");
    const list = document.querySelector("#aircraft-list");
    const info = document.querySelector("#info-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#search");
        list.innerHTML = "";
        info.innerHTML = "";

        fetch(`http://localhost:3000/Aircraft/${input.value}`)
            .then((response) => response.json())
            .then((data) => renderAircraft(data));
    });
};

document.addEventListener("DOMContentLoaded", init);