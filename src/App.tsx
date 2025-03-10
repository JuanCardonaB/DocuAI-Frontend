import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { NavBar } from "./components/NavBar";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <main
        className={`${
          theme === "light" ? "bg-white" : "bg-[#222]"
        } w-full h-screen justify-center items-center flex flex-col`}
      >
        <NavBar />
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
