const SidebarButton = ({
  icon,
  text,
  width = "100%",
  height = "48px",
  isActive,
  onClick,
}) => {
  return (
    <button
      style={{ width, height }}
      onClick={onClick}
      className={`
        flex items-center gap-3 px-4 py-2 rounded-xl
        transition-all duration-300 ease-in-out
        font-medium text-sm
        ${
          isActive
            ? "bg-[#5e9db1] text-white shadow-md"
            : "bg-[#1e4e5a]/80 text-white hover:bg-[#23687D]/80"
        }
      `}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <span>{text}</span>
    </button>
  );
};

export default SidebarButton;
