import { ClerkProvider } from "@clerk/nextjs";
import { inter } from "../../lib/fonts";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Threads",
    default: "Threads",
  },
  description: "A Next.js Learn Threads Application.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} flex items-center justify-center h-screen bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
