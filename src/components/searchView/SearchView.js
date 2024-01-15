import React from "react";

//component imports


export default class SearchView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
        
    }

    render() {
        return(
            <div className="search-view-wrapper">
                <div className="item-list">
                    {this.props.itemList}
                </div>
                <div className="track-list">
                {this.props.trackedItemList}
            </div>
            </div>
        )
    }
}