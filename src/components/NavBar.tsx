import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const NavBar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav className="absolute top-0 backdrop-blur-sm bg-zinc-900/20 bg-opacity-50 w-[90%] text-white p-2.5 left-1/2 transform -translate-x-1/2 flex flex-row justify-between rounded-b-md">
      <p>NavBar</p>
      <button
        onClick={() => toggleTheme()}
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 pr-1 ${
          theme === "light" ? "bg-gray-700" : ""
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
            theme === "light" ? "translate-x-6" : ""
          }`}
        />
      </button>
    </nav>
  );
};
