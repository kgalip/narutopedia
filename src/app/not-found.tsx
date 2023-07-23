import { Metadata } from "next";
import notFoundImage from "../img/naruto/naruto-not-found.jpg";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "Page not found",
};

export default function NotFound() {
    return (
        <main className="not-found">
            <h1>Page Not Found</h1>
            <Image src={notFoundImage} width={640} height={480} alt="Page Not Found" />
        </main>
    );
}
