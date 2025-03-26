const UserFavoriteAnimals = (props) => {
  return (
    <>
      <ul>
        {props.animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </>
  );
};
export { UserFavoriteAnimals };
