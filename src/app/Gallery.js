import { getImageUrl } from './utils.js';
import Perfil from './Perfiles.js';

const Persona1 = {
  nombre: "Katsuko Saruhashi",
  profesion: "geoquímica",
  premios: 2,
  descubrimiento: "un método para medir el dióxido de carbono en el agua de mar",
  src: getImageUrl('szV5sdG'),
  alt: "Maria Skłodowska-Curie",
  width: 70,
  height: 70
};
const Persona2 = {
  nombre: "Maria Skłodowska-Curie",
  profesion: "física y química",
  premios: 4,
  descubrimiento: "polonio (elemento químico)",
  src :getImageUrl('YfeOqp2'),
  alt : "Katsuko Saruhashi",
  width: 70,
  height :70,
};


export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Perfil />
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            geoquímica
          </li>
          <li>
            <b>Premios: 2 </b> 
            (Premio Miyake de geoquímica, Premio Tanaka)
          </li>
          <li>
            <b>Descubrió: </b>
            un método para medir el dióxido de carbono en el agua de mar
          </li>
        </ul>
      </section>
    </div>
  );
}