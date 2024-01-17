import React from "react";


//Component Imports


//Asset Imports
import GameLogo from "../../assets/art/eldenringlogo.svg";
import SearchFilter from '../../assets/icons/filterButton.svg';
import GithubIcon from '../../assets/icons/githubLogo.svg';
import HelpIcon from '../../assets/icons/helpButton.svg';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className="header">
                <div className="header-info">
                    <img className="game-logo" src={GameLogo} alt="Game Logo"></img>
                    <div className="link-container">
                        <a href="https://github.com/LyallUK/elden-tracker" target="_blank">
                            <img className="github-logo info-icon" src={GithubIcon} alt="Github"></img>
                        </a>
                        
                        <img className="help-logo info-icon" src={HelpIcon} alt="?"></img>
                    </div> 
                </div>
                <div className="search-container">
                    <img className="info-icon" src={SearchFilter} alt="Filter Symbol"></img>
                    <input className="search-bar" type="text" spellCheck="false" placeholder="SEARCH..."></input>
                </div>
            </div>
        )
    };
}