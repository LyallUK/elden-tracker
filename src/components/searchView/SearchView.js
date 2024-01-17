import React from "react";

//component imports

//Asset Imports
import {database as Database} from '../../assets/database.js';


function SearchView(props){

    return(
        <div className="search-view-wrapper">
            <div className="item-list">
                {
                    //serve fitlered item list here
                }
            </div>
            <div className="track-list">
                {
                    //serve tracked item list here
                }
            </div>
        </div>
    )
    
}

export default SearchView;