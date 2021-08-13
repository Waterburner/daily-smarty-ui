import React, { Component } from "react";

export default class RecentPosts extends Component {
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts__heading">Recent Posts</div>
                    <ul className="recent-posts__posts">
                        <li>recent post 01</li>
                        <li>recent post 02</li>
                        <li>recent post 03</li>
                    </ul>
                </div>
            </div>
        );
    }
}
