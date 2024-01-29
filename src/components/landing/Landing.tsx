import React, { useState, useEffect } from "react";

//Asset Imports
import TrackIcon from "../../assets/icons/trackButton.svg";
import UntrackIcon from "../../assets/icons/untrackButton.svg";
import CollectIcon from "../../assets/icons/collectButton.svg";
import UncollectIcon from "../../assets/icons/uncollectButton.svg";

//component imports
import Header from "../header/Header.tsx";
import Modal from "../modal/Modal.tsx";
import SearchView from "../searchView/SearchView.tsx";
import TrackerView from "../trackerView/TrackerView.tsx";

const Landing = () => {
  //Component State Variables
  const [trackedIDList, setTrackedIDList] = useState<string[]>(
    JSON.parse(localStorage.getItem("trackedIDs") || "[]")
  );
  const [collectedIDList, setCollectedIDList] = useState<string[]>(
    JSON.parse(localStorage.getItem("collectedIDs") || "[]")
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentView, setCurrentView] = useState<string>("search");
  const [helpModalIsToggled, setHelpModal] = useState<boolean>(false);
  const [filterModalIsToggled, setFilterModal] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<string[]>([]);

  //Save IDs of tracked and collected items
  useEffect(() => {
    localStorage.setItem("trackedIDs", JSON.stringify(trackedIDList));
    localStorage.setItem("collectedIDs", JSON.stringify(collectedIDList));
  }, [trackedIDList, collectedIDList]);

  //Update filter options
  const updateFilterOptions = (option: string) => {
    if (filterOptions.length === 0) setFilterOptions([]);
    filterOptions.includes(option)
      ? setFilterOptions(filterOptions.filter((type) => type !== option))
      : setFilterOptions([...filterOptions, option]);
  };

  //Clears all filters applied
  const clearFilterOptions = () => {
    setFilterOptions([]);
  };

  //Toggles conditional value for rendering Help modal
  const toggleHelpModal = () => {
    helpModalIsToggled ? setHelpModal(false) : setHelpModal(true);
    setFilterModal(false);
  };

  //Toggles conditional value for rendering Filter modal
  const toggleFilterModal = () => {
    filterModalIsToggled ? setFilterModal(false) : setFilterModal(true);
    setHelpModal(false);
  };

  //If itemID is tracked then remove it from tracking list, otherwise add the itemID to the tracking list
  const handleTrackItem = (itemID: string) => {
    if (trackedIDList.includes(itemID)) {
      setTrackedIDList(
        trackedIDList.filter((trackedID) => trackedID !== itemID)
      );
    } else {
      setTrackedIDList([...trackedIDList, itemID]);
    }
  };

  //If itemID is collected then remove it from collected list, otherwise add the itemID to the collected list  
  const handleCollectItem = (itemID: string) => {
    if (collectedIDList.includes(itemID)) {
      setCollectedIDList(
        collectedIDList.filter((collectedID) => collectedID !== itemID)
      );
    } else {
      setCollectedIDList([...collectedIDList, itemID]);
      setTrackedIDList(
        trackedIDList.filter((trackedID) => trackedID !== itemID)
      );
    }
  };

  //Updates search term - call back function located in Header component
  const handleSearchBar = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  //Updated current view - call back function located in SearchView and TrackingView components
  const handleChangeView = (nextView: string) => {
    setCurrentView(nextView);
  };

  //Checks if passed itemID is tracked and returns booleon value
  const idIsTracked = (itemID: string) => {
    return trackedIDList.includes(itemID);
  };

  //Checks if passed itemID is collect and returns booleon value
  const idIsCollected = (itemID: string) => {
    return collectedIDList.includes(itemID);
  };

  //Checks if passed itemID is tracked and returns corresponding icon
  const serveTrackedIcon = (itemID: string) => {
    return idIsTracked(itemID) ? UntrackIcon : TrackIcon;
  };

  //Checks if passed itemID is collected and returns corresponding icon
  const serveCollectedIcon = (itemID: string) => {
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
      {filterModalIsToggled === true ? (
        <Modal
          type={"filter"}
          updateFilterOptions={updateFilterOptions}
          filterOptions={filterOptions}
          clearFilterOptions={clearFilterOptions}
        />
      ) : (
        ""
      )}
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
};

export default Landing;
