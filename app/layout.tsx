import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Toaster } from "./components/ui/sonner";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "East End Agro - Agricultural Investment Platform",
  description:
    "Invest in income-generating agricultural projects with $250 minimum investment, monthly profit payouts, and 6-month capital lock periods.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50 flex flex-col`}>
        <AuthProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
