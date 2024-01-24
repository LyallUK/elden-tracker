import React from "react";

//component imports
import DetailedItemTile from "../detailedTrackedItemTile/DetailedItemTile.js";

//Asset Imports
import { database as Database } from "../../assets/database.js";
import SearchViewIcon from "../../assets/icons/search-view.svg";

function TrackerView({
    trackedIDList,
    onViewChange,
    onTrackToggle,
    onCollectToggle,
    serveTrackedIcon,
    serveCollectedIcon,
}) {
    const handleChangeView = () => {
        onViewChange("search");
    };

    const serveDetailedItemList = () => {
        // if (trackedIDList.length === 0) {
        //     return <div className="empty-tracking-view-message">TRACK ITEMS TO BEGIN</div>;
        // }
        const DetailedItemList = Database.filter((item) => trackedIDList.includes(item.id)).map((item) => {
            return (
                <DetailedItemTile
                    key={item.id}
                    id={item.id}
                    itemName={item.name}
                    itemImage={item.image}
                    itemCategory={item.category}
                    itemLocation={item.location}
                    serveTrackedIcon={serveTrackedIcon}
                    serveCollectedIcon={serveCollectedIcon}
                    onTrackToggle={onTrackToggle}
                    onCollectToggle={onCollectToggle}
                />
            );
        });
        return DetailedItemList;
    };

    return (
        <div className="tracker-view-wrapper">
            <div className="search-view-button">
                <img className="search-view-button-img" src={SearchViewIcon} onClick={handleChangeView} alt="search" />
            </div>
            <div className="detailed-item-list">{serveDetailedItemList()}</div>
        </div>
    );
}

export default TrackerView;
