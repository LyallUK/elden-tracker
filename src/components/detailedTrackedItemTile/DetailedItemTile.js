import React from "react";

function DetailedItemTile(props) {
    const handleTrackItem = () => {
        if (props.trackedIDList.includes(props.id)) {
            props.removeTrackedID(props.id);
        } else {
            props.addTrackedID(props.id);
        }
    };

    const handleCollectItem = () => {
        if (props.collectedIDList.includes(props.id)) {
            props.removeCollectedID(props.id);
        } else {
            props.addCollectedID(props.id);
        }
    };

    // const truncate = (str, n) => {
    //     return (str.length > n) ? str.slice(0, n-1) + '...' : str;
    //   };

    const serveItemLocations = () => {
        const itemLocationList = props.itemLocation.map((itemLocation) => {
            return <div className="detailed-item-location">{itemLocation}</div>
        })
        return itemLocationList;
    }

    return (
        <div className="detailed-item-wrapper">
            <img className="detailed-item-image" src={props.itemImage} alt="detailed-Item"></img>
            <div className="detailed-item-content">
                <div className="detailed-icon-title">
                    <div className="detailed-item-name">{props.itemName}</div>
                    <div className="detailed-item-buttons">
                        <img
                            className="detailed-item-button"
                            id="track-button"
                            src={props.serveTrackedIcon(props.id)}
                            onClick={handleTrackItem}
                            alt="+"
                        />
                        <img
                            className="detailed-item-button"
                            id="collected-button"
                            src={props.serveCollectedIcon(props.id)}
                            onClick={handleCollectItem}
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
