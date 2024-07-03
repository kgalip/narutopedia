"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderNav from "./HeaderNav";

import lightMode from "../../img/light-mode.svg";
import darkMode from "../../img/dark-mode.svg";
import menuIcon from "../../img/menu-icon.svg";

export default function Header() {
    // LIGHT/DARK THEME FUNCTIONALITY
    const [darkTheme, setDarkTheme] = React.useState<boolean>(false);

    React.useEffect(() => {
        setDarkTheme(JSON.parse(localStorage.getItem("darkTheme")!) === true ? true : false);
    }, []);

    function changeDarkTheme() {
        setDarkTheme((prevTheme) => (prevTheme === true ? false : true));
    }

    React.useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));

        const body = document.querySelector("body");

        if (body !== null) {
            switch (darkTheme) {
                case true:
                    body.classList.add("dark");
                    break;
                case false:
                    body.classList.remove("dark");
            }
        }
    }, [darkTheme]);

    // NAV FUNCTIONALITY
    const headerRef = React.useRef<HTMLDivElement>(null);
    const headerNavMenuRef = React.useRef<HTMLButtonElement>(null);

    function navigationButton() {
        headerRef.current?.className === "" ? (headerRef.current.className = "show-nav") : (headerRef.current!.className = "");
    }

    function closeNav() {
        headerRef.current!.className = "";
        headerRef.current!.querySelector("nav")?.classList.remove("show-discover");
    }

    function showDiscover() {
        headerRef.current!.querySelector("nav")?.classList.add("show-discover");
    }

    function dontShowDiscover() {
        headerRef.current!.querySelector("nav")?.classList.remove("show-discover");
    }

    return (
        <header ref={headerRef}>
            <section>
                <Link href="/">NarutoPedia</Link>
                <div>
                    <button onClick={changeDarkTheme}>
                        <Image src={darkTheme ? lightMode : darkMode} width={36} height={36} alt="Light/Dark Theme" />
                    </button>
                    <button ref={headerNavMenuRef} onClick={navigationButton}>
                        <Image src={menuIcon} width={36} height={36} alt="Menu" />
                    </button>
                </div>
            </section>
            <HeaderNav headerNavMenuRef={headerNavMenuRef} closeNav={closeNav} showDiscover={showDiscover} dontShowDiscover={dontShowDiscover} />
        </header>
    );
}
