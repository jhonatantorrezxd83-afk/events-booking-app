"use client";
import { useEffect, useState } from "react";
import CabeceraUsuario from "../moleculas/CabeceraUsuario";
import BannerPuntos from "../moleculas/BannerPuntos";
import FilaCarrusel from "../moleculas/FilaCarrusel";
import BarraNavegacionInferior from "../moleculas/BarraNavegacionInferior";
import { Evento } from "../moleculas/TarjetaEvento";
import "./VistaHome.css";

const API_URL = "https://6b097b7e6a4ecd58b007709c.mockapi.io/api/v1";

export default function VistaHome() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [cargando, setCargando] = useState(true);
  const [puntos, setPuntos] = useState(850);
  const [reclamado, setReclamado] = useState(false);

  useEffect(() => {
    const puntosGuardados = localStorage.getItem("loyalty_points");
    if (puntosGuardados) {
      setPuntos(Number(puntosGuardados));
    } else {
      localStorage.setItem("loyalty_points", "850");
    }

    const claimGuardado = localStorage.getItem("claim_usado");
    if (claimGuardado === "true") {
      setReclamado(true);
    }

    fetch(`${API_URL}/eventos`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setEventos(data);
      })
      .catch((err) => console.error("Error cargando eventos:", err))
      .finally(() => setCargando(false));
  }, []);

  const handleClaim = () => {
    if (!reclamado) {
      const nuevosPuntos = puntos + 50;
      setPuntos(nuevosPuntos);
      setReclamado(true);
      localStorage.setItem("loyalty_points", String(nuevosPuntos));
      localStorage.setItem("claim_usado", "true");
    }
  };

  return (
    <main className="vista-home">
      <div className="vista-home__contenido">
        <CabeceraUsuario puntos={puntos} />
        <BannerPuntos
          puntos={puntos}
          reclamado={reclamado}
          onClaim={handleClaim}
        />

        {cargando ? (
          <p style={{ textAlign: "center", padding: 24, color: "#666" }}>
            Cargando eventos...
          </p>
        ) : (
          <>
            <FilaCarrusel
              titulo="Fine Dining"
              eventos={eventos.filter((e) => e.categoria === "Fine Dining")}
            />
            <FilaCarrusel
              titulo="Live Sport"
              eventos={eventos.filter((e) => e.categoria === "Live Sport")}
            />
            <FilaCarrusel
              titulo="Music Events"
              eventos={eventos.filter((e) => e.categoria === "Music Events")}
            />
          </>
        )}
      </div>
      <BarraNavegacionInferior />
    </main>
  );
}