import list from "../data/list.json";

const PostList = () => {
  return (
    <>
      <h1>Hi this is a Title</h1>
      {list.map((item) => {
        return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
        );
      })}
    </>
  );
};

export default PostList;
