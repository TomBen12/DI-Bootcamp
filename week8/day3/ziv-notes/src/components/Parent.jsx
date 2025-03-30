const Parent = ({admin, children}) => {

    if(admin) return <h2>Not authorized</h2>
  return (
    <>
      <h2>Parent</h2>
      {children}
    </>
  );
};
export default Parent;
