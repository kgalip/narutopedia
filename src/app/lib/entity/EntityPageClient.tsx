"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    entity: any;
};

export default function EntityPageClient(props: Props) {
    const { entity } = props;

    // CAUTION!!! Show more button action is based on the event.currentTarget's parent element.
    function showMoreButton(
        e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
    ) {
        const { parentElement } = e.currentTarget;

        if (parentElement?.classList.contains("show-all")) {
            const parentElementPosition =
                parentElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: parentElementPosition - 100, behavior: "smooth" });
            parentElement.classList.remove("show-all");
        } else {
            parentElement?.classList.add("show-all");
        }
    }

    return (
        <main>
            <section className="entity-section">
                {entity.images && (
                    <figure>
                        <Image
                            src={entity.images[0]}
                            width={200}
                            height={140}
                            alt="Image"
                            quality="85"
                        />
                    </figure>
                )}
                <section>
                    <h1>{entity.name}</h1>
                    {entity.characters && (
                        <div className="entity-info-div">
                            <h2>Characters:</h2>
                            <div>
                                {entity.characters.map(
                                    (
                                        char: { id: number; name: string; images: string[] },
                                        idx: number
                                    ) => (
                                        <Link href={`/characters/${char.id}`} key={idx}>
                                            <figure>
                                                <Image
                                                    src={char.images[0]}
                                                    width={280}
                                                    height={150}
                                                    alt="Picture"
                                                />
                                            </figure>
                                            <p>{char.name}</p>
                                        </Link>
                                    )
                                )}
                            </div>
                            <button
                                style={{ alignSelf: "center" }}
                                onClick={showMoreButton}
                            ></button>
                        </div>
                    )}
                    {entity.debut && (
                        <div className="entity-info-div">
                            <h2>Appears in:</h2>
                            <ul>
                                {entity.debut.manga && <li>Manga: {entity.debut.manga}</li>}
                                {entity.debut.anime && <li>Anime: {entity.debut.anime}</li>}
                                {entity.debut.novel && <li>Novel: {entity.debut.novel}</li>}
                                {entity.debut.movie && <li>Movie: {entity.debut.movie}</li>}
                                {entity.debut.game && <li>Game: {entity.debut.game}</li>}
                                {entity.debut.ova && <li>Ova: {entity.debut.ova}</li>}
                            </ul>
                        </div>
                    )}
                    {entity.jutsu && (
                        <div className="entity-info-div">
                            <h2>Jutsu:</h2>
                            <ul>
                                {entity.jutsu.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {entity.jutsu.length > 10 && <button onClick={showMoreButton}></button>}
                        </div>
                    )}
                    {entity.occupation && (
                        <div className="entity-info-div">
                            <h2>Occupation:</h2>
                            <ul>
                                {entity.occupation.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {entity.occupation.length > 10 && (
                                <button onClick={showMoreButton}></button>
                            )}
                        </div>
                    )}
                    {entity.classification && (
                        <div className="entity-info-div">
                            <h2>Classification:</h2>
                            <ul>
                                {entity.classification.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {entity.classification.length > 10 && (
                                <button onClick={showMoreButton}></button>
                            )}
                        </div>
                    )}
                    {entity.titles && (
                        <div className="entity-info-div">
                            <h2>Titles:</h2>
                            <ul>
                                {entity.titles.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {entity.titles.length > 10 && (
                                <button onClick={showMoreButton}></button>
                            )}
                        </div>
                    )}
                    {/* {entity.rank && (
                        <div className="entity-info-div">
                            <h2>Nature Type:</h2>
                            <ul>
                                {entity.rank.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {entity.rank.length > 10 && <button onClick={showMoreButton}></button>}
                        </div>
                    )} */}
                    {entity.tools && (
                        <div className="entity-info-div">
                            <h2>Tools:</h2>
                            <ul>
                                {entity.tools.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {entity.tools.length > 10 && <button onClick={showMoreButton}></button>}
                        </div>
                    )}
                    {entity.natureType && (
                        <div className="entity-info-div">
                            <h2>Nature Type:</h2>
                            <ul>
                                {entity.natureType.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {entity.natureType.length > 10 && (
                                <button onClick={showMoreButton}></button>
                            )}
                        </div>
                    )}
                    {entity.uniqueTraits && (
                        <div className="entity-info-div">
                            <h2>Unique Traits:</h2>
                            <ul>
                                {entity.uniqueTraits.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {entity.uniqueTraits.length > 10 && (
                                <button onClick={showMoreButton}></button>
                            )}
                        </div>
                    )}
                </section>
            </section>
        </main>
    );
}
