import React from "react";

//Component imports
import ItemTile from "../itemTile/ItemTile.js";
import TrackedItemTile from "../trackedItemTile/TrackedItemTile.js";

//Asset Imports
import { database as Database } from "../../assets/database.js";

import TrackerViewIcon from "../../assets/icons/tracker-view.svg";

function SearchView({
    searchTerm,
    trackedIDList,
    onViewChange,
    onTrackToggle,
    onCollectToggle,
    serveTrackedIcon,
    serveCollectedIcon,
}) {
    const handleChangeView = () => {
        onViewChange("track");
    };

    //serve entire db as list of ItemTile components
    const serveItemList = () => {
        const itemList = Database.map((item) => {
            return (
                <ItemTile
                    key={item.id}
                    id={item.id}
                    itemName={item.name}
                    itemImage={item.image}
                    serveTrackedIcon={serveTrackedIcon}
                    serveCollectedIcon={serveCollectedIcon}
                    onTrackToggle={onTrackToggle}
                    onCollectToggle={onCollectToggle}
                />
            );
        });

        return itemList.filter((item) => item.props.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    //serve trackedItemTile list of items where item ids match trackedIDList
    const serveTrackedItemList = () => {
        const trackedItemList = Database.filter((item) => trackedIDList.includes(item.id)).map((item) => {
            return (
                <TrackedItemTile
                    key={item.id}
                    id={item.id}
                    itemName={item.name}
                    itemImage={item.image}
                    serveTrackedIcon={serveTrackedIcon}
                    serveCollectedIcon={serveCollectedIcon}
                    onTrackToggle={onTrackToggle}
                    onCollectToggle={onCollectToggle}
                />
            );
        });
        return trackedItemList;
    };

    return (
        <div className="search-view-wrapper">
            <div className="search-view-tracked-wrapper">
                {trackedIDList.length > 0 ? (
                    <div className="tracking-view-button">
                        <img
                            className="tracking-view-button-img"
                            src={TrackerViewIcon}
                            onClick={handleChangeView}
                            alt="track"
                        />
                    </div>
                ) : (
                    ""
                )}
                <div className="track-list">
                    <div>{serveTrackedItemList()}</div>
                </div>
            </div>
            <div className="item-list">{serveItemList()}</div>
        </div>
    );
}

export default SearchView;
