import SettingsContent from "./SettingsContent";
import DiaryContent from "./DiaryContent";

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
      <h1>Supporto</h1>
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
