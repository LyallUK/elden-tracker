import React from "react";

interface TrackedItemTileProps {
  id: string;
  itemImage: string;
  itemName: string;
  serveTrackedIcon: (itemID: string) => string;
  serveCollectedIcon: (itemID: string) => string;
  onTrackToggle: (itemID: string) => void;
  onCollectToggle: (itemID: string) => void;
}

const TrackedItemTile = ({
  id,
  itemImage,
  itemName,
  serveTrackedIcon,
  serveCollectedIcon,
  onTrackToggle,
  onCollectToggle,
}: TrackedItemTileProps) => {
  return (
    <div className="tracker-tile">
      <img className="tracker-image" src={itemImage} alt="Item"></img>
      <span className="tracker-name">{itemName}</span>
      <div className="tracker-buttons">
        <img
          className="tracker-button"
          id="track-button"
          src={serveTrackedIcon(id)}
          onClick={() => onTrackToggle(id)}
          alt="+"
        />
        <img
          className="tracker-button"
          id="collected-button"
          src={serveCollectedIcon(id)}
          onClick={() => onCollectToggle(id)}
          alt="c"
        />
      </div>
    </div>
  );
};

export default TrackedItemTile;
