import nouislider from "nouislider";

const priceSlider = document.querySelector(".catalog__filter-price-controls");

nouislider.create(priceSlider, {
    start: [5000, 18000],
    connect: true,
    range: {
        "min": 0,
        "max": 30500
    }
});

const inputNumberStart = document.querySelector(".catalog__filter-price-input--start");
const inputNumberEnd = document.querySelector(".catalog__filter-price-input--end");

priceSlider.noUiSlider.on("update", function (values, handle) {
    let value = values[handle];

    if (handle) {
        inputNumberEnd.value = Math.round(value);
    } else {
        inputNumberStart.value = Math.round(value);
    }
});

inputNumberStart.addEventListener("change", function () {
    priceSlider.noUiSlider.set([this.value, null]);
});

inputNumberEnd.addEventListener("change", function () {
    priceSlider.noUiSlider.set([null, this.value]);
});