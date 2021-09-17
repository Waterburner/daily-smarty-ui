import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchbar";

export default class Results extends Component {
    handleSearchBarSubmit(query) {
        console.log("It's working! You searched for \"" + query.query + '"');
    }
    render() {
        return (
            <div>
                <h1>Results</h1>
                <Logo size={55} />
                <SearchBar
                    onSubmit={(query) => this.handleSearchBarSubmit(query)}
                />
            </div>
        );
    }
}
