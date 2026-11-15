import { Syne, DM_Sans } from "next/font/google";
import "../globals.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import GlobalClickGuard from "./components/auth/GlobalClickGuard";
import { NotificationProvider } from "./context/NotificationContext";
import EnvBanner from "./components/common/EnvBanner";

const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

// The earlier web app (Express API era). Not linked from the new site; kept working as it was.
export const metadata = { robots: { index: false, follow: false } };

export default function AppLayout({ children }) {
  return (
    <div className={`${syne.variable} ${dmSans.variable} antialiased`}>
      <AuthProvider>
        <NotificationProvider>
          <GlobalClickGuard />
          <NavBar />
          {children}
          <Footer />
          <EnvBanner />
        </NotificationProvider>
      </AuthProvider>
    </div>
  );
}
