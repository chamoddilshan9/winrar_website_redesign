// app/download/layout.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Download WinRAR - Official Page",
  description: "Download the latest and previous versions of WinRAR.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
