import SettingsContent from "./SettingsContent";
import DiaryContent from "./DiaryContent";
import SupportContent from "./SupportContent";

const components = {
  Diario: DiaryContent,
  Impostazioni: SettingsContent,
  Supporto: SupportContent,
};

const ContentProfile = ({ section = "Diario" }) => {
  const ComponentToRender = components[section] || components.Diario;

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <ComponentToRender />
    </div>
  );
};

export default ContentProfile;
