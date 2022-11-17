const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

const items = database;
updateList(items);
// collectProgress();

const trackedItems = [];

function init() {
    searchItems(""); // Generate filter

    closeBtn.addEventListener("click", () => {
        ipc.send("closeApp");
    });

    minimizeBtn.addEventListener("click", () => {
        ipc.send("minApp");
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            incrementPage();
            updateOverlay();
        }
    });

    const dropDownItem = document.querySelectorAll(".dropdown-content > span");

    dropDownItem.forEach((item) => {
        item.addEventListener("click", () => {
            searchItems(item.innerText, "category");
            console.log(item.innerText);
        });
    });
}

function searchItems(searchValue, filter) {
    let input = document.querySelector("#search");
    searchValue = searchValue || input.value;

    if (filter === "category") {
        searchResult = items.filter((item) => simpleString(item.category) === simpleString(searchValue));
        updateList(searchResult);
    } else {
        searchResult = items.filter((item) => simpleString(item.name).includes(simpleString(searchValue)));
        updateList(searchResult);
    }

    return searchResult;
}

function updateList(arr) {
    const list = document.querySelector("#list");
    list.innerHTML = "";

    arr.sort(sortItemsAscending).forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("itemElement");

        const itemName = document.createElement("span");
        itemName.classList.add("itemName");
        itemName.innerText = item.name;

        const itemImage = document.createElement("img");
        itemImage.classList.add("itemImage");
        itemImage.src = item.image;

        itemElement.appendChild(itemName);
        itemElement.appendChild(itemImage);

        createTrackButton(item, itemElement);
        list.appendChild(itemElement);
    });
}

function createTrackButton(item, itemElement) {
    const trackButton = document.createElement("img");
    trackButton.src = "images/interface/plus.svg";
    trackButton.classList.add("itemButton");

    updateTrackButton(item, trackButton, itemElement);

    trackButton.addEventListener("click", function () {
        if (item.tracked) {
            item.tracked = false;
            trackedItems.splice(getItemIndex(trackedItems, item.name), 1);
            updateTrackButton(item, trackButton, itemElement);
            updateTracker();
            updateOverlay();
            console.log(`Removed ${item.name.toUpperCase()} from Tracker`);
        } else {
            item.tracked = true;
            trackedItems.push(getItemByName(items, item.name));
            updateTrackButton(item, trackButton, itemElement);
            updateTracker();
            updateOverlay();
            console.log(`Added ${item.name.toUpperCase()} to Tracker`);
        }
    });

    itemElement.appendChild(trackButton);
}

function updateTrackButton(item, trackButton, itemElement) {
    if (item.tracked) {
        trackButton.style.opacity = 1;
        itemElement.style.borderBottom = "1px solid rgb(0, 255, 0)";
    } else {
        trackButton.style.opacity = 0.05;
        itemElement.style.borderBottom = "";
    }
}

function updateTracker() {
    const tracker = document.querySelector("#tracker");
    tracker.innerHTML = "";

    if (trackedItems.length > 0) {
        tracker.style.width = "350px";
    } else {
        tracker.style.width = "0";
    }

    trackedItems.forEach((item) => {
        const trackDiv = document.createElement("div");
        trackDiv.classList.add("trackerItem");

        const itemImage = document.createElement("img");
        itemImage.classList.add("trackerImage");
        itemImage.src = item.image;

        const itemName = document.createElement("span");
        itemName.classList.add("trackerName");
        itemName.innerText = item.name;

        trackDiv.appendChild(itemImage);
        trackDiv.appendChild(itemName);
        tracker.appendChild(trackDiv);

        trackDiv.addEventListener("click", () => {
            trackedItems.splice(getItemIndex(trackedItems, item.name), 1);
            const listItem = getItemByName(items, item.name);
            listItem.tracked = false;
            updateTracker();
            updateList(searchResult);
            updateOverlay();
            console.log(`Removed ${item.name.toUpperCase()} from Tracker`);
        });
    });
}

let currentElement = 0;

function generateNewOverlayItem() {
    const activeItem = trackedItems[currentElement];

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlayDiv");

    const overlayName = document.createElement("span");
    overlayName.classList.add("itemName");
    overlayName.innerText = activeItem.name;

    const locationDiv = document.createElement("div");
    locationDiv.classList.add("overlayInfo");

    for (i of activeItem.location) {
        const location = document.createElement("p");
        location.innerText = `• ${i}`;
        locationDiv.appendChild(location);
    }

    const overlayPage = document.createElement("span");
    overlayPage.classList.add("overlayPage");
    overlayPage.innerHTML = `${currentElement + 1} / ${trackedItems.length}`;

    overlayDiv.appendChild(overlayName);
    overlayDiv.appendChild(locationDiv);
    overlayDiv.appendChild(overlayPage);

    return overlayDiv;
}

function updateOverlay() {
    document.querySelector(".overlayDiv")?.remove();

    if (currentElement > 0 && !trackedItems[currentElement]) {
        currentElement--;
    }

    if (trackedItems.length === 0) {
        return;
    }

    const trackerOverlay = document.querySelector("#trackerOverlay");
    const newOverlayDiv = generateNewOverlayItem();
    if (newOverlayDiv) {
        trackerOverlay.appendChild(newOverlayDiv);
    }
}

function incrementPage() {
    console.log(`Page ${currentElement + 1}`);
    if (currentElement >= trackedItems.length - 1) {
        currentElement = 0;
    } else {
        currentElement++;
    }
}

function getItemIndex(items, name) {
    const itemIndex = items.findIndex((item) => item.name === name);

    return itemIndex;
}

function getItemByName(items, name) {
    return items.find((item) => item.name === name);
}

function simpleString(string) {
    const newString = string.replace(/[^\w\s]|_/g, "");
    return newString.replace(/[^\w\s]|_/g, "").toLowerCase();
}

function sortItemsAscending(itemA, itemB) {
    const nameA = itemA.name.toUpperCase();
    const nameB = itemB.name.toUpperCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
}

init();

// function collectProgress() {
//     const collectDiv = document.querySelector("#collect");
//     collectDiv.innerHTML = "";

//     collectedItems = items.filter((item) => item.collected).length;
//     collectPercent = Math.round((collectedItems / items.length) * 100);

//     const progressText = document.createElement("span");
//     progressText.innerText = `Collected: ${collectedItems} / ${items.length}`;

//     const progressPercent = document.createElement("span");
//     progressPercent.classList.add("progressPercent");
//     progressPercent.innerText = `${collectPercent}%`;

//     if (collectPercent >= 0) {
//         progressPercent.style.color = "red";
//     }
//     if (collectPercent >= 30) {
//         progressPercent.style.color = "orange";
//     }
//     if (collectPercent >= 60) {
//         progressPercent.style.color = "yellow";
//     }
//     if (collectPercent >= 90) {
//         progressPercent.style.color = "green";
//     }

//     collectDiv.appendChild(progressText);
//     collectDiv.appendChild(progressPercent);
// }

// TODO:
// (?)create item pages []
// (?)add a collected button to track collected items []

// BUGS:
//
