import ThreadCard from "@/components/cards/ThreadCard";
import { ThreadCardSkeleton } from "@/components/ui/skeletons";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs";
import { Suspense } from "react";

export default async function Home() {
  const result = await fetchPosts();
  const user = await currentUser();

  return (
    <>
      <h1 className="text-heading2-bold text-light-1 text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="text-center text-base-regular text-light-3">
            No threads found
          </p>
        ) : (
          <>
            {result.posts.map((post) => {
              return (
                <Suspense
                  key={post._id}
                  fallback={<ThreadCardSkeleton />}
                >
                  <ThreadCard
                    id={post._id}
                    currentUserId={user?.id || ""}
                    parentId={post.parentId}
                    content={post.text}
                    author={post.author}
                    community={post.community}
                    createdAt={post.createdAt}
                    comments={post.children}
                  />
                </Suspense>
              );
            })}
          </>
        )}
      </section>
    </>
  );
}
