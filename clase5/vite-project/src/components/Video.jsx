import React, { Component } from 'react';

export default class Video extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            estrellas:0
        }

    }

    Valorar = () => {
        setEstrellas(estrellas+1);
    }
    render() {
        return (
        <>
        <div className="video-container">
            <div className="video-image">
              <img src={props.thumbnail} alt={props.title} />
            </div>
            <div className="video-info">
              <h3>{props.title}</h3>
              <button onClick={valorar}>Valorar</button> {estrellas} estrellas
              <p>Upload date: {props.dateAdded}</p>
              <h4>Channel's Title: {props.channel}</h4>
              <p>{props.description}</p>
            </div>
        </div>
        );
        </>
}
// export default Video;