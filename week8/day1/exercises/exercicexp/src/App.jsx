import "./App.css";
import { UserFavoriteAnimals } from "./components/UserFavoriteAnimals";
import { Exercise } from "./components/Exercise3";

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const ten = 5 + 5;
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };
  return (
    <>
      {myelement}
      <p>"React is {ten} times better with JSX"</p>
      {/* {exercise 2} */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals animals={user.favAnimals} />
      <Exercise />
    </>
  );
}

export default App;
