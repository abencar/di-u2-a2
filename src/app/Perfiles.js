
export default function Perfil() {
  return(<section className="perfil">
    <h2>Maria Skłodowska-Curie</h2>
    <img
      className="avatar"
      src={getImageUrl('szV5sdG')}
      alt="Maria Skłodowska-Curie"
      width={70}
      height={70}
    />
    <ul>
      <li>
        <b>Profesión: </b> 
        física y química
      </li>
      <li>
        <b>Premios: 4 </b> 
        (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)
      </li>
      <li>
        <b>Descubrió: </b>
        polonio (elemento químico)
      </li>
    </ul>
  </section>)
}