import React from "react";



export default class SearchView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            

        };
    }


    render() {
        return(
            <div className="item-list">
                {this.props.itemList}
            </div>
        )
    }
}