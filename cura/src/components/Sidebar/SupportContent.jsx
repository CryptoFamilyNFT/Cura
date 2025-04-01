import { Email, Phone, LocationOn } from "@mui/icons-material";

export default function SupportContent() {
  return (
    <div className="flex gap-6 p-6">
      {/* Sezione Contatti */}
      <div className="bg-white/30 rounded-lg w-2/5 p-6 shadow-md">
        <h2 className="text-xl font-semibold">Contatti</h2>
        <div className="flex flex-col p-4">
          <div className="flex items-center gap-3 mt-4">
            <Phone className="text-primary" />
            <span>+39 0123 456 789</span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <Email className="text-primary" />
            <span>supporto@example.com</span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <LocationOn className="text-primary" />
            <span>Via Roma 10, Milano, Italia</span>
          </div>
        </div>
      </div>

      {/* Sezione Form di Supporto */}
      <div className=" h-100 w-3/5 bg-white/30 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold">Richiedi Supporto</h2>
        <form className="space-y-4 mt-4">
          <input
            type="email"
            placeholder="La tua email"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Descrivi la tua richiesta..."
            className="w-full h-40 p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-[#23687D] text-white p-2 rounded"
          >
            Invia richiesta
          </button>
        </form>
      </div>
    </div>
  );
}
