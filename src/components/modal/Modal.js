import React from "react";

import ArrowUp from "../../assets/icons/arrow-up.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";

function Modal({ 
    type,
    updateFilterOptions
}) {

    const handleFilterUpdate = (option) => {
        updateFilterOptions(option);
    }

    const filterList = {
        weapons: [
            "axes",
            "ballista",
            "bows",
            "claws",
            "colossal swords",
            "colossal weapons",
            "crossbows",
            "curved greatswords",
            "curved swords",
            "daggers",
            "flails",
            "glintstone staffs",
            "greataxes",
            "great spears",
            "greatbows",
            "great hammers",
            "greatswords",
            "halberds",
            "hammers",
            "heavy thrusting swords",
            "katanas",
            "light bows",
            "reapers",
            "sacred seals",
            "spears",
            "straight swords",
            "thrusting swords",
            "torches",
            "twinblades",
            "whips",
        ],
        equipment: ["head", "chest", "arms", "legs", "Talismans"],
        spells: ["sorceries", "incantations"],
    };

    // const toggleCollapse = () => {
    //     let isToggled = false;

    //     const collapseImage = document.getElementsByClassName("filterCollapse");
    //     const collapseDiv = document.getElementsByClassName("filterGroup");

    //     if (isToggled) {
    //         collapseDiv.style.height = "fit-content";
    //         collapseImage.src = ArrowUp;
    //         isToggled = !isToggled;
    //     } else {
    //         collapseDiv.style.height = "0";
    //         collapseImage.src = ArrowDown;
    //         isToggled = !isToggled;
    //     }
    // };

    return (
        <div className="modal-wrapper">
            {type === "help" ? (
                <div className="help-modal-wrapper">
                    <div className="help-content">
                        <span className="help-header">How to use this app</span>
                        <span className="help-title">Tracking an Item:</span>
                        <p className="help-text">
                            To add an item to your tracking list, simply locate the item on the screen. Click on the
                            "Track" button associated with the item.
                        </p>
                        <span className="help-title">Viewing Tracked Items:</span>
                        <p className="help-text">
                            Once an item is tracked, you can view it on the tracking list located on the side of the
                            screen.
                        </p>
                        <p className="help-text">
                            Click on the tracking list button to expand and see detailed information about each tracked
                            item.
                        </p>
                        <span className="help-title">Collecting an Item:</span>
                        <p className="help-text">
                            When you want to mark an item as collected, find the item on the tracking list and click on
                            the Collect button associated with the item. The item will now be marked as collected,
                            providing a visual indicator of your progress.
                        </p>
                        <span className="help-title">Additional Features:</span>
                        <p className="help-text">Customize your tracking list by applying filters.</p>
                        <p className="help-text">
                            Use the search function to quickly find specific items to add to your list.
                        </p>
                        <span className="help-title">Troubleshooting:</span>
                        <p className="help-text">Should you encounter any issues, check the Github page.</p>
                        <p className="help-text">If any information is incorrect or missing then visit the Wiki:</p>
                        <a
                            className="help-link"
                            target="_blank"
                            href="https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki"
                        >
                            Fextralife Elden Ring Wiki
                        </a>
                    </div>
                </div>
            ) : (
                <div className="filter-modal-wrapper">
                    <div className="searchFilter">
                        {Object.keys(filterList).map((category, index) => (
                            <div key={index}>
                                <div>
                                    <span className="filterTitle">{category}</span>
                                    <img
                                        className="filterCollapse"
                                        alt="collapse"
                                        // onClick={() => toggleCollapse()}
                                    ></img>
                                </div>
                                <div className="filterGroup">
                                    {filterList[category].map((item, itemIndex) => (
                                        <span className="filterType" key={itemIndex} onClick={() => handleFilterUpdate(item)}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
