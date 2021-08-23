import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentPosts";

export default class Home extends Component {
    render() {
        return (
            <div className="app">
                <div>
                    <Logo />
                    <SearchBar />
                    <RecentPosts />
                </div>
            </div>
        );
    }
}
