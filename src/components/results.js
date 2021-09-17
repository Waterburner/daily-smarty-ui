import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchbar";

import { connect } from "react-redux";
import * as actions from "../actions";

class Results extends Component {
    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
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

export default connect(null, actions)(Results);
