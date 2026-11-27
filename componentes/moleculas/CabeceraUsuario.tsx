import BadgePuntos from "../atomos/BadgePuntos";
import "./CabeceraUsuario.css";

interface CabeceraUsuarioProps {
  puntos: number;
}

export default function CabeceraUsuario({ puntos }: CabeceraUsuarioProps) {
  return (
    <header className="cabecera-usuario">
      <div className="cabecera-usuario__izq">
        <h1 className="cabecera-usuario__saludo">Good Morning</h1>
        <BadgePuntos puntos={puntos} />
      </div>
      <div className="cabecera-usuario__der">
        <button className="cabecera-usuario__campana" aria-label="Notificaciones">
          <img src="/campana.svg" alt="Notificaciones" width={22} height={22} />
        </button>
        <div className="cabecera-usuario__avatar" style={{ overflow: "hidden" }}>
          <img
            src="/Ellipse 1.png"
            alt="Usuario"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </header>
  );
}