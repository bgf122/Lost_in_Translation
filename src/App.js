import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./views/Start";
import Translate from "./views/Translate";
import Profile from "./views/Profile";
import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Container fluid className="ContainerTop">
				<Routes>
					<Route path="/" element={<Start />} />
					<Route path="/translate" element={<Translate />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}

export default App;
