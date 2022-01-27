import "./App.css";
import Login from "./components/Login/Login";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container className="p-3">
        <h1>Login</h1>
        <Login></Login>
      </Container>
    </div>
  );
}

export default App;
