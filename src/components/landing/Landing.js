import React, { useState } from "react";

//Asset Imports
import {database as Database} from '../../assets/database.js';

//component imports
import Header from '../header/Header';
import SearchView from '../searchView/SearchView';
// import TrackerView from '../trackerView/TrackerView'
// import ItemTile from '../itemTile/ItemTile';
// import TrackedItemTile from '../trackedItemTile/TrackedItemTile';

function Landing() {
    //component states
    const [trackedIDList, setTrackedIDList] = useState([]);
    const [collectedIDList, setCollectedIDList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //add an ID to state: trackedIDList
    const addTrackedID = (itemID) => {
        setTrackedIDList([... trackedIDList, itemID]);
    }

    //remove an ID to state: trackedIDList
    const removeTrackedID = (itemID) => {
        setTrackedIDList(trackedIDList.filter((trackedID) => trackedID != itemID));
    }

    //add an ID to state: collectedIDList
    const addCollectedID = (itemID) => {
        setCollectedIDList([... collectedIDList, itemID]);
    }

    //remove an ID to state: collectedIDList
    const removeCollectedID = (itemID) => {
        setCollectedIDList(collectedIDList.filter((collectedID) => collectedID != itemID));
    }

    const isTrackedbyID = (itemID) => {
        if(trackedIDList.includes(itemID)){
            return true;
        } return false;
    }

    //handler function for search term - callback function found in Header component
    const handleSearchBar = (searchTerm) => {
        setSearchTerm(searchTerm);
    }

    //
    const updateDatabase = (updatedDB) => {
    }


    return (
        <div className="landing">
            <Header 
                searchTermCallBack = {handleSearchBar}
            />
            <SearchView 
                trackedIDList = {trackedIDList}
                addTrackedID = {addTrackedID}
                removeTrackedID = {removeTrackedID}
                collectedIDList = {collectedIDList}
                addCollectedID = {addCollectedID}
                removeCollectedID = {removeCollectedID}
                isTrackedbyID = {isTrackedbyID}
                searchTerm = {searchTerm}
            />
            {/* <TrackerView trackedIDList = {trackedIDList}/>   */}
        </div>
    );
}

export default Landing;