import SettingsContent from "./SettingsContent";
import DiaryContent from "./DiaryContent";
import SupportContent from "./SupportContent";

const Diario = () => {
  return (
    <div>
      <DiaryContent />
    </div>
  );
};

const Impostazioni = () => {
  return (
    <div>
      <SettingsContent />
    </div>
  );
};

const Supporto = () => {
  return (
    <div>
      <h1>
        <SupportContent />
      </h1>
    </div>
  );
};

const components = {
  Diario,
  Impostazioni,
  Supporto,
};

const ContentProfile = ({ section = "Diario" }) => {
  const ComponentToRender = components[section] || components.Diario;

  return <ComponentToRender />;
};

export default ContentProfile;
