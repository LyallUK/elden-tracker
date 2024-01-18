import React from "react";

//component imports
import TrackIcon from '../../assets/icons/trackButton.svg';
import UntrackIcon from '../../assets/icons/untrackButton.svg';
import CollectIcon from '../../assets/icons/collectButton.svg';
import UncollectIcon from '../../assets/icons/uncollectButton.svg';

function ItemTile(props) {

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

    const serveTrackedIcon = () => {
        if(props.itemTracked == true){
            return UntrackIcon;
        } else return TrackIcon;
    }

    const serveCollectedIcon = () => {
        if(props.itemCollected == true){
            return UncollectIcon;
        } else return CollectIcon;
    }

    return (
        <div className="item-tile">
            <span className="item-name">{props.itemName}</span>
            <img className="item-image" src={props.itemImage} alt="Item"></img>
            <div className="item-buttons">
                <img className="item-button" id="track-button" src={serveTrackedIcon()} onClick={handleTrackItem} alt="+"></img>
                <img className="item-button" id="collected-button" src={serveCollectedIcon()} onClick={handleCollectItem} alt="c"></img>
            </div>
        </div>
    );
    
}

export default ItemTile;