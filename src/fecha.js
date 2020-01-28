import React from 'react';

export default class Fecha extends React.Component{
    constructor(props) {
        super(props)
       this.state = {
        fecha: new Date()
      } 
      this.actualizar=this.actualizar.bind(this);
    }

    componentDidMount() {
        console.log("pase por aca");
        this.id = setInterval(()=>this.actualizar(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.id);
      }

    actualizar(){
        this.setState({
            fecha: new Date()
        })
    }
    
    render(){
        var elemento = this.state.fecha.toLocaleString();
         return (
         <>
            <tr>
                <td className="table-primary">{elemento}</td> 
                <td className="table-primary"><button onClick={this.actualizar} className="btn btn-outline-primary">Actualizar</button></td>
            </tr>
         </>
             );
    }
    
}