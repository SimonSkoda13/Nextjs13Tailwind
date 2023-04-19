// import Header from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Poppins } from "next/font/google";
import "tailwindcss/tailwind.css";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "800", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | nextjs-tailwindcss",
    default: "nextjs-tailwindcss | Home",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk-SK" className={`${poppins.className}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="nextjs-tailwindcss" />
      </head>
      <body className="relative">
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
