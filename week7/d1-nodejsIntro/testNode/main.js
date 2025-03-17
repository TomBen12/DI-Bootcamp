import axios from "axios";

const getUsers = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
  } catch {}
};

getUsers();
