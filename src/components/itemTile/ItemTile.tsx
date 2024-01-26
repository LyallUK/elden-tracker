import React from "react";

interface ItemTileProps {
  id: string;
  itemName: string;
  itemImage: string;
  serveTrackedIcon: (itemID: string) => string;
  serveCollectedIcon: (itemID: string) => string;
  onTrackToggle: (itemID: string) => void;
  onCollectToggle: (itemID: string) => void;
}

const ItemTile = ({
  id,
  itemName,
  itemImage,
  serveTrackedIcon,
  serveCollectedIcon,
  onTrackToggle,
  onCollectToggle,
}: ItemTileProps) => {
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
        />
        <img
          className="item-button"
          id="collected-button"
          src={serveCollectedIcon(id)}
          onClick={() => onCollectToggle(id)}
          alt="c"
        />
      </div>
    </div>
  );
};

export default ItemTile;
