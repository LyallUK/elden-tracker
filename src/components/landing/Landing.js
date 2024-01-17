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

    //add an ID to state: trackedIDList
    const addTrackedID = (itemID) => {
        setTrackedIDList([... trackedIDList, itemID]);
    }

    //remove an ID to state: trackedIDList
    const removeTrackedIDList = (itemID) => {
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

    const updateDatabase = (updatedDB) => {
    }
    //updateDatabase();


    //handler function for search term - callback function found in Header component
    const handleSearchBar = (searchTerm) => {
        console.log(searchTerm.target.value);
    }

    //temp function to pull in database and produce an updated array with unique ID property on items
    const makeDatabaseItemsUnique = () => {
        let uniqueID = 0;
        const updatedDatabase = Database.map(item => {
            uniqueID++;
            return {
              ...item,
              id: uniqueID-1,
            };
          });

          //transform updated db into Json
          //const updatedDatabaseString = `export const Database = ${JSON.stringify(updatedDatabase, null, 2)};\n`;

          console.log(updatedDatabase);
    }
    makeDatabaseItemsUnique();

    return (
        <div className="landing">
            <Header 
                searchTermCallBack = {handleSearchBar}
            />
            <SearchView 
                trackedIDList = {trackedIDList}
                addTrackedID = {addTrackedID}
                removeTrackedIDList = {removeTrackedIDList}
                collectedIDList = {collectedIDList}
                addCollectedID = {addCollectedID}
                removeCollectedID = {removeCollectedID}
            />
            {/* <TrackerView trackedIDList = {trackedIDList}/>   */}
        </div>
    );
}

export default Landing;