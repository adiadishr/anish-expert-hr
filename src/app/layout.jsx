
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/context/modalContext";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "ExpertHR",
  description: "ExpertHR",
};

export default function RootLayout({ children }) {
  return (
    <ModalProvider>
      <html lang="en">
        <body
          className={cn('antialiased font-sans selection:bg-orange-600/35 selection:text-orange-500', geistSans.variable)}
        >
          {children}
        </body>
      </html>
    </ModalProvider>
  );
}
