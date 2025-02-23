import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Priyanshu",
  description: "Hello! This is My Protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen animate-moveShadow">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
