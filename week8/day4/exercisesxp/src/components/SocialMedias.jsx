import list2 from "../data/list2.json";
const SocialMedias = () => {
  return (
    <>
      <p>Example 1 Component</p>
      <ul>
        {list2.SocialMedias.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default SocialMedias;
