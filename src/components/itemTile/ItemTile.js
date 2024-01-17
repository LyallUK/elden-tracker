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
        if(props.collectedIDList.includes(props.key)){
            e.currentTarget.src = CollectIcon;
            props.removeCollectedID(props.key);
        }
        else{
            e.currentTarget.src = UncollectIcon;
            props.addCollectedID(props.key);
        }
    }

    return (
        <div className="item-tile">
            <span className="item-name">{props.itemName}</span>
            <img className="item-image" src={props.itemImage} alt="Item"></img>
            <div className="item-buttons">
                <img className="item-button" id="track-button" src={TrackIcon} onClick={handleTrackItem} alt="+"></img>
                <img className="item-button" id="collected-button" src={CollectIcon} onClick={handleCollectItem} alt="c"></img>
            </div>
        </div>
    );
    
}

export default ItemTile;