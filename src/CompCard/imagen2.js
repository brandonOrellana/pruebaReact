import React from 'react';

export default class Imagen2 extends React.Component{
    render(){
      return <img src={this.props.imagen} className="card-img-top"></img>;
    }
}