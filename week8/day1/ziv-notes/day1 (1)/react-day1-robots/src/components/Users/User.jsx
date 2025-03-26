import "./User.css";
import { Button } from "@mui/material";

const User = ({ user }) => {
  const { name, email, username, id } = user;

  const styleUser = {
    display: "inline-block",
    border: "1px solid #000",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "lightgreen",
    textAlign: "center",
  };
  return (
    <>
      <div className='usercard'>
        <img src={`https://robohash.org/${id}?size=150x150`} />
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <p>UserName: {username}</p>
        <Button variant="contained" icon="">More Info</Button>
      </div>
    </>
  );
};
export default User;
