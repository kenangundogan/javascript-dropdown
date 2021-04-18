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
            dataPosition = dropdownList.getAttribute("data-position"),
            dataHeight = dropdownList.getAttribute("data-height");
        if (dataPosition == "" || dataPosition == null) { dataPosition = "bottom" }
        if (dataHeight == "" || dataHeight == null) { dataHeight = "" }

        const selector = {
            dropdownContainers,
            dropdownBtn,
            dropdownList,
            dataPosition,
            dataHeight
        };

        eventFunc(selector);
    });

    function eventFunc(selector) {

        selector.dropdownBtn.addEventListener("click", () => {
            selector.dropdownList.classList.forEach(show => {
                if (show == "show") {
                    resetFunc(selector);
                }
                else {
                    resetFunc(selector);
                    selector.dropdownList.classList.add("show", selector.dataPosition);
                    selector.dropdownList.style.height = `${selector.dataHeight}px`;
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape" || event.key === "Esc") {
                resetFunc(selector);
            }
        });

    }

    function resetFunc(selector) {

        selector.dropdownContainers.forEach(container => {
            let containerList = container.querySelector(".dropdown-list");
            let dataPosition = containerList.getAttribute("data-position");
            containerList.classList.remove("show", dataPosition);
            containerList.style.height = "";
        });

    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    Dropdown();
})