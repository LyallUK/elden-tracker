import React from "react";

//component imports
import DetailedItemTile from "../detailedTrackedItemTile/DetailedItemTile.js";

//Asset Imports
import {database as Database} from '../../assets/database.js';
import TrackIcon from '../../assets/icons/trackButton.svg';
import UntrackIcon from '../../assets/icons/untrackButton.svg';
import CollectIcon from '../../assets/icons/collectButton.svg';
import UncollectIcon from '../../assets/icons/uncollectButton.svg';


function TrackerView(props) {

    const idIsTracked = (itemID) => {
        return props.trackedIDList.includes(itemID);
    }

    const idIsCollected = (itemID) => {
        return props.collectedIDList.includes(itemID);
    }

    const serveTrackedIcon = (itemID) => {
        return idIsTracked(itemID) ? UntrackIcon : TrackIcon;
    }

    const serveCollectedIcon = (itemID) => {
        return idIsCollected(itemID) ? UncollectIcon : CollectIcon;
    }

    const handleChangeView = () => {
        props.serveViewCallBack('search');
    }

    const serveDetailedItemList = () => {
        const DetailedItemList = Database.filter((item) => props.trackedIDList.includes(item.id)).map((item) =>{
            return <DetailedItemTile
                key = {item.id}
                id = {item.id}
                itemName = {item.name}
                itemImage = {item.image}
                itemCategory = {item.category}
                itemLocation = {item.location}
                trackedIDList = {props.trackedIDList}
                addTrackedID = {props.addTrackedID}
                removeTrackedID = {props.removeTrackedID}
                collectedIDList = {props.collectedIDList}
                addCollectedID = {props.addCollectedID}
                removeCollectedID = {props.removeCollectedID}
                serveTrackedIcon = {serveTrackedIcon}
                serveCollectedIcon = {serveCollectedIcon}
            />
        })
        return DetailedItemList;
    }

    return(
        <div className="tracker-view-wrapper">
            <div className="detailed-item-list">
                {serveDetailedItemList()}
            </div>
            <div className="search-view-button" onClick={handleChangeView}>
                <a>View Search</a>
            </div>
        </div>
    )
}

export default TrackerView;