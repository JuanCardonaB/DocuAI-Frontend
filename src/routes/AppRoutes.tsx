import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};
