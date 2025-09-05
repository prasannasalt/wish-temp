import "./globals.css";
import Layout from "../components/Layout";

export const metadata = {
  title: "Nexus Corp - Professional Services",
  description: "We provide exceptional services to help your business grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
