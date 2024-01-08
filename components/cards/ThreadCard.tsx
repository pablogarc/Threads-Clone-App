import { ThreadCardProps } from "@/lib/definitions";

const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
}: ThreadCardProps) => {
  return (
    <article>
      <h2 className="text-small-regular text-light-2">{content}</h2>
    </article>
  );
};

export default ThreadCard;
