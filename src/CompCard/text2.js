import React from 'react';

export default class Texto2 extends React.Component{
    render(){
        var elemento=<h5 className="card-title">{this.props.text}</h5>;
        return elemento;
    }
}