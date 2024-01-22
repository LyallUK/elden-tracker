import React from "react";

function TrackedItemTile({
  id,
  itemImage,
  itemName,
  serveTrackedIcon,
  serveCollectedIcon,
  onTrackToggle,
  onCollectToggle,
}) {
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
        ></img>
        <img
          className="tracker-button"
          id="collected-button"
          src={serveCollectedIcon(id)}
          onClick={() => onCollectToggle(id)}
          alt="c"
        ></img>
      </div>
    </div>
  );
}

export default TrackedItemTile;
