import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SignIn from "./pages/sign-in.jsx";
import SignUp from "./pages/sign-up.jsx";
import HomeMap from "./pages/HomeMap.jsx";
import SpeciesList from "./pages/SpeciesList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home-map" element={<HomeMap />} />
        <Route path="/species-list" element={<SpeciesList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
