import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { inter } from "../../lib/fonts";
import "../globals.css";
import {
  Topbar,
  LeftSidebar,
  Bottombar,
  RightSidebar,
} from "@/components/shared";

export const metadata: Metadata = {
  title: {
    template: "%s | Threads",
    default: "Threads",
  },
  description: "A Next.js Learn Threads Application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />

            <section className="flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
