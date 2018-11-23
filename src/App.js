import React, { Component } from 'react';
import Header from './componentes/header/Header';
import Noticias from './componentes/noticias/Noticias';
import FormCategoria from "./componentes/formulario-categoria/FormCategoria";

class App extends Component {

  state = {
    noticias: []
  }
  
  componentDidMount() {
    this.cosultarNoticias();
  }

  cosultarNoticias = (categoria = 'general') => {
    
    const llave = "5168b1b50ded4126aa33763fc45597d5";
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${llave}`;
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(noticias => {
      this.setState({
        noticias: noticias.articles
      })
    })
  }
  
  render() {
    return (
      <div >
        <Header titulo="Noticias" />
        <div className="container white contenedor-noticias">
          < FormCategoria 
            cosultarNoticias={this.cosultarNoticias}
          />
          <Noticias
            noticias={this.state.noticias}
          />
        </div>
      </div>
    );
  }
}

export default App;
