import React from "react";
import collapsedButton from "../../assets/icons/arrow-up.svg";
import expandedButton from "../../assets/icons/arrow-down.svg";

export default class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { collapsedCategories: {} };
    }

    toggleCollapse = (category) => {
        this.setState((prevState) => ({
            collapsedCategories: {
                ...prevState.collapsedCategories,
                [category]: !prevState.collapsedCategories[category],
            },
        }));
    };

    toggleImageSource = (category) => {
        return this.state.collapsedCategories[category]
            ? collapsedButton // Collapsed Image
            : expandedButton; // Open Image
    };

    render() {
        const filterList = {
            weapons: [
                "axes",
                "ballista",
                "bows",
                "claws",
                "colossal swords",
                "colossal weapons",
                "crossbows",
                "curved greatswords",
                "curved swords",
                "daggers",
                "flails",
                "glintstone staffs",
                "greataxes",
                "great spears",
                "greatbows",
                "great hammers",
                "greatswords",
                "halberds",
                "hammers",
                "heavy thrusting swords",
                "katanas",
                "light bows",
                "reapers",
                "sacred seals",
                "spears",
                "straight swords",
                "thrusting swords",
                "torches",
                "twinblades",
                "whips",
            ],
            equipment: ["head", "chest", "arms", "legs", "Talismans"],
            spells: ["sorceries", "incantations"],
        };

        return (
            <div className="SearchFilter">
                {Object.keys(filterList).map((category, index) => (
                    <div key={index}>
                        <div>
                            <span className="FilterTitle">{category}</span>
                            <img
                                className="FilterCollapse"
                                src={this.toggleImageSource(category)}
                                onClick={() => this.toggleCollapse(category)}
                            ></img>
                        </div>
                        <div
                            className="FilterGroup"
                            style={{
                                maxHeight: this.state.collapsedCategories[category] ? "0" : "600px",
                            }}
                        >
                            {filterList[category].map((item, itemIndex) => (
                                <span className="FilterType" key={itemIndex}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
