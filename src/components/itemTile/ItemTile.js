import React from "react";

function ItemTile(props) {

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

    return (
        <div className="item-tile">
            <span className="item-name">{props.itemName}</span>
            <img className="item-image" src={props.itemImage} alt="Item"></img>
            <div className="item-buttons">
                <img className="item-button" id="track-button" src={props.serveTrackedIcon(props.id)} onClick={handleTrackItem} alt="+"></img>
                <img className="item-button" id="collected-button" src={props.serveCollectedIcon(props.id)} onClick={handleCollectItem} alt="c"></img>
            </div>
        </div>
    );
    
}

export default ItemTile;