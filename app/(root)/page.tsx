import { UserButton } from "@clerk/nextjs";
import { generalStyles } from "../../lib/styles";

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <h1 className={`${generalStyles.headText} text-left`}>Home</h1>
    </>
  );
}
