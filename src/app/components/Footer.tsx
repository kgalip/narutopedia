import Link from "next/link";
import Image from "next/image";
import githubLogo from "@/img/github-logo.svg";

export default function Footer() {
    const date = new Date();

    const year = date.getFullYear();

    return (
        <footer>
            <section>
                <section>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </section>
                <section>
                    <Link href="https://github.com/kgalip/narutopedia" target="_blank">
                        <Image src={githubLogo} width={40} height={40} alt="GitHub" />
                    </Link>
                </section>
            </section>
            <p>&copy; Kemal Galip {year}</p>
        </footer>
    );
}
