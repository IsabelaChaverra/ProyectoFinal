import { useState, useEffect } from 'react';
let apiCalificaciones = "http://localhost:5000/calificaiones";



const GestionnotasPro = () => {
    const [notas, setNotas] = useState([]);
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    //
    function getNotas() {
        fetch(apiCalificaciones)
            .then(response => response.json())
            .then(data => setNotas(data))
            .catch(error => console.error( error));
    }
    useEffect(() => {
        getNotas();
    }, []);

  function filtrarNotasUsuario() {
     let notasusuario= notas.filter((nota) => nota.idUsuario === usuario.id)
     console.log(notasusuario);
  }
  filtrarNotasUsuario();


    return (//
    <div>
      <h1>Gestión Calificaciones</h1>
      <div className="card__buttons">
        <Link to="/home/crear-envio" className="card__button">Registrar Calificacion</Link>
      </div>
      <section className="cards">
        {filtradoUsuario.map((item) => (
          <div className="card">
            <h1>Nombre: {usuario.nombre}</h1>
            <p>ID Calificacion: {item.id}</p>
            <p>Descripción: {item.descripcion}</p>
            <p>Destino: {item.destino}</p>
            <p>Fecha: {item.fecha}</p>
            <p>Estado: {item.estado}</p>
            <div className="card__buttons">
              <button onClick={() => eliminarEnvio(item.id)} className="card__button">Eliminar</button>
              <Link className="card__button">Editar</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
    );
}


export default GestionnotasPro