const SidebarButton = ({ icon, text, width, height, isActive, onClick }) => {
  return (
    <button
      style={{ width: width, height: height }}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
        isActive ? "bg-[#23687D]" : "hover:bg-[#5e9db1]"
      }`}
    >
      {icon}
      <span className="text-white">{text}</span>
    </button>
  );
};

export default SidebarButton;
