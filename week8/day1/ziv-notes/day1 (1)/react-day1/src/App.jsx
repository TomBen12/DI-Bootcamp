import "./App.css";
import Hello from "./Hello";
import SubHello from "./SubHello";
import Users from "./components/Users";
function App() {
  return (
    <>
      <Users />
      <Hello title="Title 1" subTitle="Sub 1"/>
      <Hello title="Title 2" subTitle="Sub 2"/>
    </>
  );
}

export default App;
