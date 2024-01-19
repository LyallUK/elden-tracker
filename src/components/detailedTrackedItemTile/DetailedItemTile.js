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

    // Some locations return multiple text elements - see database for structure
    // Create a function to generate a <p> element for each location

    // const getLocations = () => {
    //     props.itemLocation.forEach((location) => {
    //         const locationWrapper = document.getElementsByClassName("detailed-item-content");

    //     });
    // };

    return (
        <div className="detailed-item-wrapper">
            <img className="detailed-item-image" src={props.itemImage} alt="detailed-Item"></img>
            <div className="detailed-item-content">
                <span className="detailed-item-name">{props.itemName}</span>
                <p className="detailed-item-location">{props.itemLocation}</p>
            </div>
            <div className="detailed-item-buttons">
                <img
                    className="detailed-item-button"
                    id="track-button"
                    src={props.serveTrackedIcon(props.id)}
                    onClick={handleTrackItem}
                    alt="+"
                ></img>
                <img
                    className="detailed-item-button"
                    id="collected-button"
                    src={props.serveCollectedIcon(props.id)}
                    onClick={handleCollectItem}
                    alt="c"
                ></img>
            </div>
        </div>
    );
}

export default DetailedItemTile;
