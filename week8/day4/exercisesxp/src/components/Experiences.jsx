import list2 from "../data/list2.json";

const Experiences = () => {
  return (
    <>
      <p>Exemple component 3</p>
      {list2.Experiences.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.logo} height={200} width={200} />
            <br />
            <a href={item.url}>{item.companyName}</a>
            <p>
              <strong>{item.roles[0].title}</strong>
            </p>
            <p>{item.roles[0].location}</p>
            <p>{item.roles[0].description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Experiences;
