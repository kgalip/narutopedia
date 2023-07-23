import getListPage from "@/app/lib/list/getListPage";
import Link from "next/link";
import Image from "next/image";
import pageSize from "@/app/lib/pageSize";
import discoverData from "@/app/lib/discoverData";
import Pagination from "@/app/components/Pagination";
import getDisplayData from "@/app/lib/getDisplayData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import imageNotFound from "@/img/naruto/naruto-image-notfound.png";

type Props = {
    params: {
        entityType: EntityType;
        pageNumber: string;
    };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const { entityType, pageNumber } = props.params;

    const displayData = getDisplayData(entityType);

    return {
        title: `${displayData!.metadataTitle} | ${pageNumber}`,
    };
}

export default async function ListPage(props: Props) {
    const { entityType, pageNumber } = props.params;

    const displayData = getDisplayData(entityType)!;

    const data = await getListPage(displayData.fetchKeyword, pageNumber);

    if (data[displayData.mapKeyword].length === 0) return notFound();

    return (
        <main>
            <section className="list-list">
                {data[displayData.mapKeyword].map((item: any, idx: number) => (
                    <Link key={idx} href={`/${entityType}/${item.id}`}>
                        <figure>
                            {item.images?.length ? (
                                <Image
                                    src={item.images[0]}
                                    width={280}
                                    height={150}
                                    alt="Picture"
                                />
                            ) : (
                                <Image
                                    src={imageNotFound}
                                    width={280}
                                    height={150}
                                    alt="Not Found"
                                    className="image-not-found"
                                />
                            )}
                        </figure>
                        <p>{item.name}</p>
                    </Link>
                ))}
            </section>
            <Pagination
                entityData={...data}
                dataTotalKeyword={displayData.totalKeyword}
                entityType={entityType}
                pageNumber={pageNumber}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return discoverData.map((item) => ({ entityType: item.search, pageNumber: "1" }));
}

/* Vercel throws error on build, so not generating every single page, just the first pages */

/* export async function generateStaticParams() {
    // Getting discoverData used for main page, then getting display data from getDisplayData, to fetch entities list data in the following function (allPagesData).
    const entityDisplayDataArray = discoverData.map((item) =>
        getDisplayData(item.search as EntityType)
    );

    // Fetching every entity type's page 1 data.
    const allPagesData = await Promise.all(
        entityDisplayDataArray.map(async (item) => getListPage(item!.fetchKeyword, "1"))
    );

    // Looping over every entity's page data, and getting the total counts of each entity type.
    const totalEntities = allPagesData.map(
        (item, idx) => item[entityDisplayDataArray[idx]!.totalKeyword]
    );

    // Getting page counts for each entity
    const totalPages = totalEntities.map((item) => Math.ceil(item / pageSize));

    function getStaticParams() {
        let staticParams = [];

        for (let et = 0; et < discoverData.length; et++) {
            const entityType = discoverData[et].search;

            for (let pn = 1; pn <= totalPages[et]; pn++) {
                staticParams.push({ entityType: entityType, pageNumber: pn.toString() });
            }
        }

        return staticParams;
    }

    return getStaticParams();
} */
