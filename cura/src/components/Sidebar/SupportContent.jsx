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
    <div className="flex flex-col lg:flex-row gap-6 p-6 w-full">
      {/* Sezione Contatti */}
      <div className="bg-white/30 rounded-2xl w-full lg:w-2/5 p-6 shadow-2xl backdrop-blur-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Contatti</h2>
        <div className="flex flex-col gap-4 text-gray-700">
          <ContactItem icon={<Phone />} text="+39 0123 456 789" />
          <ContactItem icon={<Email />} text="supporto@example.com" />
          <ContactItem
            icon={<LocationOn />}
            text="Via Roma 10, Milano, Italia"
          />
        </div>
      </div>

      {/* Sezione Form */}
      <div className="bg-white/30 rounded-2xl w-full lg:w-3/5 p-6 shadow-2xl backdrop-blur-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Richiedi Supporto
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSupportSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="La tua email"
            value={supportData.email}
            onChange={handleChange}
          />
          <TextArea
            name="messaggio"
            placeholder="Descrivi la tua richiesta..."
            value={supportData.messaggio}
            onChange={handleChange}
          />
          <Button type="submit" color="teal">
            Invia Richiesta
          </Button>
        </form>
      </div>
    </div>
  );
}

// Componenti di supporto

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <span className="text-primary">{icon}</span>
    <span>{text}</span>
  </div>
);

const Input = ({ name, value, onChange, placeholder, type = "text" }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-2 border border-gray-300 rounded-xl bg-white/80 focus:ring-2 focus:ring-teal-500 outline-none transition"
  />
);

const TextArea = ({ name, value, onChange, placeholder }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full h-40 p-2 border border-gray-300 rounded-xl bg-white/80 focus:ring-2 focus:ring-teal-500 outline-none transition resize-none"
  />
);

const Button = ({ children, type = "button", color = "teal" }) => {
  const colorClass = {
    teal: "bg-[#23687D] hover:bg-[#1d5565]",
    green: "bg-green-600 hover:bg-green-700",
  }[color];

  return (
    <button
      type={type}
      className={`w-full p-2 text-white rounded-xl font-medium transition ${colorClass}`}
    >
      {children}
    </button>
  );
};
