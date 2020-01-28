import React from 'react';
export default class Fecha2 extends React.Component{
    constructor(props) {
        super(props)
       this.state = {
        fecha: new Date()
      } 
      this.actualizar=this.actualizar.bind(this);
    }
    componentDidMount() {
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
                <p class="text-monospace">{elemento}</p>
                <button onClick={this.actualizar} className="btn btn-primary btn-sm"><h6>  Actualizar  </h6></button>
         </>
             );
    }
    
}