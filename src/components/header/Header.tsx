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
  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchTermCallBack(e.target.value);
  };

  const handleToggleHelpModal = () => {
    toggleHelpModal();
  };

  const handleToggleFilterModal = () => {
    toggleFilterModal();
  };

  const openLink = () => {
    window.open("https://github.com/LyallUK/elden-tracker", "_blank");
  };

  return (
    <div className="header">
      <div className="header-info">
        <img className="game-logo" src={GameLogo} alt="Game Logo"></img>
        <div className="link-container">
          <img
            className="github-logo info-icon"
            src={GithubIcon}
            alt="Github"
            onClick={openLink}
          />
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
