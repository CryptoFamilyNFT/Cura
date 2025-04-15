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
    <div className="flex flex-col lg:flex-row gap-8 p-6 w-full max-w-6xl mx-auto">
      {/* Sezione Dati Utente */}
      <div className="bg-white/30 rounded-2xl w-full lg:w-1/2 p-8 shadow-xl backdrop-blur-md border border-white/20 transition-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-white/20">
          Dati Personali
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleUserSubmit}>
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={userData.nome}
              onChange={handleUserChange}
              placeholder="Nome"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] focus:border-transparent outline-none transition shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="cognome"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cognome
            </label>
            <input
              id="cognome"
              type="text"
              name="cognome"
              value={userData.cognome}
              onChange={handleUserChange}
              placeholder="Cognome"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] focus:border-transparent outline-none transition shadow-sm"
            />
          </div>
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
              value={userData.email}
              onChange={handleUserChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] focus:border-transparent outline-none transition shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="cellulare"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cellulare
            </label>
            <input
              id="cellulare"
              type="text"
              name="cellulare"
              value={userData.cellulare}
              onChange={handleUserChange}
              placeholder="Cellulare"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] focus:border-transparent outline-none transition shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white rounded-lg font-medium transition bg-[#23687D] hover:bg-[#1d5565] shadow-md hover:shadow-lg"
          >
            Salva Modifiche
          </button>
        </form>
      </div>

      {/* Sezione Password */}
      <div className="bg-white/30 rounded-2xl w-full lg:w-1/2 p-8 shadow-xl backdrop-blur-md border border-white/20 transition-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-white/20">
          Cambia Password
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handlePasswordSubmit}>
          <div>
            <label
              htmlFor="vecchiaPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Vecchia Password
            </label>
            <input
              id="vecchiaPassword"
              type="password"
              name="vecchiaPassword"
              value={passwordData.vecchiaPassword}
              onChange={handlePasswordChange}
              placeholder="Vecchia Password"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] focus:border-transparent outline-none transition shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="nuovaPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nuova Password
            </label>
            <input
              id="nuovaPassword"
              type="password"
              name="nuovaPassword"
              value={passwordData.nuovaPassword}
              onChange={handlePasswordChange}
              placeholder="Nuova Password"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] focus:border-transparent outline-none transition shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="confermaNuovaPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Conferma Nuova Password
            </label>
            <input
              id="confermaNuovaPassword"
              type="password"
              name="confermaNuovaPassword"
              value={passwordData.confermaNuovaPassword}
              onChange={handlePasswordChange}
              placeholder="Conferma Nuova Password"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white/90 focus:ring-2 focus:ring-[#23687D] focus:border-transparent outline-none transition shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white rounded-lg font-medium transition bg-[#23687D] hover:bg-[#1d5565] shadow-md hover:shadow-lg"
          >
            Cambia Password
          </button>
        </form>
      </div>
    </div>
  );
}
