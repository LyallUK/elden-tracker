import React from "react";

function ItemTile({
  id,
  itemName,
  itemImage,
  serveTrackedIcon,
  serveCollectedIcon,
  onTrackToggle,
  onCollectToggle,
}) {
  return (
    <div className="item-tile">
      <span className="item-name">{itemName}</span>
      <img className="item-image" src={itemImage} alt="Item"></img>
      <div className="item-buttons">
        <img
          className="item-button"
          id="track-button"
          src={serveTrackedIcon(id)}
          onClick={() => onTrackToggle(id)}
          alt="+"
        ></img>
        <img
          className="item-button"
          id="collected-button"
          src={serveCollectedIcon(id)}
          onClick={() => onCollectToggle(id)}
          alt="c"
        ></img>
      </div>
    </div>
  );
}

export default ItemTile;
