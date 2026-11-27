import { Suspense } from "react";
import VistaReservar from "@/componentes3/organismos/VistaReservar";

export default function ReservarPage() {
  return (
    <Suspense fallback={<p style={{ padding: 20 }}>Loading...</p>}>
      <VistaReservar />
    </Suspense>
  );
}