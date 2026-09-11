let filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px"
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    }
};

const imageCanvas = document.querySelector("#image-canvas");
const imageInput = document.querySelector("#image-input");
const canvasCtx = imageCanvas.getContext("2d");
const resetButton = document.querySelector("#reset-btn");
const downloadButton = document.querySelector("#download-btn");
const presetsContainer = document.querySelector(".presets");

let file = null;
let image = null;


const filtersContainer = document.querySelector(".filters");

const createFilterElement = (name, unit = "%", value, min, max) => {
    const div = document.createElement("div");
    div.classList.add("filter");

    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.value = value;
    input.id = name;

    const p = document.createElement("p");
    p.innerText = name;

    div.appendChild(p);
    div.appendChild(input);

    input.addEventListener("input", (e) => {
        filters[name].value = input.value;
        console.log(name, filters[name]);
        applyFilter();
    })

    return div
};

const createFilters = () => {
    Object.keys(filters).forEach(key => {
        const filterElement = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max);
        filtersContainer.appendChild(filterElement);
    })
};

createFilters();

imageInput.addEventListener("change", (e) => {
    file = e.target.files[0];
    const imagePlaceholder = document.querySelector(".placeholder");
    imageCanvas.style.display = "block";
    imagePlaceholder.style.display = "none";
    console.log(file);

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
        image = img
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        canvasCtx.drawImage(img, 0, 0);
    }


});

const applyFilter = () => {
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    canvasCtx.filter = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    
    `.trim();
    canvasCtx.drawImage(image, 0, 0);
}

resetButton.addEventListener("click", () => {
    filters = {
        brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        contrast: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        exposure: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        saturation: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        hueRotation: {
            value: 0,
            min: 0,
            max: 360,
            unit: "deg"
        },
        blur: {
            value: 100,
            min: 0,
            max: 20,
            unit: "px"
        },
        grayscale: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        sepia: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: "%"
        },
        invert: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        }
    };

    applyFilter();
    filtersContainer.innerHTML = ""
    createFilters();

});

downloadButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = imageCanvas.toDataURL();
    link.click();
});

const presets = {
    drama: {
        brightness: 92,
        contrast: 145,
        saturation: 115,
        hueRotation: 0,
        blur: 0,
        grayscale: 8,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    vintage: {
        brightness: 105,
        contrast: 88,
        saturation: 78,
        hueRotation: 350,
        blur: 3,
        grayscale: 5,
        sepia: 32,
        opacity: 100,
        invert: 0
    },

    cinema: {
        brightness: 94,
        contrast: 125,
        saturation: 88,
        hueRotation: 0,
        blur: 0,
        grayscale: 4,
        sepia: 8,
        opacity: 100,
        invert: 0
    },

    winter: {
        brightness: 108,
        contrast: 92,
        saturation: 62,
        hueRotation: 195,
        blur: 4,
        grayscale: 12,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    rainy: {
        brightness: 82,
        contrast: 108,
        saturation: 58,
        hueRotation: 205,
        blur: 8,
        grayscale: 18,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    foggy: {
        brightness: 118,
        contrast: 72,
        saturation: 48,
        hueRotation: 190,
        blur: 12,
        grayscale: 22,
        sepia: 0,
        opacity: 94,
        invert: 0
    },

    noir: {
        brightness: 92,
        contrast: 155,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    softNoir: {
        brightness: 105,
        contrast: 125,
        saturation: 5,
        hueRotation: 0,
        blur: 0,
        grayscale: 85,
        sepia: 5,
        opacity: 100,
        invert: 0
    },

    sunset: {
        brightness: 108,
        contrast: 112,
        saturation: 128,
        hueRotation: 342,
        blur: 0,
        grayscale: 0,
        sepia: 22,
        opacity: 100,
        invert: 0
    },

    warm: {
        brightness: 105,
        contrast: 105,
        saturation: 112,
        hueRotation: 8,
        blur: 0,
        grayscale: 0,
        sepia: 18,
        opacity: 100,
        invert: 0
    },

    cool: {
        brightness: 103,
        contrast: 105,
        saturation: 92,
        hueRotation: 195,
        blur: 0,
        grayscale: 4,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    vibrant: {
        brightness: 105,
        contrast: 115,
        saturation: 155,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    faded: {
        brightness: 112,
        contrast: 78,
        saturation: 68,
        hueRotation: 0,
        blur: 2,
        grayscale: 8,
        sepia: 12,
        opacity: 96,
        invert: 0
    },

    dreamy: {
        brightness: 115,
        contrast: 82,
        saturation: 105,
        hueRotation: 345,
        blur: 15,
        grayscale: 0,
        sepia: 8,
        opacity: 96,
        invert: 0
    },

    retro: {
        brightness: 108,
        contrast: 92,
        saturation: 85,
        hueRotation: 355,
        blur: 0,
        grayscale: 4,
        sepia: 38,
        opacity: 100,
        invert: 0
    },

    arctic: {
        brightness: 112,
        contrast: 108,
        saturation: 68,
        hueRotation: 185,
        blur: 0,
        grayscale: 10,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    goldenHour: {
        brightness: 110,
        contrast: 108,
        saturation: 125,
        hueRotation: 12,
        blur: 0,
        grayscale: 0,
        sepia: 28,
        opacity: 100,
        invert: 0
    },

    moody: {
        brightness: 78,
        contrast: 132,
        saturation: 72,
        hueRotation: 205,
        blur: 0,
        grayscale: 12,
        sepia: 4,
        opacity: 100,
        invert: 0
    },

    soft: {
        brightness: 112,
        contrast: 82,
        saturation: 92,
        hueRotation: 0,
        blur: 7,
        grayscale: 0,
        sepia: 5,
        opacity: 98,
        invert: 0
    },

    bleach: {
        brightness: 108,
        contrast: 138,
        saturation: 38,
        hueRotation: 0,
        blur: 0,
        grayscale: 18,
        sepia: 3,
        opacity: 100,
        invert: 0
    },

    dusty: {
        brightness: 106,
        contrast: 84,
        saturation: 62,
        hueRotation: 8,
        blur: 2,
        grayscale: 12,
        sepia: 25,
        opacity: 98,
        invert: 0
    },

    polaroid: {
        brightness: 112,
        contrast: 92,
        saturation: 92,
        hueRotation: 355,
        blur: 0,
        grayscale: 3,
        sepia: 20,
        opacity: 100,
        invert: 0
    },

    deepBlue: {
        brightness: 88,
        contrast: 125,
        saturation: 85,
        hueRotation: 215,
        blur: 0,
        grayscale: 8,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    rose: {
        brightness: 108,
        contrast: 102,
        saturation: 112,
        hueRotation: 330,
        blur: 0,
        grayscale: 0,
        sepia: 12,
        opacity: 100,
        invert: 0
    },

    forest: {
        brightness: 92,
        contrast: 118,
        saturation: 118,
        hueRotation: 85,
        blur: 0,
        grayscale: 4,
        sepia: 8,
        opacity: 100,
        invert: 0
    },

    midnight: {
        brightness: 68,
        contrast: 142,
        saturation: 78,
        hueRotation: 225,
        blur: 0,
        grayscale: 12,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    film: {
        brightness: 98,
        contrast: 118,
        saturation: 82,
        hueRotation: 355,
        blur: 0,
        grayscale: 5,
        sepia: 14,
        opacity: 100,
        invert: 0
    }
};



Object.keys(presets).forEach(
    presetName => {
        const presetButton = document.createElement("button");
        presetButton.classList.add("btn");
        presetButton.innerText = presetName;
        presetsContainer.appendChild(presetButton);

        presetButton.addEventListener("click", () => {
            const preset = presets[presetName];
            // console.log(preset)
            Object.keys(preset).forEach(filterName => {
                filters[filterName].value = preset[filterName]
            });
            applyFilter();
            filtersContainer.innerHTML = "";
            createFilters();
        });
    }
);