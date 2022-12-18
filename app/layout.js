import { Assistant } from "@next/font/google";
import "../styles/globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const font = Assistant({
  variable: "--font-font",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
