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
          ✕
        </button>

        <div className="modal-puntos__banner">🎉 🏅 🎊</div>

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