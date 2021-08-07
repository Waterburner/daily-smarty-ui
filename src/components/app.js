import React, { Component } from "react";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="container">
                    <div className="logo">Logo</div>
                    <div className="search">
                        <input placeholder="daily smarty" />
                    </div>
                    <div className="recent">
                        <ul>
                            <li>post</li>
                            <li>post</li>
                            <li>post</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
