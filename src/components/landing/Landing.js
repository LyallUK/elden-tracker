import React, { useState } from "react";

//Asset Imports
import {database as Database} from '../../assets/database.js';

//component imports
import Header from '../header/Header';
import SearchView from '../searchView/SearchView';
import TrackerView from '../trackerView/TrackerView';

function Landing() {
    //component states
    const [trackedIDList, setTrackedIDList] = useState([]);
    const [collectedIDList, setCollectedIDList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentView, setCurrentView] = useState('search');

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

    //handler function for search term - callback function found in Header component
    const handleSearchBar = (searchTerm) => {
        setSearchTerm(searchTerm);
    }

    const handleChangeView = (nextView) => {
        setCurrentView(nextView);
    }

    //
    const updateDatabase = (updatedDB) => {
    }


    return (
        <div className="landing">
            <Header 
                searchTermCallBack = {handleSearchBar}
            />
            {currentView === 'search' 
                ?
                    <SearchView 
                        trackedIDList = {trackedIDList}
                        addTrackedID = {addTrackedID}
                        removeTrackedID = {removeTrackedID}
                        collectedIDList = {collectedIDList}
                        addCollectedID = {addCollectedID}
                        removeCollectedID = {removeCollectedID}
                        searchTerm = {searchTerm}
                        serveViewCallBack = {handleChangeView}
                    />
                :
                    <TrackerView 
                        trackedIDList = {trackedIDList}
                        addTrackedID = {addTrackedID}
                        removeTrackedID = {removeTrackedID}
                        collectedIDList = {collectedIDList}
                        addCollectedID = {addCollectedID}
                        removeCollectedID = {removeCollectedID}
                        serveViewCallBack = {handleChangeView}
                    />
            }
        </div>
    );
}

export default Landing;