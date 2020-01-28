import React from 'react';
import './App.css';
import Imagen from './imagen';
import Texto from './texto';
import Descripcion from './descripcion';

import Fecha from './fecha';
import Imagen2 from './CompCard/imagen2';
import Texto2 from './CompCard/text2';
import Descripcion2 from './CompCard/descripcion2';
import Fecha2 from './CompCard/fecha2';
import Axio from './axio';
function App() {
  var vector = [
    { url: 'https://placeimg.com/80/80/people?id=1', title: 'Titulo 1', description: 'Descripcion imagen 1'},
    { url: 'https://placeimg.com/80/80/people?id=2', title: 'Titulo 2', description: 'Descripcion imagen 2'},
    { url: 'https://placeimg.com/80/80/people?id=3', title: 'Titulo 3', description: 'Descripcion imagen 3'},
    { url: 'https://placeimg.com/80/80/people?id=4', title: 'Titulo 4', description: 'Descripcion imagen 4'}
    ]

    var vector2 = [
      { url: 'https://wallup.net/wp-content/uploads/2018/09/27/290652-abstract-dark-purple-fractal-748x468.jpg', title: 'Titulo 1', description: 'Descripcion imagen 1'},
      { url: 'http://canitbesaturdaynow.com/images/fpics/2611/0da8aba1517c8bf1da88ae0c7c6eeda4.jpg', title: 'Titulo 2', description: 'Descripcion imagen 2'},
      { url: 'http://cdn.desktopwallpapers4.me/wallpapers/abstract/1920x1080/1/5242-purple-swirl-1920x1080-abstract-wallpaper.jpg', title: 'Titulo 3', description: 'Descripcion imagen 3'},
      { url: 'https://i.pinimg.com/originals/f5/ba/8f/f5ba8f71d7812164d2957d5f78befb67.jpg', title: 'Titulo 4', description: 'Descripcion imagen 4'},
      { url: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&w=1000&q=80', title: 'Titulo 5', description: 'Descripcion imagen 5'},
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqT3O5ZopYIbh6mnj_CIkU_XOSz6UWx8OTHOdgMtXKDt15QeAc&s', title: 'Titulo 6', description: 'Descripcion imagen 6'},
      { url: 'https://i2.wp.com/www.123freevectors.com/wp-content/original/167957-abstract-black-blue-and-purple-fractal-wallpaper-graphic.jpg', title: 'Titulo 7', description: 'Descripcion imagen 7'},
      { url: 'https://twistingpixels.art/wp-content/uploads/2019/01/twisting-pixels-artist-feature-lauri-nobles-davis-feature.png', title: 'Titulo 8', description: 'Descripcion imagen 8'},
      { url: 'https://www.wallpaperup.com/uploads/wallpapers/2016/07/12/995580/cdf1ac465368fb250e0c20bfc6e8bcd8-700.jpg', title: 'Titulo 9', description: 'Descripcion imagen 9'},
      { url: 'https://previews.123rf.com/images/mantonino/mantonino0902/mantonino090200054/4301760-purple-abstract-fractal-wallpaper-design-over-a-black-background.jpg', title: 'Titulo 10', description: 'Descripcion imagen 10'},
      { url: 'https://margotalbot.com/wp-content/uploads/2013/07/Bubble.jpg', title: 'Titulo 11', description: 'Descripcion imagen 11'},
      { url: 'https://cdn.suwalls.com/wallpapers/abstract/dark-purple-fractal-waves-53788-1920x1200.jpg', title: 'Titulo 12', description: 'Descripcion imagen 12'}
      ]

    

    var respuesta = vector.map(unElemento=>{
      return(
              <tr>
                  <td className="table-primary"><Imagen imagen={unElemento.url}/></td>
                  <tr className="table-primary"><Texto text={unElemento.title}/> </tr>
                  <tr className="table-primary"><Descripcion descripcion={unElemento.description}/></tr>
                  <tr className="table-primary"><Fecha/></tr>  
              </tr>  
            )
        });


    var respuesta2 = vector2.map(unElemento=>{
      return(
        <div className="card">
            <Imagen2 imagen={unElemento.url}/>
            <div className="card-body">
                <Texto2 text={unElemento.title}/>
                <Descripcion2 descripcion={unElemento.description}/>
                <Fecha2/>
            </div>
       </div>
      )
    });


  return (
    <div>
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <table border="2">
            {respuesta}
        </table>
       </div>
         {respuesta2}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className="container">
      <table className="table table-striped table-dark">
         <thead>
          <tr>
            <th scope="col">postId</th>
            <th scope="col">id</th>
            <th scope="col">name</th>      
            <th scope="col">email</th>  
            <th scope="col">body</th>                 
          </tr>
        </thead>
        <tbody>
          <Axio/>
        </tbody>
   
        </table>
    </div>
         
        
    </div>
    
  );
}

export default App;
