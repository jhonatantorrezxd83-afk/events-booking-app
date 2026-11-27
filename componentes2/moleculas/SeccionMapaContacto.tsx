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
        <iframe
          title="Mapa de ubicación"
          className="mapa-contacto__iframe"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.135%2C51.508%2C-0.125%2C51.514&layer=mapnik"
        />
        <span className="mapa-contacto__badge">⌖ View Map Larger</span>
      </div>

      <div className="mapa-contacto__lista">
        <div className="mapa-contacto__item">
          <span>📍</span>
          <span>Get Directions</span>
        </div>
        <div className="mapa-contacto__item">
          <span>📞</span>
          <span>+34 213 00 68 94</span>
        </div>
        <div className="mapa-contacto__item">
          <span>🌐</span>
          <span>http://leceisterkitchen.com?</span>
        </div>
      </div>
    </section>
  );
}