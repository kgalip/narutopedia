import React from "react";
import Link from "next/link";
import Image from "next/image";

import navigationBack from "@/img/navigation-back.svg";
import navigationExit from "@/img/navigation-exit.svg";

type Props = {
    headerNavMenuRef: React.RefObject<HTMLButtonElement>;
    closeNav: () => void;
    showDiscover: () => void;
    dontShowDiscover: () => void;
};

export default function HeaderNav(props: Props) {
    const { headerNavMenuRef, closeNav, showDiscover, dontShowDiscover } = props;

    const headerNavRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        function navigationWindowClick(e: MouseEvent | KeyboardEvent) {
            if (
                !headerNavMenuRef.current?.contains(e.target as Node) &&
                !headerNavRef.current?.contains(e.target as Node)
            ) {
                closeNav();
            }
        }

        window.addEventListener("click", navigationWindowClick);

        return () => window.removeEventListener("click", navigationWindowClick);
    }, [headerNavMenuRef, closeNav]);

    return (
        <nav ref={headerNavRef} className="header-nav">
            <div>
                <button onClick={dontShowDiscover}>
                    <Image src={navigationBack} width={30} height={30} alt="Back" />
                </button>
                <button onClick={closeNav}>
                    <Image src={navigationExit} width={30} height={30} alt="Exit" />
                </button>
            </div>
            <section className="header-nav-default">
                <Link href="/" onClick={closeNav}>
                    Home
                </Link>
                <Link href="/about" onClick={closeNav}>
                    About
                </Link>
                <button onClick={showDiscover}>Discover</button>
            </section>
            <section className="header-nav-discover">
                <p>Discover &#8595;</p>
                <Link href="/list/characters/1" onClick={closeNav}>
                    Characters
                </Link>
                <Link href="/list/clans/1" onClick={closeNav}>
                    Clans
                </Link>
                <Link href="/list/kara/1" onClick={closeNav}>
                    Kara
                </Link>
                <Link href="/list/kekkeigenkai/1" onClick={closeNav}>
                    Kekkeigenkai
                </Link>
                <Link href="/list/tailedbeasts/1" onClick={closeNav}>
                    Tailed Beasts
                </Link>
                <Link href="/list/teams/1" onClick={closeNav}>
                    Teams
                </Link>
                <Link href="/list/villages/1" onClick={closeNav}>
                    Villages
                </Link>
                <Link href="/list/akatsuki/1" onClick={closeNav}>
                    Akatsuki
                </Link>
            </section>
        </nav>
    );
}
