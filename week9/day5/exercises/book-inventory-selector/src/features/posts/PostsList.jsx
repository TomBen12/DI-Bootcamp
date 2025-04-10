import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./PostSlice";
import ReactionButton from "./ReactionButton";

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts, status); // COSOLE LOGGGG

  if (status === "loading") return <h2>loading...</h2>;
  if (status === "error") return <h2>error...</h2>;

  return (
    <>
      <h2>Posts</h2>
      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <ReactionButton post={post} />
              </article>
            );
          })}
      </section>
    </>
  );
};

export default PostList;
