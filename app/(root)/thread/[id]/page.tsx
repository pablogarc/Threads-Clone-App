import ThreadCard from "@/components/cards/ThreadCard";
import Comment from "@/components/forms/Comment";
import { ThreadCardSkeleton } from "@/components/ui/skeletons";
import { fetchThreadById } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const ThreadPage = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user?.id);
  if (!userInfo?.onboarded) redirect("onboarding");

  const thread = await fetchThreadById(params.id);

  return (
    <section className="relative">
      <div>
        <Suspense fallback={<ThreadCardSkeleton />}>
          <ThreadCard
            key={thread._id}
            id={thread._id}
            currentUserId={user?.id || ""}
            parentId={thread.parentId}
            content={thread.text}
            author={thread.author}
            community={thread.community}
            createdAt={thread.createdAt}
            comments={thread.children}
          />
        </Suspense>
      </div>

      <div className="mt-7">
        <Comment
          threadId={thread.id}
          currentUserImg={userInfo.image}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10">
        {thread.children.map((comment: any) => {
          return (
            <Suspense key={comment._id} fallback={<ThreadCardSkeleton />}>
              <ThreadCard
                id={comment._id}
                currentUserId={comment?.id || ""}
                parentId={comment.parentId}
                content={comment.text}
                author={comment.author}
                community={comment.community}
                createdAt={comment.createdAt}
                comments={comment.children}
                isComment
              />
            </Suspense>
          );
        })}
      </div>
    </section>
  );
};

export default ThreadPage;
