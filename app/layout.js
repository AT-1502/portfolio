import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Font configuration
const OpenSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const Robotos = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of a web developer",
  icons: {
    icon: "/home.png",
    shortcut: "/home.png",
    apple: "/home.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Robotos.variable} ${OpenSans.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
