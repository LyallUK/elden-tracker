import React from "react";

function DetailedItemTile({
    id,
    itemLocation,
    itemImage,
    itemName,
    serveTrackedIcon,
    serveCollectedIcon,
    onTrackToggle,
    onCollectToggle,
}) {
    const serveItemLocations = () => {
        const itemLocationList = itemLocation.map((itemLocation) => {
            return <p className="detailed-item-location">{itemLocation}</p>;
        });
        return itemLocationList;
    };

    return (
        <div className="detailed-item-wrapper">
            <img className="detailed-item-image" src={itemImage} alt="detailed-Item"></img>
            <div className="detailed-item-content">
                <div className="detailed-icon-title">
                    <div className="detailed-item-name">{itemName}</div>
                    <div className="detailed-item-buttons">
                        <img
                            className="detailed-item-button"
                            id="track-button"
                            src={serveTrackedIcon(id)}
                            onClick={() => onTrackToggle(id)}
                            alt="+"
                        />
                        <img
                            className="detailed-item-button"
                            id="collected-button"
                            src={serveCollectedIcon(id)}
                            onClick={() => {
                                onCollectToggle(id);
                            }}
                            alt="c"
                        />
                    </div>
                </div>

                <div className="detailed-item-location-list">
                    <div className="detailed-item-location">{serveItemLocations()}</div>
                </div>
            </div>
        </div>
    );
}

export default DetailedItemTile;
