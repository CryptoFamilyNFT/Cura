import Sidebar from "../components/Sidebar/Sidebar";
import ContentProfile from "../components/Sidebar/ContentProfile";
import { useState } from "react";

export default function MainLayout() {
  const [pageContent, setPageContent] = useState("Diario");

  return (
    <div className="flex bg-gradient-to-t from-[#23687D] to-[#A1C877] h-screen">
      {/* Sidebar */}
      <div className="p-3">
        <Sidebar setPageContent={setPageContent} />
      </div>

      {/* Contenuti */}
      <div className="flex-1 h-full p-6">
        <ContentProfile section={pageContent} />
      </div>
    </div>
  );
}
