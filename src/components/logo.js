// Logo Component
import React, { Component } from "react";

import logoImg from "../../static/assets/logo/ds_circle_logo1.png";

import { Link } from "react-router-dom";

export default class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105,
        };

        return (
            <div className="logo-main">
                <Link to="/">
                    <img src={logoImg} alt="logo img" style={size} />
                </Link>
            </div>
        );
    }
}
