import { useState, useEffect } from "react";
import { ContactSupport, EditNote, Logout } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarButton from "./SidebarButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function Sidebar({
  setPageContent,
  user = {
    username: "Mario Rossi",
    img: '../public/mascotte_2.PNG',
  },
}) {
  const [activeButton, setActiveButton] = useState("Diario");
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "Mario Rossi",
    img: "../../../public/Images/mascotte_2.PNG",
  });

  useEffect(() => {
    const fetchedUserData = {
      username: "Mario Rossi",
      img: "",
    };

    setUserData({
      username: fetchedUserData.username,
      img: fetchedUserData.img || "../public/Images/mascotte_2.PNG",
    });
  }, []);

  const handleLogout = () => {
    alert("Logout eseguito con successo!");
    navigate("/login");
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({
          ...prevData,
          img: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-80 h-full bg-white/30 backdrop-blur-md shadow-xl rounded-2xl flex flex-col p-10">
      {/* Profilo utente */}
      <div className="flex flex-col items-center gap-3 mb-6 relative">
        <div
          onClick={() => document.getElementById("profileImageInput").click()}
          className="cursor-pointer relative group w-20 h-20"
        >
          {/* Immagine del profilo */}
          <img
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-md transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
            src={userData.img || "/path/to/default/profile.jpg"}
            alt="user_propic"
          />

          {/* Overlay trasparente con icona */}
          <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <EditIcon sx={{ color: "white", fontSize: "28px" }} />
          </div>

          {/* Input file */}
          <input
            id="profileImageInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleProfileImageChange}
          />
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 tracking-wide">Profilo</p>
          <p className="text-lg font-semibold text-[#23687D]">
            {userData.username}
          </p>
        </div>
      </div>

      {/* Sezione centrale con pulsanti centrati verticalmente */}
      <div className="flex-grow flex flex-col items-center justify-center gap-4">
        <SidebarButton
          icon={<EditNote sx={{ color: "white" }} />}
          text="Diario"
          isActive={activeButton === "Diario"}
          onClick={() => {
            setPageContent("Diario");
            setActiveButton("Diario");
          }}
        />
        <SidebarButton
          icon={<SettingsIcon sx={{ color: "white" }} />}
          text="Impostazioni"
          isActive={activeButton === "Impostazioni"}
          onClick={() => {
            setPageContent("Impostazioni");
            setActiveButton("Impostazioni");
          }}
        />
        <SidebarButton
          icon={<ContactSupport sx={{ color: "white" }} />}
          text="Supporto"
          isActive={activeButton === "Supporto"}
          onClick={() => {
            setPageContent("Supporto");
            setActiveButton("Supporto");
          }}
        />
      </div>

      {/* Logout con nuova grafica */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#23687D] font-semibold border border-[#23687D] hover:bg-[#23687D] hover:text-white transition-all duration-300"
        >
          <Logout fontSize="small" />
          Esci
        </button>
      </div>
    </div>
  );
}
