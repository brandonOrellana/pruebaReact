import React from 'react';

export default class Descripcion extends React.Component{
    omponentDidMount() {
        console.log("pase por aca");
      }
    render(){
        var elemento = <td className="table-primary">{this.props.descripcion}</td>;
        return elemento;
    }
}