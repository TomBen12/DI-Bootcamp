import loading from "../../assets/loading.gif";
import { useSelector } from "react-redux";

const AgeDisplay = () => {
  const age = useSelector((state) => state.ageReducer.age);
  const status = useSelector((state) => state.ageReducer.status);

  return (
    <>
      <h3>Current Age:{age}</h3>
      {status === "loading" ? (
        <img src={loading} width="120"></img>
      ) : (
        <p>{age}</p>
      )}
    </>
  );
};

export default AgeDisplay;
