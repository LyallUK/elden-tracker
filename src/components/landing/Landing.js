import { useState, useEffect } from "react";

//Asset Imports
import { database as Database } from "../../assets/database.js";
import TrackIcon from "../../assets/icons/trackButton.svg";
import UntrackIcon from "../../assets/icons/untrackButton.svg";
import CollectIcon from "../../assets/icons/collectButton.svg";
import UncollectIcon from "../../assets/icons/uncollectButton.svg";

//component imports
import Header from "../header/Header.tsx";
import Modal from "../modal/Modal.js";
import SearchView from "../searchView/SearchView.js";
import TrackerView from "../trackerView/TrackerView.js";

function Landing() {
    //component states
    const [trackedIDList, setTrackedIDList] = useState(JSON.parse(localStorage.getItem('trackedIDs')) || []);
    const [collectedIDList, setCollectedIDList] = useState(JSON.parse(localStorage.getItem('collectedIDs')) || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentView, setCurrentView] = useState("search");
    const [helpModalIsToggled, setHelpModal] = useState(false);
    const [filterModalIsToggled, setFilterModal] = useState(false);
    const [filterOptions, setFilterOptions] = useState([]);

    
    // Save to local storage on state change.
    useEffect(()=> {
        localStorage.setItem('trackedIDs', JSON.stringify(trackedIDList));
        localStorage.setItem('collectedIDs', JSON.stringify(collectedIDList));
    }, [trackedIDList , collectedIDList]);


    const updateFilterOptions = (option) => {
        if(filterOptions.length === 0) setFilterOptions(undefined);
        filterOptions.includes(option) ? setFilterOptions(filterOptions.filter((type) => type != option)) : setFilterOptions([...filterOptions, option]);
    }

    const clearFilterOptions = () => {
        setFilterOptions([]);
    }

    const toggleHelpModal = () => {
        helpModalIsToggled ? setHelpModal(false) : setHelpModal(true);
        setFilterModal(false);
    };

    const toggleFilterModal = () => {
        filterModalIsToggled ? setFilterModal(false) : setFilterModal(true);
        setHelpModal(false);
    };

    const handleTrackItem = (itemID) => {
        if (trackedIDList.includes(itemID)) {
            setTrackedIDList(trackedIDList.filter((trackedID) => trackedID != itemID));
        } else {
            setTrackedIDList([...trackedIDList, itemID]);
        }
    };

    const handleCollectItem = (itemID) => {
        if (collectedIDList.includes(itemID)) {
            setCollectedIDList(collectedIDList.filter((collectedID) => collectedID != itemID));
        } else {
            setCollectedIDList([...collectedIDList, itemID]);
            handleTrackItem(itemID);
        }
    };

    //handler function for search term - callback function found in Header component
    const handleSearchBar = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handleChangeView = (nextView) => {
        setCurrentView(nextView);
    };

    const idIsTracked = (itemID) => {
        return trackedIDList.includes(itemID);
    };

    const idIsCollected = (itemID) => {
        return collectedIDList.includes(itemID);
    };

    const serveTrackedIcon = (itemID) => {
        return idIsTracked(itemID) ? UntrackIcon : TrackIcon;
    };

    const serveCollectedIcon = (itemID) => {
        return idIsCollected(itemID) ? UncollectIcon : CollectIcon;
    };

    return (
        <div className="landing">
            <Header
                searchTermCallBack={handleSearchBar}
                toggleHelpModal={toggleHelpModal}
                toggleFilterModal={toggleFilterModal}
            />
            {helpModalIsToggled === true ? <Modal type={"help"} /> : ""}
            {filterModalIsToggled === true 
                ? 
                    <Modal 
                        type={"filter"}
                        updateFilterOptions={updateFilterOptions}
                        filterOptions={filterOptions}
                        clearFilterOptions={clearFilterOptions}
                    /> 
                : 
                    ""
            }
            {currentView === "search" ? (
                <SearchView
                    searchTerm={searchTerm}
                    trackedIDList={trackedIDList}
                    onViewChange={handleChangeView}
                    onTrackToggle={handleTrackItem}
                    onCollectToggle={handleCollectItem}
                    serveTrackedIcon={serveTrackedIcon}
                    serveCollectedIcon={serveCollectedIcon}
                    filterOptions={filterOptions}
                />
            ) : (
                <TrackerView
                    trackedIDList={trackedIDList}
                    onViewChange={handleChangeView}
                    onTrackToggle={handleTrackItem}
                    onCollectToggle={handleCollectItem}
                    serveTrackedIcon={serveTrackedIcon}
                    serveCollectedIcon={serveCollectedIcon}
                />
            )}
        </div>
    );
}

export default Landing;
