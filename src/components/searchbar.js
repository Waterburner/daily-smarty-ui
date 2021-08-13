import React, { Component } from "react";

export default class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search DailySmarty" />
            </form>
        );
    }
}
