const User = ({ name, email, username, id }) => {
  return (
    <>
      <div>
        <img src={`https://robohash.org/${id}`} />
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <p>Username: {username}</p>
      </div>
    </>
  );
};

export default User;
