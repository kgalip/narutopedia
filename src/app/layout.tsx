import "../scss/index.scss";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "NarutoPedia",
    description:
        "Informative website about the popular manga/anime/game series Naruto, Naruto Shippuden, and Boruto: Naruto the Next Generations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
