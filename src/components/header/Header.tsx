import React from "react";

// Asset Imports
import GameLogo from "../../assets/art/eldenringlogo.svg";
import SearchFilter from "../../assets/icons/filterButton.svg";
import GithubIcon from "../../assets/icons/githubLogo.svg";
import HelpIcon from "../../assets/icons/helpButton.svg";

interface HeaderProps {
  searchTermCallBack: (term: string) => void;
  toggleHelpModal: () => void;
  toggleFilterModal: () => void;
}

const Header = ({
  searchTermCallBack,
  toggleHelpModal,
  toggleFilterModal,
}: HeaderProps) => {

  //Callback function for search term
  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchTermCallBack(e.target.value);
  };

  //Callback function for toggling Help modal
  const handleToggleHelpModal = () => {
    toggleHelpModal();
  };

  //Callback function for toggling Filter modal
  const handleToggleFilterModal = () => {
    toggleFilterModal();
  };

  return (
    <div className="header">
      <div className="header-info">
        <img className="game-logo" src={GameLogo} alt="Game Logo"></img>
        <div className="link-container">
          <a className="github-link" href="https://github.com/LyallUK/elden-tracker" target="_blank" rel="noopener noreferrer">
            <img
              className="github-logo info-icon"
              src={GithubIcon}
              alt="Github"
            />
          </a>
          <img
            className="help-logo info-icon"
            src={HelpIcon}
            alt="?"
            onClick={handleToggleHelpModal}
          />
        </div>
      </div>
      <div className="search-container">
        <img
          className="info-icon"
          src={SearchFilter}
          alt="Filter Symbol"
          onClick={handleToggleFilterModal}
        />
        <input
          className="search-bar"
          type="text"
          spellCheck="false"
          placeholder="SEARCH..."
          onChange={handleSearchBar}
        ></input>
      </div>
    </div>
  );
};

export default Header;
