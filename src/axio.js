import React from 'react';
import axios from 'axios';


export default class Axio extends React.Component{
       state = {
        listado: []
      } 
    

    async componentDidMount() {
        var respuesta = await axios.get('https://jsonplaceholder.typicode.com/comments');
       if (respuesta.status===200) {
            this.setState({
                listado:respuesta.data
            });
        }
    }



    render(){
        var respuesta = this.state.listado;
        var salida = respuesta.map(unElemento=>{
            return(
                    <tr>
                        <th scope="row">{unElemento.postId}</th>
                        <td>{unElemento.id}</td>
                        <td>{unElemento.name}</td>
                        <td>{unElemento.email}</td>
                        <td>{unElemento.body}</td>
                    </tr>
                  )
              });
        return salida
    }
}