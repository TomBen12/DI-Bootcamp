// import "./App.css";
import UsersList from "./components/Users/UsersList";
import usersarr from './users.json'

// console.log(usersarr);

function App() {
  return (
    <>
      <UsersList users={usersarr}/>
    </>
  );
}

export default App;
