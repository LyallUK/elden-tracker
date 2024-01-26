import React, { useState } from "react";

import Collapse from "../../assets/icons/arrow-up.svg";
import Uncollapse from "../../assets/icons/arrow-down.svg";
import ClearFilter from "../../assets/icons/clearFilter.png";

function Modal({
    type,
    updateFilterOptions,
    filterOptions,
    clearFilterOptions
}) {
    const [collapsedCategories, toggleCollapsed] = useState([]);

    const updateCollapsed = (category) => {
        collapsedCategories.includes(category)
            ? toggleCollapsed(collapsedCategories.filter((term) => term != category))
            : toggleCollapsed([...collapsedCategories, category]);
    };

    const handleFilterUpdate = (type) => {
        updateFilterOptions(type);
    };

    const handleFilterOptions = () => {
        clearFilterOptions();
    }

    const serveCollapseImages = (category) => {
        return collapsedCategories.includes(category) ? Uncollapse : Collapse;
    };

    const typeList = {
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

    const serveCategory = (category) => {
        return collapsedCategories.includes(category) ? [] : typeList[category];
    };

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
                    <div className="clear-filter-wrapper">
                        <img className="clear-filter-img" src={ClearFilter} onClick={handleFilterOptions} />
                    </div>
                    {Object.keys(typeList).map((category) => (
                        <div className="filter-content">
                            <div className="filter-header-wrapper" onClick={() => updateCollapsed(category)}>
                                <span className="filter-title">{category}</span>
                                <img src={serveCollapseImages(category)} className="filter-collapse" alt="collapse" />
                            </div>
                            <div className="filter-group">
                                {serveCategory(category).map((type) =>
                                    filterOptions.includes(type) ? (
                                        <span className="filter-type" onClick={() => handleFilterUpdate(type)}>
                                            <s>{type}</s>
                                        </span>
                                    ) : (
                                        <span
                                            className="filter-type"
                                            onClick={() => handleFilterUpdate(type)}
                                            style={{ color: "rgba(255, 255, 255, 0.2)" }}
                                        >
                                            {type}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Modal;
