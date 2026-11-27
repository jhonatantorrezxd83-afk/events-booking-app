"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ResumenLugar from "@/componentes3/moleculas/ResumenLugar";
import BotonMorado from "@/componentes3/atomos/BotonMorado";
import BotonSecundario from "../atomos/BotonSecundario";
import DatoResumen from "../atomos/DatoResumen";
import ModalPuntos from "../moleculas/ModalPuntos";
import "./VistaConfirmar.css";

export default function VistaConfirmar() {
  const router = useRouter();
  const params = useSearchParams();
  const [mostrarModal, setMostrarModal] = useState(false);

  const titulo = params.get("titulo") || "Leceister Square kitchen";
  const ubicacion = params.get("ubicacion") || "31-36 Leicester Square, England";
  const imagen =
    params.get("imagen") ||
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80";
  const invitados = params.get("invitados") || "2 Guests";
  const fecha = params.get("fecha") || "Wed, July 18";

  const nombre = params.get("nombre") || "Adah Jonathan Uchenna";
  const email = params.get("email") || "jonathanadah11@gmail.com";
  const telefono = params.get("telefono") || "+44 20 7234 3456";
  const ocasion = params.get("ocasion") || "Birthday";
  const solicitud =
    params.get("solicitud") ||
    "Please, I do not want a seat close to an Air-Conditioner if you have any as I have friends who are allergic to cold.";

  return (
    <main className="vista-confirmar">
      <button
        className="vista-confirmar__volver"
        onClick={() => router.back()}
        aria-label="Volver"
      >
        ‹
      </button>

      <h1 className="vista-confirmar__titulo">Reservation Preview</h1>
      <p className="vista-confirmar__subtitulo">
        Confirm if there are errors in the entered details.
      </p>

      <ResumenLugar
        titulo={titulo}
        ubicacion={ubicacion}
        imagen={imagen}
        invitados={invitados}
        fecha={fecha}
      />

      <section className="vista-confirmar__detalles">
        <h2 className="vista-confirmar__seccion">Dinner Details</h2>
        <DatoResumen label="Full Name" valor={nombre} />
        <DatoResumen label="Email Address" valor={email} />
        <DatoResumen label="Phone Number" valor={telefono} />
        <DatoResumen label="Select an Occasion" valor={ocasion} />
        <DatoResumen label="Add a Special Request" valor={solicitud} />
      </section>

      <div className="vista-confirmar__acciones">
        <BotonSecundario
          texto="Edit Reservation Details"
          onClick={() => router.back()}
        />
        <BotonMorado
          texto="Reserve Now"
          onClick={() => setMostrarModal(true)}
        />
      </div>

      {mostrarModal && (
        <ModalPuntos
          onCerrar={() => setMostrarModal(false)}
          onNuevaReserva={() => router.push("/")}
        />
      )}
    </main>
  );
}