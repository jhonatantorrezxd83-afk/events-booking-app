import "./SeccionMapaContacto.css";

interface SeccionMapaContactoProps {
  titulo: string;
}

export default function SeccionMapaContacto({ titulo }: SeccionMapaContactoProps) {
  return (
    <section className="mapa-contacto">
      <h3 className="mapa-contacto__titulo">About {titulo}</h3>
      <p className="mapa-contacto__descripcion">
        {titulo} introduces a Mexican and Peruvian dining experience serving
        small plates and innovative cocktails. From exquisite tacos to fine
        skewered meats from the Peruvian barbecue, the menu takes diners on a
        journey through the unique flavours of South America.
      </p>

      <div className="mapa-contacto__mapa">
        <img
          src="/mapa.png"
          alt="Mapa de ubicación"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <span className="mapa-contacto__badge">⌖ View Map Larger</span>
      </div>

      <div className="mapa-contacto__lista">
        <div className="mapa-contacto__item">
          <img src="/ubicacion_morado.svg" alt="Dirección" width={16} height={16} />
          <span>Get Directions</span>
        </div>
        <div className="mapa-contacto__item">
          <img src="/telefono_morado.svg" alt="Teléfono" width={16} height={16} />
          <span>+34 213 00 68 94</span>
        </div>
        <div className="mapa-contacto__item">
          <img src="/mundo.svg" alt="Web" width={16} height={16} />
          <span>http://leceisterkitchen.com?</span>
        </div>
      </div>
    </section>
  );
}