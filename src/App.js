import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./routes/About/About";
import Home from "./routes/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"about"} element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
