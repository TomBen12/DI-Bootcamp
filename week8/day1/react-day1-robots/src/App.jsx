import "./App.css";
import UserList from "./components/users/UserList";
import userarr from "./users.json";
function App() {
  return (
    <>
      <UserList users={userarr} />
    </>
  );
}

export default App;
