import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { inter } from "../../lib/fonts";
import { generalStyles } from "../../lib/styles";
import "../globals.css";

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
          {/* <Topbar /> */}

          <main>
            {/* <LeftSidebar /> */}

            <section className={`${generalStyles.mainContainer}`}>
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            {/* <RightSidebar /> */}
          </main>
          {/* <Bottombar /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
