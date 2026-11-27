"use client";
import BotonMorado from "@/componentes3/atomos/BotonMorado";
import "./ModalPuntos.css";

interface ModalPuntosProps {
  onCerrar: () => void;
  onNuevaReserva: () => void;
}

export default function ModalPuntos({
  onCerrar,
  onNuevaReserva,
}: ModalPuntosProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-puntos">
        <button
          className="modal-puntos__cerrar"
          onClick={onCerrar}
          aria-label="Cerrar"
        >
          <img src="/boton X.svg" alt="Cerrar" width={14} height={14} />
        </button>

        <div
          className="modal-puntos__banner"
          style={{
            backgroundImage: 'url("/confeti.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 150,
          }}
        >
          <img src="/medalla.svg" alt="Medalla" width={72} height={72} />
        </div>

        <div className="modal-puntos__cuerpo">
          <h2 className="modal-puntos__titulo">
            100 <span>Pts</span>
          </h2>
          <p className="modal-puntos__texto">
            You have earned 100 Loyalty Points for the reservation done.
          </p>
          <BotonMorado
            texto="Make another Reservation"
            onClick={onNuevaReserva}
          />
        </div>
      </div>
    </div>
  );
}