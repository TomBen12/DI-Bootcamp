import User from "./Users";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <>
      <h2>Users List</h2>
      {users.map((item) => (
        <User
          key={item.id}
          name={item.name}
          email={item.email}
          username={item.username}
          id={item.id}
        />
      ))}
    </>
  );
};
export default UserList;
