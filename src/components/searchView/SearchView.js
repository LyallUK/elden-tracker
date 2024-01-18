import React from "react";

//Component imports
import ItemTile from "../itemTile/ItemTile.js";
import TrackedItemTile from "../trackedItemTile/TrackedItemTile.js";


//Asset Imports
import {database as Database} from '../../assets/database.js';
import TrackIcon from '../../assets/icons/trackButton.svg';
import UntrackIcon from '../../assets/icons/untrackButton.svg';
import CollectIcon from '../../assets/icons/collectButton.svg';
import UncollectIcon from '../../assets/icons/uncollectButton.svg';

function SearchView(props){

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

    //serve entire db as list of ItemTile components
    const serveItemList = () => {
        const itemList = Database.map((item) =>{
            return <ItemTile
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

        const filteredItemList = itemList.filter((item) => item.props.itemName.toLowerCase().includes(props.searchTerm.toLowerCase()));
        return filteredItemList;
    }
    
    //serve trackedItemTile list of items where item ids match trackedIDList
    const serveTrackedItemList = () => {
        const trackedItemList = Database.filter((item) => props.trackedIDList.includes(item.id)).map((item) =>{
            return <TrackedItemTile
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
        return trackedItemList;
    }

    
    return(
        <div className="search-view-wrapper">
            <div className="item-list">
                {serveItemList()}
            </div>
            <div className="track-list">
                {serveTrackedItemList()}
            </div>
        </div>
    )
}

export default SearchView;