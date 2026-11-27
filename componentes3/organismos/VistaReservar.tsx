"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ResumenLugar from "../moleculas/ResumenLugar";
import FormularioReserva, { DatosReserva } from "../moleculas/FormularioReserva";
import "./VistaReservar.css";

export default function VistaReservar() {
  const router = useRouter();
  const params = useSearchParams();

  const titulo = params.get("titulo") || "Leceister Square kitchen";
  const ubicacion = params.get("ubicacion") || "31-36 Leicester Square, England";
  const imagen = params.get("imagen") || "/comida.png";
  const invitados = params.get("invitados") || "2 Guests";
  const fecha = params.get("fecha") || "Wed, July 18";
  const hora = params.get("hora") || "7:00 pm";

  const handleProceed = (datos: DatosReserva) => {
    const query = new URLSearchParams({
      titulo,
      ubicacion,
      imagen,
      invitados,
      fecha,
      hora,
      nombre: datos.nombre,
      email: datos.email,
      telefono: datos.telefono,
      ocasion: datos.ocasion,
      solicitud: datos.solicitud || "None",
    }).toString();

    router.push(`/confirmar?${query}`);
  };

  return (
    <main className="vista-reservar">
      <button
        className="vista-reservar__volver"
        onClick={() => router.back()}
        aria-label="Volver"
      >
        <img src="/flecha.svg" alt="Volver" width={18} height={18} />
      </button>
      <h1 className="vista-reservar__titulo">Reservation Preview</h1>
      <p className="vista-reservar__subtitulo">
        Confirm if there are errors in the entered details.
      </p>

      <ResumenLugar
        titulo={titulo}
        ubicacion={ubicacion}
        imagen={imagen}
        invitados={invitados}
        fecha={fecha}
      />

      <FormularioReserva onProceed={handleProceed} />
    </main>
  );
}