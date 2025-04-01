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
    confermaVecchiaPassword: "",
    nuovaPassword: "",
    confermaNuovaPassword: "",
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    alert("Dettagli aggiornati con successo!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.nuovaPassword !== passwordData.confermaNuovaPassword) {
      alert("Le nuove password non coincidono!");
      return;
    }
    alert("Password cambiata con successo!");
  };

  return (
    <div className="flex flex-col w-full h-full shadow-md rounded-2xl items-center gap-5 p-10 bg-white/30">
      <h1 className="text-xl font-bold">Impostazioni Utente</h1>
      <div className="grid grid-cols-2 gap-10 ">
        {/* Colonna sinistra - Dettagli */}
        <form onSubmit={handleUserSubmit} className="flex flex-col gap-2">
          <h2 className="font-bold text-center">DETTAGLI</h2>
          <input
            type="text"
            name="nome"
            value={userData.nome}
            onChange={handleUserChange}
            placeholder="Nome"
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            name="cognome"
            value={userData.cognome}
            onChange={handleUserChange}
            placeholder="Cognome"
            className="border p-2 rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleUserChange}
            placeholder="Email"
            className="border p-2 rounded-lg"
          />

          <input
            type="text"
            name="cellulare"
            value={userData.cellulare}
            onChange={handleUserChange}
            placeholder="Cellulare"
            className="border p-2 rounded-lg"
          />
          <button
            type="submit"
            className="mt-2 p-2 bg-green-500 text-white rounded"
          >
            Salva Modifiche
          </button>
        </form>

        {/* Colonna destra - Password */}
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-2">
          <h2 className="font-bold text-center">PASSWORD</h2>
          <input
            type="password"
            name="vecchiaPassword"
            value={passwordData.vecchiaPassword}
            onChange={handlePasswordChange}
            placeholder="Vecchia Password"
            className="border p-2 rounded-lg"
          />
          <input
            type="password"
            name="confermaVecchiaPassword"
            value={passwordData.confermaVecchiaPassword}
            onChange={handlePasswordChange}
            placeholder="Conferma Vecchia Password"
            className="border p-2 rounded-lg"
          />
          <input
            type="password"
            name="nuovaPassword"
            value={passwordData.nuovaPassword}
            onChange={handlePasswordChange}
            placeholder="Nuova Password"
            className="border p-2 rounded-lg"
          />
          <input
            type="password"
            name="confermaNuovaPassword"
            value={passwordData.confermaNuovaPassword}
            onChange={handlePasswordChange}
            placeholder="Conferma Nuova Password"
            className="border p-2 rounded-lg"
          />
          <button
            type="submit"
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Cambia Password
          </button>
        </form>
      </div>
    </div>
  );
}
