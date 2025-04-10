import { addReacton } from "./PostSlice";
import { useDispatch } from "react-redux";
import { memo } from "react";

const ReactionButton = ({ post }) => {
  const { id, reactions } = post;
  const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

  const dispatch = useDispatch();

  const RenderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        onClick={() => {
          dispatch(addReacton({ id, name }));
        }}
        key={name}
        className="reactionButton"
      >
        {emoji} {reactions[name]}
      </button>
    );
  });
  return (
    <>
      <div>{RenderReaction}</div>
    </>
  );
};

export default memo(ReactionButton);
