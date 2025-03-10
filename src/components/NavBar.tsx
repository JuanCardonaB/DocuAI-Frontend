import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const NavBar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="absolute top-0 backdrop-blur-sm bg-zinc-900/20 bg-opacity-50 w-[90%] text-white p-2.5 left-1/2 transform -translate-x-1/2 ">
      <p>NavBar</p>
      <button className="cursor-pointer" onClick={() => toggleTheme()}>
        chage theme
      </button>
    </nav>
  );
};
