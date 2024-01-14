import React from "react";

//component imports

export default class ItemTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // const { itemName, itemImage } = this.props;

        return (
            <div className="ItemTile">
                {/* <span className="ItemName">{itemName}</span> */}
                <span className="ItemName">Item Name</span>
                <img className="ItemImage" src="" alt="Item"></img>
                <div className="ItemButtonsDiv">
                    <img className="ItemButton" id="TrackButton" src="" alt="+"></img>
                    <img className="ItemButton" id="CollectedButton" src="" alt="o"></img>
                </div>
            </div>
        );
    }
}
