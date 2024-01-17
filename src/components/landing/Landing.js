import React from "react";

//Asset Imports
import {database as Database} from '../../assets/database.js';

//component imports
import Header from '../header/Header';
import SearchView from '../searchView/SearchView';
import TrackerView from '../trackerView/TrackerView'
import ItemTile from '../itemTile/ItemTile';
import TrackedItemTile from '../trackedItemTile/TrackedItemTile';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            filteredItemList: [], 
            trackedItemList: [],
            collectedItemList: [],
        };
        this.trackItemHandler = this.trackItemHandler.bind(this);
        this.untrackItemHandler = this.untrackItemHandler.bind(this);
        this.collectItemHandler = this.collectItemHandler.bind(this);
        this.uncollectItemHandler = this.uncollectItemHandler.bind(this);
    }


    // Add selected item to tracker.
    trackItemHandler(itemName){
        this.state.itemList.map((item, index)=> {
            if(item.props.itemName == itemName) {
                const trackedItemObject = 
                <TrackedItemTile
                    key={index}
                    itemName ={item.props.itemName}
                    itemImage={item.props.itemImage}
                    itemCategory={item.itemCategory}
                    itemLocation={item.itemLocation}
                    itemTracked={item.itemTracked}
                    itemCollected={item.props.itemCollected}
                    trackItemCallBack = {this.trackItemHandler}
                    untrackItemCallBack = {this.untrackItemHandler}
                    collectItemCallBack = {this.collectItemHandler}
                    uncollectItemCallBack = {this.uncollectItemHandler}
                />
                this.setState({ trackedItemList: [...this.state.trackedItemList, trackedItemObject]}, () => console.log(`Added ${itemName} to Tracker` ));
            }
            
        })
    }
    
    // Remove selected item from tracker.
    untrackItemHandler(itemName){
        const filteredArray = this.state.trackedItemList.filter((item) => item.props.itemName != itemName);
        this.setState({ trackedItemList: filteredArray}, () => console.log(`Removed ${itemName} from Tracker`));

        let updatedItemList = [];
        this.state.itemList.map((item) =>{           
            if(item.props.itemName == itemName){
                const untrackedItemObject = 
                    <ItemTile
                        itemName = {item.props.itemName}
                        itemImage = {item.props.itemImage}
                        itemCategory={item.props.itemCategory}
                        itemLocation={item.props.itemLocation}
                        itemTracked={false}
                        itemCollected={item.props.itemCollected}
                        trackItemCallBack = {this.trackItemHandler}
                        untrackItemCallBack = {this.untrackItemHandler}
                        collectItemCallBack = {this.collectItemHandler}
                        uncollectItemCallBack = {this.uncollectItemHandler}
                    />
                
                updatedItemList.push(untrackedItemObject);

            } else updatedItemList.push(item);
            
        })
        this.setState({itemList: updatedItemList});

    }

    // Add selected item to collecedItems.
    collectItemHandler(itemName){
        this.state.itemList.forEach((item)=> {
            if(item.props.itemName == itemName) {
                this.setState({ collectedItemList: [...this.state.collectedItemList, item]}, () => console.log(`${itemName} added to Collection`));
            }
        })
    }

    // Remove selected item from collection
    uncollectItemHandler(itemName){
        const filteredArray = this.state.collectedItemList.filter((item) => item.props.itemName != itemName);
        
        this.setState({ collectedItemList: filteredArray}, () => console.log(`Removed ${itemName} from Collection`));
    }
    

    componentDidMount(){
        const itemList = Database.map((item, index) =>{
            const itemObject = 
            <ItemTile
                key={index}
                itemName ={item.name}
                itemImage={item.image}
                itemCategory={item.category}
                itemLocation={item.location}
                itemTracked={item.tracked}
                itemCollected={item.collected}
                trackItemCallBack = {this.trackItemHandler}
                untrackItemCallBack = {this.untrackItemHandler}
                collectItemCallBack = {this.collectItemHandler}
                uncollectItemCallBack = {this.uncollectItemHandler}
            />
            return itemObject;
        })
        this.setState({itemList});
    }
    
    render() {
        return (
            <div className="landing">
                <Header />
                <SearchView itemList = {this.state.itemList} trackedItemList = {this.state.trackedItemList} />
                <TrackerView trackedItemList = {this.state.trackedItemList}/>  
            </div>
        );
    }
}
