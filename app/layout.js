import { M_PLUS_1p } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import SideMenu from "@/components/SideMenu";

const m_PLUS_1p = M_PLUS_1p({
  subsets: ["latin"],
  //midium bold
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "ORIGIN.Doc",
  description: "ORIGIN.Docのポートフォリオサイト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={m_PLUS_1p.className}>
        <main className="flex flex-row">
          <SideMenu />
          <section className="pl-[300px] max-lg:pl-[146px] max-md:pl-0 w-ful min-h-screen overflow-hidden">
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
