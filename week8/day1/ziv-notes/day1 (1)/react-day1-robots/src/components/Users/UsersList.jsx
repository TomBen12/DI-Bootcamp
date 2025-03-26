import User from "./User";

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <>
      <h2>Users List</h2>
      {users.map((item) => {
        return <User user={item} />;
      })}
    </>
  );
};
export default UsersList;
