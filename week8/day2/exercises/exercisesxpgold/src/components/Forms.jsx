import "./Forms.css";
import { useState, useEffect } from "react";
const Forms = () => {
  const [username, setUsername] = useState("");
  const [userage, setUserAge] = useState(null);
  const [errorMessage /*setErrorMessage*/] = useState("");
  // useEffect(() => {*
  //   if (userage === null) return;
  //   if (isNaN(userage)) {
  //     alert("age must be a number!");
  //     setErrorMessage("Your age must be a number");
  //     setUserAge("");
  //   }
  // }, [userage]);

  const onChangeNameHandler = (e) => {
    setUsername(e.target.value);
  };
  const onChangeAgeHandler = (e) => {
    const value = Number(e.target.value);
    isNaN(value) ? setUserAge("") : setUserAge(value);
  };
  const mySubmitHandler = (e) => {
    e.preventDefault();
    alert(
      username
        ? userage
          ? `You are submitting name: ${username}, age: ${userage}`
          : "Enter a user age"
        : "enter user name"
    );
  };
  return (
    <>
      <form onSubmit={mySubmitHandler}>
        {userage > 0 && username && userage && (
          <h2>
            Hello {username}, {userage}
          </h2>
        )}
        <label htmlFor="username">User Name: </label>
        <br />
        <input
          id="username"
          name="user-name"
          type="text"
          value={username}
          placeholder="Enter your name"
          onChange={onChangeNameHandler}
        />
        <br />
        <br />
        <label htmlFor="userage">User Age: </label>
        <br />
        <input
          id="userage"
          type="text"
          name="user-age"
          value={userage}
          placeholder="Enter your age"
          onChange={onChangeAgeHandler}
        />
        {typeof userage === "number" && <span>{errorMessage}</span>}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Forms;
