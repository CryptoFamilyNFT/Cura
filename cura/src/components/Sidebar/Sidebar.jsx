import SidebarButton from "./SidebarButton";
import { ContactSupport, EditNote } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

export default function Sidebar({
  setPageContent,
  img = "src/assets/mascotte_2.PNG",
  username = "Mario Rossi",
}) {
  const [activeButton, setActiveButton] = useState("Diario"); // Aggiungi lo stato per tenere traccia del pulsante attivo

  return (
    <div className="w-80 h-full bg-white/30 shadow-2xl rounded-2xl flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center p-10">
        <img className="w-15 rounded-full" src={img} alt="user_propic" />
        <span className="font-bold">USER PROFILE</span>
        <span>{username}</span>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-3 justify-center">
          <div>
            <SidebarButton
              icon={<EditNote sx={{ color: "white" }} />}
              text={"Diario"}
              isActive={activeButton === "Diario"} // Controlla se è attivo
              width={"200px"}
              onClick={() => {
                setPageContent("Diario");
                setActiveButton("Diario"); // Imposta il pulsante attivo
              }}
            />
          </div>
          <div>
            <SidebarButton
              icon={<SettingsIcon sx={{ color: "white" }} />}
              text={"Impostazioni"}
              isActive={activeButton === "Impostazioni"} // Controlla se è attivo
              width={"200px"}
              onClick={() => {
                setPageContent("Impostazioni");
                setActiveButton("Impostazioni"); // Imposta il pulsante attivo
              }}
            />
          </div>

          <div>
            <SidebarButton
              width={"200px"}
              text={"Supporto"}
              icon={<ContactSupport sx={{ color: "white" }} />}
              isActive={activeButton === "Supporto"} // Controlla se è attivo
              onClick={() => {
                setPageContent("Supporto");
                setActiveButton("Supporto"); // Imposta il pulsante attivo
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-20">
        <span>ESCI</span>
      </div>
    </div>
  );
}
