import { useState } from "react";
const ReactForm = () => {
  //   const [name, setName] = useState("");
  //   const [select, setSelect] = useState();
  //   const [text, setText] = useState();
  //   const [yesno, setYesNo] = useState();

  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.firstname.value);
    // console.log(e.target.text.value);
    // console.log(name, select, text, yesno);
    console.log(inputs);
  };

  const handleInputs = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });
  };
  return (
    <>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstname'
          placeholder='name'
          onChange={(e) => handleInputs(e)}
        />{" "}
        {inputs?.firstname}
        <input
          type='text'
          name='lastname'
          placeholder='name'
          onChange={(e) => handleInputs(e)}
        />{" "}
        {inputs?.lastname}
        <br />
        <select name='numbers' onChange={(e) => handleInputs(e)}>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <br />
        <textarea name='text' onChange={(e) => handleInputs(e)}></textarea>
        <br />
        Yes/No:{" "}
        <input name='yesno' type='checkbox' onChange={(e) => handleInputs(e)} />
        <br />
        <input type='submit' value={"Submit"} />
      </form>
    </>
  );
};
export default ReactForm;

/**
 * dynamic properties/keys
 */
/*
let a = "email"
let obj = {
    [a]:'john'
}
*/
