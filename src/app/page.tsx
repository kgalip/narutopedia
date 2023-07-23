import discoverData from "@/app/lib/discoverData";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="home-main">
            <section className="home-welcome">
                <h1>The Naruto Universe: A Thrilling Saga of Ninjas, Friendship, and Adventure!</h1>
                <p>
                    Join Naruto on an epic journey through a world of powerful ninjas, intricate
                    lore, and exhilarating battles. Created by Masashi Kishimoto, Naruto is a
                    legendary manga and anime series that has captivated fans worldwide. Follow
                    Naruto Uzumaki, Sakura Haruno, and Sasuke Uchiha as they train, face formidable
                    foes, and forge unbreakable bonds. From the original series to Naruto Shippuden
                    and Boruto: Naruto Next Generations, immerse yourself in a universe filled with
                    chakra, epic battles, and profound themes of growth and friendship. Discover the
                    vibrant tapestry of ninja villages, honor, and the pursuit of dreams. Experience
                    the adventure that has made Naruto an enduring franchise in the world of anime
                    and manga.
                </p>
            </section>
            <section className="home-discover">
                <h2>Discover the Captivating World of Naruto</h2>
                {discoverData.map((item, idx) => (
                    <div key={idx}>
                        <Link href={`/list/${item.search}/1`}>
                            <Image
                                src={item.image}
                                width={200}
                                height={140}
                                alt="Discover"
                                quality="85"
                            />
                        </Link>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <Link href={`/list/${item.search}/1`}>Discover More &#8599;</Link>
                        </div>
                    </div>
                ))}
                <p>
                    Embark on an exploration of these captivating topics and uncover the intricacies
                    of the Naruto universe. Whether you&apos;re a longtime fan or new to the series,
                    there is always something fascinating to discover in this world of ninjas,
                    adventure, and unbreakable bonds. Begin your journey and experience the magic of
                    Naruto like never before.
                </p>
            </section>
        </main>
    );
}
