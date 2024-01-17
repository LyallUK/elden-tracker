import React from "react";

//Component imports
import ItemTile from "../itemTile/ItemTile.js";

//Asset Imports
import {database as Database} from '../../assets/database.js';

function SearchView(props){

    const serveItemList = () => {
        const itemList = Database.map((item) =>{
            return <ItemTile
                key = {item.id}
                id = {item.id}
                itemName = {item.name}
                itemImage = {item.image}
                itemCategory = {item.category}
                itemLocation = {item.location}
                itemTracked = {item.tracked}
                itemCollected = {item.collected}
                trackedIDList = {props.trackedIDList}
                addTrackedID = {props.addTrackedID}
                removeTrackedID = {props.removeTrackedID}
                collectedIDList = {props.collectedIDList}
                addCollectedID = {props.addCollectedID}
                removeCollectedID = {props.removeCollectedID}
            />
        })
        return itemList;
    }

    
    return(
        <div className="search-view-wrapper">
            <div className="item-list">
                {serveItemList()}
            </div>
            <div className="track-list">
                {
                    //serve tracked item list here
                }
            </div>
        </div>
    )
    
}

export default SearchView;