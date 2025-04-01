import list2 from "../data/list2.json";

const Skills = () => {
  return (
    <>
      <p>Exemple component 2</p>
      <h4>{list2.Skills[0].Area + "s"}</h4>
      <ul>
        {list2.Skills[0].SkillSet.map((item, index) => {
          return <li key={index}>{item.Name}</li>;
        })}
      </ul>
      <h4>{list2.Skills[1].Area}</h4>
      <ul>
        {list2.Skills[1].SkillSet.map((item, index) => {
          return <li key={index}>{item.Name}</li>;
        })}
      </ul>
    </>
  );
};

export default Skills;
