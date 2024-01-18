import React from "react";

//component imports
import TrackIcon from '../../assets/icons/trackButton.svg';
import UntrackIcon from '../../assets/icons/untrackButton.svg';
import CollectIcon from '../../assets/icons/collectButton.svg';
import UncollectIcon from '../../assets/icons/uncollectButton.svg';

function TrackedItemTile(props) {
    
    const handleTrackItem = () => {
        if(props.trackedIDList.includes(props.id)){
            props.removeTrackedID(props.id);
        }
        else{
            props.addTrackedID(props.id);
        }
    };

    const handleCollectItem = () => {
        if(props.collectedIDList.includes(props.id)){
            props.removeCollectedID(props.id);
        }
        else{
            props.addCollectedID(props.id);
        }
    }

    // const serveTrackedIcon = () => {
    //     return props.itemTracked ? UntrackIcon : TrackIcon;
    // }

    // const serveCollectedIcon = () => {
    //     return props.itemCollected ? UncollectIcon : CollectIcon;
    // }

    return (
        <div className="tracker-tile">
            <img className="tracker-image" src={props.itemImage} alt="Item"></img>
            <span className="tracker-name">{props.itemName}</span>
            <div className="tracker-buttons">
                <img className="tracker-button" id="track-button" src={props.serveTrackedIcon(props.id)} onClick={handleTrackItem} alt="+"></img>
                <img className="tracker-button" id="collected-button" src={props.serveCollectedIcon(props.id)} onClick={handleCollectItem} alt="c"></img>
            </div>
        </div>
    );
} 

export default TrackedItemTile;