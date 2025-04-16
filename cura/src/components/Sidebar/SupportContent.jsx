import { Email, Phone, LocationOn } from "@mui/icons-material";
import { useState } from "react";

export default function SupportContent() {
  const [supportData, setSupportData] = useState({
    email: "",
    messaggio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupportData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    const { email, messaggio } = supportData;

    if (!email || !messaggio) {
      alert("Compila tutti i campi.");
      return;
    }

    if (!email.includes("@")) {
      alert("Inserisci un'email valida.");
      return;
    }

    alert("Richiesta inviata con successo!");
    setSupportData({ email: "", messaggio: "" });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 w-full max-w-6xl mx-auto">
      {/* Sezione Contatti */}
      <div className="bg-white/30 rounded-2xl w-full lg:w-2/5 p-8 shadow-xl backdrop-blur-md border border-white/20  transition-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-white/20">
          Contatti
        </h2>
        <div className="flex flex-col gap-6 text-gray-700">
          <div className="flex items-start gap-4">
            <Phone className="text-[#23687D] mt-1" />
            <div>
              <p className="font-medium text-gray-800">+39 0123 456 789</p>
              <p className="text-sm text-gray-500">Lun-Ven, 9:00-18:00</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Email className="text-[#23687D] mt-1" />
            <div>
              <p className="font-medium text-gray-800">supporto@example.com</p>
              <p className="text-sm text-gray-500">Rispondiamo entro 24h</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <LocationOn className="text-[#23687D] mt-1" />
            <div>
              <p className="font-medium text-gray-800">
                Via Roma 10, Milano, Italia
              </p>
              <p className="text-sm text-gray-500">Sede principale</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sezione Form */}
      <div className="bg-white/30 rounded-2xl w-full lg:w-3/5 p-8 shadow-xl backdrop-blur-md border border-white/20  transition-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-white/20">
          Richiedi Supporto
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSupportSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="La tua email"
              value={supportData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] focus:border-transparent outline-none transition shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="messaggio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Il tuo messaggio
            </label>
            <textarea
              id="messaggio"
              name="messaggio"
              placeholder="Descrivi la tua richiesta..."
              value={supportData.messaggio}
              onChange={handleChange}
              className="w-full h-40 p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] focus:border-transparent outline-none transition resize-none shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white rounded-lg font-medium transition bg-[#23687D] hover:bg-[#1d5565] shadow-md hover:shadow-lg"
          >
            Invia Richiesta
          </button>
        </form>
      </div>
    </div>
  );
}
