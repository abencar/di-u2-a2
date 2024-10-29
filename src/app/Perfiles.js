import React from 'react';

export default function Perfil({ nombre, profesion, premios, descripcion, descubrimientos, src, alt, width, height }) {
  return (
    <section className="perfil">
      <h2>{nombre}</h2>
      <img
        className="avatar"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <ul>
        <li>
          <b>Profesión: </b> 
          {profesion}
        </li>
        <li>
          <b>Premios: </b> 
          {premios} ({descripcion})
        </li>
        <li>
          <b>Descubrió: </b>
          {descubrimientos}
        </li>
      </ul>
    </section>
  );
}