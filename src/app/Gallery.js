import React from 'react';
import { getImageUrl } from './utils.js';
import Perfil from './Perfiles.js';

const Persona1 = {
  nombre: "Katsuko Saruhashi",
  profesion: "geoquímica",
  premios: 2,
  descripcion:"Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci",
  descubrimientos: "un método para medir el dióxido de carbono en el agua de mar",
  src: getImageUrl('szV5sdG'),
  alt: "Maria Skłodowska-Curie",
  width: 70,
  height: 70
};

const Persona2 = {
  nombre: "Maria Skłodowska-Curie",
  profesion: "física y química",
  premios: 4,
  descripcion: "Premio Miyake de geoquímica, Premio Tanaka",
  descubrimientos: "polonio (elemento químico)",
  src :getImageUrl('YfeOqp2'),
  alt : "Katsuko Saruhashi",
  width: 70,
  height: 70
};


export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Perfil {...Persona1}/>
      <Perfil {...Persona2}/>
    </div>
  );
}