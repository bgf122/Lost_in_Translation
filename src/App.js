import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./views/Start";
import Translate from "./views/Translate";
import Profile from "./views/Profile";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container className="p-3">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
