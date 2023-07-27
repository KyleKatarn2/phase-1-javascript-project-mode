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