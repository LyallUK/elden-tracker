import React from "react";

//component imports
import TrackIcon from '../../assets/icons/trackButton.svg';
import UntrackIcon from '../../assets/icons/untrackButton.svg';
import CollectIcon from '../../assets/icons/collectButton.svg';
import UncollectIcon from '../../assets/icons/uncollectButton.svg';

export default class ItemTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracked: this.props.itemTracked,
            collected: this.props.itemCollected
        };
        this.handleTrackItem = this.handleTrackItem.bind(this);
        this.handleCollectItem = this.handleCollectItem.bind(this);
    }

    handleTrackItem(e){
        if(this.state.tracked == false){
            e.currentTarget.src = UntrackIcon;
            this.props.trackItemCallBack(this.props.itemName);
            this.setState({tracked: true});
        }
        else{
            e.currentTarget.src = TrackIcon;
            this.props.untrackItemCallBack(this.props.itemName);
            this.setState({tracked: false});
        }

    };

    handleCollectItem(e){
        if(this.state.collected == false){
            e.currentTarget.src = UncollectIcon;
            this.props.collectItemCallBack(this.props.itemName);
            this.setState({collected: true});
        }
        else{
            e.currentTarget.src = CollectIcon;
            this.props.uncollectItemCallBack(this.props.itemName);
            this.setState({collected: false});
        }
    }

    render() {
        return (
            <div className="item-tile">
                <span className="item-name">{this.props.itemName}</span>
                <img className="item-image" src={this.props.itemImage} alt="Item"></img>
                <div className="item-buttons">
                    <img className="item-button" id="track-button" src={TrackIcon} onClick={this.handleTrackItem} alt="+"></img>
                    <img className="item-button" id="collected-button" src={CollectIcon} onClick={this.handleCollectItem} alt="c"></img>
                </div>
            </div>
        );
    }
}
