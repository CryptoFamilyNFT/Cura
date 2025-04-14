import { useState, useEffect } from "react";
import { ContactSupport, EditNote } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router";
import SidebarButton from "./SidebarButton";

export default function Sidebar({
  setPageContent,
  user = {
    username: "Mario Rossi",
    img: "src/assets/mascotte_2.PNG",
  },
}) {
  const [activeButton, setActiveButton] = useState("Diario");
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "Mario Rossi",
    img: "src/assets/mascotte_2.PNG",
  });

  useEffect(() => {
    const fetchedUserData = {
      username: "Mario Rossi",
      img: "",
    };

    setUserData({
      username: fetchedUserData.username,
      img: fetchedUserData.img || "src/assets/mascotte_2.PNG",
    });
  }, []);

  // Funzione per il logout
  const handleLogout = () => {
    alert("Logout eseguito con successo!");
    navigate("/login");
  };

  return (
    <div className="w-80 h-full bg-white/30 shadow-2xl rounded-2xl flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center p-10">
        <img
          className="w-15 rounded-full"
          src={userData.img || "src/assets/mascotte_2.PNG"}
          alt="user_propic"
        />
        <span className="font-bold">USER PROFILE</span>
        <span>{userData.username}</span>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-3 justify-center">
          <div>
            <SidebarButton
              icon={<EditNote sx={{ color: "white" }} />}
              text={"Diario"}
              isActive={activeButton === "Diario"}
              width={"200px"}
              onClick={() => {
                setPageContent("Diario");
                setActiveButton("Diario");
              }}
            />
          </div>
          <div>
            <SidebarButton
              icon={<SettingsIcon sx={{ color: "white" }} />}
              text={"Impostazioni"}
              isActive={activeButton === "Impostazioni"}
              width={"200px"}
              onClick={() => {
                setPageContent("Impostazioni");
                setActiveButton("Impostazioni");
              }}
            />
          </div>

          <div>
            <SidebarButton
              width={"200px"}
              text={"Supporto"}
              icon={<ContactSupport sx={{ color: "white" }} />}
              isActive={activeButton === "Supporto"}
              onClick={() => {
                setPageContent("Supporto");
                setActiveButton("Supporto");
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-20">
        <button
          onClick={handleLogout}
          className="text-white hover:text-[#23687D]"
        >
          ESCI
        </button>
      </div>
    </div>
  );
}
