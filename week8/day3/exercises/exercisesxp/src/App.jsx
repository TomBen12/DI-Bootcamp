import "./App.css";
import BuggyCounter from "../components/BuggyCounter";
import ErrorBoundary from "../components/ErrorBoundary";
import FavoriteColor from "../components/FavoriteColor";

function App() {
  return (
    <>
      {/* exercise 1 simulations */}
      {/* <BuggyCounter />
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary> */}

      {/* exercise 2 and 3 */}
      <FavoriteColor />
    </>
  );
}

export default App;
