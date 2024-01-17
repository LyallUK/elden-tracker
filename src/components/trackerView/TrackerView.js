import React from "react";

//component imports


export default class TrackerView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };    
    }

    render() {
        return(
            <div className="tracker-view-wrapper">
                {this.props.trackedItemList}
            </div>
        )
    }
}