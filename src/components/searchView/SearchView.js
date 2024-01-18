import React from "react";

//Component imports
import ItemTile from "../itemTile/ItemTile.js";
import TrackedItemTile from "../trackedItemTile/TrackedItemTile.js";

//Asset Imports
import {database as Database} from '../../assets/database.js';

function SearchView(props){

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
                itemTracked = {props.isTrackedbyID()}
                itemCollected = {item.collected}
                trackedIDList = {props.trackedIDList}
                addTrackedID = {props.addTrackedID}
                removeTrackedID = {props.removeTrackedID}
                collectedIDList = {props.collectedIDList}
                addCollectedID = {props.addCollectedID}
                removeCollectedID = {props.removeCollectedID}
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
                itemTracked = {props.isTrackedbyID()}
                itemCollected = {item.collected}
                trackedIDList = {props.trackedIDList}
                addTrackedID = {props.addTrackedID}
                removeTrackedID = {props.removeTrackedID}
                collectedIDList = {props.collectedIDList}
                addCollectedID = {props.addCollectedID}
                removeCollectedID = {props.removeCollectedID}
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