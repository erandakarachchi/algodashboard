import React, { Component } from 'react'
import "./common.css";

export default class SiteHeader extends Component {
  render() {
    const { onVisualizeClick } = this.props;
        return (
            <div className="header">
            <div className="logo">Algo Dashboard</div>
            <button onClick={onVisualizeClick} className="btn-visualize">Visualize</button>
          </div>
        )
    }
}
