import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";

// Font configuration
const OpenSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const Robotos = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

// Metadata configuration (including favicon)
export const metadata = {
  title: "Portfolio",
  description: "Portfolio of a web developer",
  icons: {
    icon: "/home.png",       // Main favicon
    shortcut: "/home.png",   // Shortcut icon
    apple: "/home.png",      // iOS icon (optional)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head />
      <body className={`${Robotos.variable} ${OpenSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
