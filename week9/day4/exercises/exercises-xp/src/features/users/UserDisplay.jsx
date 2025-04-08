import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./usersSlice";
import { useEffect } from "react";

const UserDisplay = () => {
  const users = useSelector((state) => state.usersReducer.users);
  const status = useSelector((state) => state.usersReducer.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "error") return <h2>Error...</h2>;
  return (
    <>
      <h3>User List:</h3>
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <strong> - Name: </strong>
              {user.name}
              <strong> - Email: </strong>
              {user.email}
              <strong> - City: </strong>
              {user.address.city}
              <hr />
            </div>
          );
        })}
    </>
  );
};

export default UserDisplay;
