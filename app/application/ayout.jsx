import RootLayout from "@/components/compos/RootLayout";
import "./base.css";
import { Metadata } from "next/types";

export const metadata = {
  title: {
    template: "blog_app",
    default: "Personal Blog - A feature to make you famous",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
