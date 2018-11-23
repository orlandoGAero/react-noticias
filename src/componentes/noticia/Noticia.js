import React from 'react';
import PropTypes from 'prop-types';

const Noticia = (props) => {
    let {urlToImage, description, title, source, url} = props.noticia;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title"><small>{source.name}</small></span>
                </div>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>    
            <div className="card-action">
                <a  href={url} 
                    target="_blank"
                    className="waves-effects waves-light btn">
                    Leer más
                </a>
            </div>    
        </div>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.shape({
        urlToImage: PropTypes.string,
        description: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
        source: PropTypes.object
    })
}

export default Noticia;