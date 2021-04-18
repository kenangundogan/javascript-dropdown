/*!
 * Javascript Dropdown 1.0.0
 * Copyright 2021 Kenan Gündoğan
 * Released under the MIT License
 */


const Dropdown = function () {
    const dropdownContainers = document.querySelectorAll(".dropdown-container");

    dropdownContainers.forEach(container => {
        let dropdownBtn = container.querySelector(".dropdown-btn"),
            dropdownList = container.querySelector(".dropdown-list"),
            dataPosition = dropdownList.getAttribute("data-position");
        if (dataPosition == "" || dataPosition == null) { dataPosition = "bottom" }
        const selector = {
            dropdownContainers,
            dropdownBtn,
            dropdownList,
            dataPosition
        };
        btnEventFunc(selector);
    });

    function btnEventFunc(selector) {
        selector.dropdownBtn.addEventListener("click", () => {
            resetItemFunc(selector);
            selector.dropdownList.classList.add("show", selector.dataPosition);
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape" || event.key === "Esc") {
                resetItemFunc(selector);
            }
        });
    }


    function resetItemFunc(selector) {
        selector.dropdownContainers.forEach(container => {
            let containerList = container.querySelector(".dropdown-list");
            let dataPosition = container.getAttribute("data-position");
            containerList.classList.remove("show", dataPosition);
        });
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    Dropdown();
})