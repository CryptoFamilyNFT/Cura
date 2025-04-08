import { useState } from "react";

export default function Impostazioni() {
  const [userData, setUserData] = useState({
    nome: "",
    cognome: "",
    email: "",
    cellulare: "",
  });

  const [passwordData, setPasswordData] = useState({
    vecchiaPassword: "",
    nuovaPassword: "",
    confermaNuovaPassword: "",
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const { nome, cognome, email, cellulare } = userData;
    if (!nome || !cognome || !email || !cellulare) {
      alert("Compila tutti i campi per salvare.");
      return;
    }
    if (!email.includes("@")) {
      alert("Inserisci un'email valida.");
      return;
    }
    alert("Dati utente aggiornati con successo!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const { vecchiaPassword, nuovaPassword, confermaNuovaPassword } =
      passwordData;

    if (!vecchiaPassword || !nuovaPassword || !confermaNuovaPassword) {
      alert("Compila tutti i campi password.");
      return;
    }

    if (nuovaPassword !== confermaNuovaPassword) {
      alert("Le nuove password non coincidono.");
      return;
    }

    alert("Password aggiornata con successo!");
    setPasswordData({
      vecchiaPassword: "",
      nuovaPassword: "",
      confermaNuovaPassword: "",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full gap-6 p-6">
      <div className="w-full flex flex-col gap-6 bg-white/30 rounded-2xl shadow-2xl p-6 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Impostazioni Utente
        </h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Dettagli Utente */}
          <form
            onSubmit={handleUserSubmit}
            className="flex flex-col gap-4 w-full lg:w-1/2 bg-white/50 p-6 rounded-2xl shadow-inner"
          >
            <h2 className="font-semibold text-lg text-gray-700 text-center">
              Dati Personali
            </h2>
            <Input
              name="nome"
              value={userData.nome}
              onChange={handleUserChange}
              placeholder="Nome"
            />
            <Input
              name="cognome"
              value={userData.cognome}
              onChange={handleUserChange}
              placeholder="Cognome"
            />
            <Input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleUserChange}
              placeholder="Email"
            />
            <Input
              name="cellulare"
              value={userData.cellulare}
              onChange={handleUserChange}
              placeholder="Cellulare"
            />
            <Button type="submit" color="green">
              Salva Modifiche
            </Button>
          </form>

          {/* Cambia Password */}
          <form
            onSubmit={handlePasswordSubmit}
            className="flex flex-col gap-4 w-full lg:w-1/2 bg-white/50 p-6 rounded-2xl shadow-inner"
          >
            <h2 className="font-semibold text-lg text-gray-700 text-center">
              Cambia Password
            </h2>
            <Input
              type="password"
              name="vecchiaPassword"
              value={passwordData.vecchiaPassword}
              onChange={handlePasswordChange}
              placeholder="Vecchia Password"
            />
            <Input
              type="password"
              name="nuovaPassword"
              value={passwordData.nuovaPassword}
              onChange={handlePasswordChange}
              placeholder="Nuova Password"
            />
            <Input
              type="password"
              name="confermaNuovaPassword"
              value={passwordData.confermaNuovaPassword}
              onChange={handlePasswordChange}
              placeholder="Conferma Nuova Password"
            />
            <Button type="submit" color="blue">
              Cambia Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

const Input = ({ name, value, onChange, placeholder, type = "text" }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border border-gray-300 p-2 rounded-xl bg-white/80 focus:ring-2 focus:ring-teal-500 outline-none transition"
  />
);

const Button = ({ type, color = "blue", children }) => {
  const colorClass = {
    green: "bg-green-600 hover:bg-green-700",
    blue: "bg-blue-500 hover:bg-blue-600",
  }[color];

  return (
    <button
      type={type}
      className={`mt-2 p-2 ${colorClass} text-white rounded-xl font-medium transition`}
    >
      {children}
    </button>
  );
};
