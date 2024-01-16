import React from "react";

//component imports


export default class SearchView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itemsTracked: false
        };
        this.serveTrackingButton = this.serveTrackingButton.bind(this);
    }

    serveTrackingButton(){
        if(this.props.trackedItemList.length != 0) {
            return (
                <div className="tracking-view-button">
                    <p>Tracking View</p>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="search-view-wrapper">
                <div className="item-list">
                    {this.props.itemList}
                </div>
                <div className="track-list">
                    {this.serveTrackingButton()}
                    {this.props.trackedItemList}
                </div>
            </div>
        )
    }
}