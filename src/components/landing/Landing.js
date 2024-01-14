import React from "react";
import ItemTile from "../itemTile/ItemTile";
import SearchFilter from "../searchFilter/SearchFilter";

import gameLogo from "../../assets/art/eldenringlogo.svg";

//component imports

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Landing">
                <div className="Header">
                    <img className="GameLogo" src={gameLogo} alt="Game Logo"></img>
                    <div className="SearchDiv">
                        <img src="SearchFilterButton" alt="Filter Symbol"></img>
                        <input className="SearchBar" type="text" spellCheck="false" placeholder="SEARCH..."></input>
                    </div>
                </div>
                <div className="Container">
                    <div className="ItemList">
                        <ItemTile />
                    </div>
                    <div className="Tracker">
                        <SearchFilter />
                    </div>
                </div>
            </div>
        );
    }
}
