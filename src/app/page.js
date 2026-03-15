"use client"; // Para que funcionen los clics y sonidos después

export default function Pagina() {
  return (
    <main className="contenedor-principal">
      <div className="tarjeta">
        <h1>Mi Proyecto Nuevo</h1>
        <p>Empezando desde cero para aprender mejor.</p>
        <button className="boton-accion"
          onClick={() => {
            const audio = new Audio('/smash.mp3');
            audio.play();
          }}
          >Smash!
        </button>
      </div>
    </main>
  );
}