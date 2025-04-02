import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const PostToWebHook = async () => {
    const URL = "https://webhook.site/22d7e6f0-9b89-4863-84e4-87ead8fdac74";
    const User1 = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        JSON,
      },
      body: JSON.stringify(User1),
    });
    console.log(response);
  };

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

      <button onClick={PostToWebHook}>Post User1 To webhook</button>

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
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <Shop />
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
}

export default App;
