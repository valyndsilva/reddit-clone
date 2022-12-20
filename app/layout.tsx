import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="h-screen overflow-y-scroll bg-slate-200">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
