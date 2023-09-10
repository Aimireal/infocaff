import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationBar } from "./components/NavigationBar";
import ModalProvider from "./context/ModalProvider";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfoCaff",
  description: "Coffee orders list by Dylan-InfoTrack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <ModalProvider>
            <NavigationBar />
            {children}
          </ModalProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
