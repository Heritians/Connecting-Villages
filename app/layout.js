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
          <div
            id="session_expired_alert"
            className="absolute top-12 right-5 bg-red-600 p-5 text-white rounded-lg hidden"
          >
            <h1 className="text-lg font-semibold">Session Expired</h1>
            <p className="text-sm">Please login again or refresh the page.</p>
          </div>
          <div
            id="multipurpose_alert"
            className="absolute top-16 right-0 sm:right-5 bg-green-600 p-3 text-white rounded-lg hidden text-sm sm:text-lg"
          ></div>
          <Nav />
          {children}
          <Footer />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
