import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Link as={NavLink} to="/" end>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/profile">
          Profile
        </Nav.Link>
        <Nav.Link as={NavLink} to="/shop">
          Shop
        </Nav.Link>
      </Nav>
      
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <Profile />
            </ErrorBoundary>
          }
        />
        <Route path="/shop" element={<ErrorBoundary><Shop /></ErrorBoundary>} />
      </Routes>
    </>
  );
}

export default App;
