import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </>
  );
}

export default App;
