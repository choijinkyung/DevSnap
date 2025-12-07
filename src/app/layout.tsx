import Link from "next/link";
import "./globals.css";
import ReactQueryProvider from "../components/providers/ReactQueryProvider";
export const metadata = {
  title: "DevSnap",
  description: "Photo sharing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <header
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              borderBottom: "1px solid #eee",
              position: "sticky",
              top: 0,
              background: "white",
              zIndex: 10,
            }}
          >
            <nav
              style={{
                display: "flex",
                gap: "20px",
                fontSize: "16px",
              }}
            >
              <Link href="/feed">Feed</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/settings">Settings</Link>
            </nav>
          </header>

          <main style={{ padding: "20px" }}>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
