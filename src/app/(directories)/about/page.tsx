import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | NarutoPedia",
};

export default function About() {
    return (
        <main>
            <section className="about-section">
                <h1>About NarutoPedia</h1>
                <p>
                    NarutoPedia, a creation of Kemal Galip, serves as a comprehensive resource for
                    fans of the beloved manga/anime series Naruto/Naruto: Shippuden. This
                    informative website is offering insights into characters, clans, kekkei genkai,
                    tailed beasts, teams, villages, and the enigmatic Kara organization, as well as
                    the notorious Akatsuki.
                    <br></br>
                    <br></br>
                    Fueled by the robust{" "}
                    <Link href="https://www.narutodb.xyz" target="_blank">
                        NarutoDB API,
                    </Link>{" "}
                    NarutoPedia remains up-to-date with the latest developments from the Naruto
                    universe. The website&apos;s integration with{" "}
                    <Link href="https://github.com/kgalip/narutopedia" target="_blank">
                        GitHub
                    </Link>{" "}
                    allows fans to actively participate in its growth and contribute their knowledge
                    to enrich the Naruto community further.
                </p>
            </section>
        </main>
    );
}
