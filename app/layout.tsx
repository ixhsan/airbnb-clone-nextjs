import ClientOnly from "./components/ClientOnly";
import Modal from "./components/Modals/Modal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Nest Away",
  description: "AirBNB clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
          <Modal isOpen={true} title="Login" actionLabel="Submit"/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
