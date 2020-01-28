import React from 'react';



export default class Texto extends React.Component{
    render(){
        var elemento = <td className="table-primary">{this.props.text}</td>;
        return elemento;
    }
}