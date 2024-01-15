import React from "react";

//Asset Imports
import {database as Database} from '../../assets/database.js';

//component imports
import Header from '../header/Header';
import SearchView from '../searchView/SearchView';
import ItemTile from '../itemTile/ItemTile.js';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            filteredItemList: [], 
            trackedItemList: []
        };
    }

    componentDidMount(){
        const itemList = Database.map((item, index) =>{
            const itemObject = 
            <ItemTile
                key={item.index}
                itemName ={item.name}
                itemImage={item.image}
                itemCategory={item.category}
                itemLocation={item.location}
                itemTracked={item.tracked}
                itemCollected={item.collected} 
            />
            return itemObject;
        })
        this.setState({itemList});
    }
    
    

    render() {
        return (
            <div className="landing">
                <Header />
                <SearchView itemList = {this.state.itemList} />
                

            </div>
        );
    }
}
