"use client";
import BotonClaim from "../atomos/BotonClaim";
import "./BannerPuntos.css";

interface BannerPuntosProps {
  puntos: number;
  reclamado: boolean;
  onClaim: () => void;
}

export default function BannerPuntos({
  puntos,
  reclamado,
  onClaim,
}: BannerPuntosProps) {
  return (
    <section className="banner-wrapper">
      <div className="banner-puntos">
        <div className="banner-puntos__superior">
          <div>
            <p className="banner-puntos__etiqueta">Loyalty Points</p>
            <p className="banner-puntos__valor">
              {puntos} <span>Pts</span>
            </p>
          </div>
          <span className="banner-puntos__regalo">🎁</span>
        </div>

        <p className="banner-puntos__subtitulo">
          Earn more points and Enjoy exclusive benefits
        </p>

        <div className="banner-puntos__caja-claim">
          <div>
            <p className="banner-puntos__free">Free 50 Points</p>
            <p className="banner-puntos__tiempo">Time Remaining: 10:45:22</p>
          </div>
          <BotonClaim reclamado={reclamado} onClick={onClaim} />
        </div>
      </div>

      <div className="banner-indicadores">
        <span className="banner-indicadores__dot banner-indicadores__dot--activo" />
        <span className="banner-indicadores__dot" />
        <span className="banner-indicadores__dot" />
        <span className="banner-indicadores__dot" />
      </div>
    </section>
  );
}