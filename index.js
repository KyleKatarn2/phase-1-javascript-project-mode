const init = () => {
    const form = document.querySelector("#Ace-form");
    const list = document.querySelector("#aircraft-list");
    const info = document.querySelector("#info-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#search");
        list.innerHTML = "";
        info.innerHTML = "";
    });
};