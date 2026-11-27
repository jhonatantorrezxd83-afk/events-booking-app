import { Suspense } from "react";
import VistaDetalle from "@/componentes2/organismos/VistaDetalle";

export default function DetallePage() {
  return (
    <Suspense fallback={<p style={{ padding: 20 }}>Loading...</p>}>
      <VistaDetalle />
    </Suspense>
  );
}