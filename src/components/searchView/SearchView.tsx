import React from "react";

//Component imports
import ItemTile from "../itemTile/ItemTile.tsx";
import TrackedItemTile from "../trackedItemTile/TrackedItemTile.tsx";

//Asset Imports
import { database as Database } from "../../assets/database.js";

import TrackerViewIcon from "../../assets/icons/tracker-view.svg";


interface SearchViewProps {
    searchTerm: string;
    trackedIDList: string[];
    onViewChange: (view: string) => void;
    onTrackToggle: (itemID: string) => void;
    onCollectToggle: (itemID: string) => void;
    serveTrackedIcon: (itemID: string) => string;
    serveCollectedIcon: (itemID: string) => string;
    filterOptions: string[];
}

const SearchView = ({
    searchTerm,
    trackedIDList,
    onViewChange,
    onTrackToggle,
    onCollectToggle,
    serveTrackedIcon,
    serveCollectedIcon,
    filterOptions
}: SearchViewProps) => {
    const handleChangeView = () => {
        onViewChange("track");
    };

    //Loops through Database and returns a list of ItemTile Components with filter options and search term applied
    const serveItemList = () => {
        const itemList = Database.map((item) => {
            return (
                <ItemTile
                    key={item.id}
                    id={item.id.toString()}
                    itemName={item.name}
                    itemImage={item.image}
                    itemCategory={item.category}
                    serveTrackedIcon={serveTrackedIcon}
                    serveCollectedIcon={serveCollectedIcon}
                    onTrackToggle={onTrackToggle}
                    onCollectToggle={onCollectToggle}
                />
            );
        });
        return filterOptions.length === 0 ? itemList.filter((item) => item.props.itemName.toLowerCase().includes(searchTerm.toLowerCase())) : itemList.filter((item) => item.props.itemName.toLowerCase().includes(searchTerm.toLowerCase()) && filterOptions.includes(item.props.itemCategory.toLowerCase()))
    };

    //Loops through database and serves a list of trackedItemTile components where the item id exists within the trackedIDList
    const serveTrackedItemList = () => {
        const trackedItemList = Database.filter((item) => trackedIDList.includes(item.id.toString())).map((item) => {
            return (
                <TrackedItemTile
                    key={item.id}
                    id={item.id.toString()}
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
