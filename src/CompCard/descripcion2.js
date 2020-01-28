import React from 'react';

export default class Descripcion2 extends React.Component{
    render(){
        var elemento = <p class="card-text">{this.props.descripcion}</p>;
        return elemento;
    }
}