import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state, usersReducer.users);
  return (
    <div id="todo-container">
      <h1>Users</h1>
      {
        users.map(())
      }
    </div>
  );
};

export default Users;
