const Test = ({ status }) => {
    
  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "error") {
    return <h2>Opps...</h2>;
  }

  return (
    <>
      <h2>Test Component</h2>
    </>
  );
};
export default Test;
