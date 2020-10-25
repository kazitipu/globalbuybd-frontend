import React, { Component } from 'react';
import './image-zoom.css'

export default class ImageZoom extends Component {
    render() {
        const {image} = this.props;

        return (
            <div className="image-container">
            <img src={`${image}`}  className="img-fluid image_zoom_cls-0" />
            </div>
        );
    }
}