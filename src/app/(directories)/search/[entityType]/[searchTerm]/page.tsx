import getDisplayData from "@/app/lib/getDisplayData";
import searchEntity from "@/app/lib/searchEntity";

import { notFound } from "next/navigation";

type Props = {
    params: {
        entityType: EntityType;
        searchTerm: string;
    };
};

export default async function page(props: Props) {
    const { entityType, searchTerm } = props.params;

    const displayData = getDisplayData(entityType);

    const searchData = await searchEntity(displayData!.fetchKeyword, searchTerm);

    if (searchData === undefined) return notFound();

    return <div>{JSON.stringify(searchData)}</div>;
}
