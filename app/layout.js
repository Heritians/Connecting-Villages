import "@/Styles/globals.css";
import { Footer, Nav } from "@/components";
import { AuthProvider } from "@/Utils/Auth";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Heritians",
  description:
    "The website that digitizes the 'Unnat Bharat Abhiyan Baseline Household Survey Form'.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-start">
        <AuthProvider>
          <Nav />
          {children}
          <Footer />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
