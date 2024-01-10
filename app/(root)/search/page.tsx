import UserCard from "@/components/cards/UserCard";
import { ProfileHeader, ThreadsTab } from "@/components/shared";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { profileTabs } from "@/lib/constants";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const SearchPage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchUsers({
    userId: user.id,
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
  });

  return (
    <section>
      <h1 className="text-heading2-bold text-light-1 mb-10">Search</h1>

      {/* Search Bar */}

      <div className="mt-14 flex flex-col gap-9">
        {result.users.length === 0 ? (
          <p className="text-center text-base-regular text-light-3">No users</p>
        ) : (
          <>
            {result.users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                imgUrl={user.image}
                personType={user.personType}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
