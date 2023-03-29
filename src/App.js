import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./routes/About/About";
import Home from "./routes/Home/Home";
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const [dark, setDark] = useState(false);

  return (
		<BrowserRouter>
			<div className='app' data-theme={dark ? 'darkTheme' : ''}>
				<Header dark={dark} setDark={setDark} />

				<Routes>
					<Route path={'/'} element={<Home />} />
					<Route path={'about'} element={<About />} />
					<Route path={'movie/:id'} element={<MovieDetails />} />
					<Route path={'*'} element={<h1>404</h1>} />
				</Routes>

				<Footer />
			</div>
		</BrowserRouter>
  );
}

export default App;
