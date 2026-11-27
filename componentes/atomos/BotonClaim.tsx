"use client";
import "./BotonClaim.css";

interface BotonClaimProps {
  reclamado: boolean;
  onClick: () => void;
}

export default function BotonClaim({ reclamado, onClick }: BotonClaimProps) {
  return (
    <button
      className="boton-claim"
      onClick={onClick}
      disabled={reclamado}
    >
      {reclamado ? "Claimed" : "Claim"}
    </button>
  );
}