import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h2>Users:</h2>
      <button onClick={getUsers}>get users</button>
      <div>
        {users &&
          users.map((item, indx) => {
            return <div key={indx}>{item.name}</div>;
          })}
      </div>
    </>
  );
};
export default Users;
