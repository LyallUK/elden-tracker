import React from "react";

//component imports
import DetailedItemTile from "../detailedTrackedItemTile/DetailedItemTile.tsx";

//Asset Imports
import { database as Database } from "../../assets/database.js";
import SearchViewIcon from "../../assets/icons/search-view.svg";

interface TrackerViewProps {
  trackedIDList: string[];
  onViewChange: (view: string) => void;
  onTrackToggle: (itemID: string) => void;
  onCollectToggle: (itemID: string) => void;
  serveTrackedIcon: (itemID: string) => string;
  serveCollectedIcon: (itemID: string) => string;
}

const TrackerView = ({
  trackedIDList,
  onViewChange,
  onTrackToggle,
  onCollectToggle,
  serveTrackedIcon,
  serveCollectedIcon,
}: TrackerViewProps) => {
  const handleChangeView = () => {
    onViewChange("search");
  };

  const serveDetailedItemList = () => {
    const DetailedItemList = Database.filter((item) =>
      trackedIDList.includes(item.id.toString())
    ).map((item) => {
      return (
        <DetailedItemTile
          key={item.id}
          id={item.id.toString()}
          itemName={item.name}
          itemImage={item.image}
          itemLocation={item.location}
          serveTrackedIcon={serveTrackedIcon}
          serveCollectedIcon={serveCollectedIcon}
          onTrackToggle={onTrackToggle}
          onCollectToggle={onCollectToggle}
        />
      );
    });
    return DetailedItemList;
  };

  return (
    <div className="tracker-view-wrapper">
      <div className="search-view-button">
        <img
          className="search-view-button-img"
          src={SearchViewIcon}
          onClick={handleChangeView}
          alt="search"
        />
      </div>
      <div className="detailed-item-list">{serveDetailedItemList()}</div>
    </div>
  );
};

export default TrackerView;
