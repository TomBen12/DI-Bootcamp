import "./Exercise3.css";

export const Exercise = () => {
  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <>
      <h1
        style={/*{ color: "red", backgroundColor: "lightblue" }*/ style_header}
      >
        this is a h1
      </h1>
      <p className="para">this is a paragraph</p>
      <a href="#">this is a link</a>
      <form>
        <input type="text" placeholder="enter your name" />
        <button type="submit">submit</button>
      </form>
      <img src="/public/random.jpg" height={"500px"} width={"500px"} />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </>
  );
};
