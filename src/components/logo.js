// Logo Component
import React, { Component } from "react";

import logoImg from "../../static/assets/logo/ds_circle_logo1.png";

export default class Logo extends Component {
    render() {
        return (
            <div className="logo-main">
                <img src={logoImg} alt="logo img" />
            </div>
        );
    }
}
