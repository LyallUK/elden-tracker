import React from "react";

//component imports
import TrackIcon from '../../assets/icons/trackButton.svg';
import UntrackIcon from '../../assets/icons/untrackButton.svg';
import CollectIcon from '../../assets/icons/collectButton.svg';
import UncollectIcon from '../../assets/icons/uncollectButton.svg';

function TrackedItemTile(props) {
    
    const handleTrackItem = (e) => {
        if(props.trackedIDList.includes(props.id)){
            e.currentTarget.src = TrackIcon;
            props.removeTrackedID(props.id);
        }
        else{
            e.currentTarget.src = UntrackIcon;
            props.addTrackedID(props.id);
        }
    };

    const handleCollectItem = (e) => {
        if(props.collectedIDList.includes(props.id)){
            e.currentTarget.src = CollectIcon;
            props.removeCollectedID(props.id);
        }
        else{
            e.currentTarget.src = UncollectIcon;
            props.addCollectedID(props.id);
        }
    }

    const serveTrackingIcon = () => {
        if(props.itemTracked == true){
            return UntrackIcon;
        } else return TrackIcon;
    }

    return (
        <div className="tracker-tile">
            <img className="tracker-image" src={props.itemImage} alt="Item"></img>
            <span className="tracker-name">{props.itemName}</span>
            <div className="tracker-buttons">
                <img className="tracker-button" id="track-button" src={serveTrackingIcon()} onClick={handleTrackItem} alt="+"></img>
                <img className="tracker-button" id="collected-button" src={CollectIcon} onClick={handleCollectItem} alt="c"></img>
            </div>
        </div>
    );
} 

export default TrackedItemTile;