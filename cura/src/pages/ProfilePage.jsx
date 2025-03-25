import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import ContentProfile from "./Components/ContentProfile";

function App() {
  const [content, setContent] = useState("Diario");
  return (
    <div className="flex bg-gradient-to-t from-[#23687D] to-[#A1C877]">
      <div className="p-4 w-screen h-screen">
        <Sidebar setPageContent={setContent} />
      </div>
      <div>
        <div className="w-150 bg-transparent">
          <ContentProfile section={content} />
        </div>
      </div>
    </div>
  );
}

export default App;
