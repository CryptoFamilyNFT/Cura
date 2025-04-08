import Sidebar from "./Components/Sidebar";
import ContentProfile from "./Components/ContentProfile";
import { useState } from "react";

export default function MainLayout() {
  const [pageContent, setPageContent] = useState("Diario");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-t from-[#23687D] to-[#A1C877]">
      {/* Mobile toggle */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white text-xl font-bold"
        >
          {isSidebarOpen ? "Chiudi" : "Menu"}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block fixed md:static top-0 left-0 h-full w-64 bg-white/30 md:bg-transparent z-50 md:z-0 p-3 backdrop-blur-md shadow-2xl md:shadow-none`}
      >
        <Sidebar
          setPageContent={(content) => {
            setPageContent(content);
            setIsSidebarOpen(false);
          }}
        />
      </div>

      {/* Contenuti */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 flex items-center justify-center">
        <div className="bg-white/30 rounded-2xl shadow-2xl w-full max-w-screen-xl p-10 mx-auto min-h-[700px]">
          <ContentProfile section={pageContent} />
        </div>
      </div>
    </div>
  );
}
