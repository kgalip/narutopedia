import getDisplayData from "@/app/lib/getDisplayData";
import getEntityPage from "@/app/lib/entity/getEntityPage";
import EntityPageClient from "@/app/lib/entity/EntityPageClient";
import { Metadata } from "next";

type Props = {
    params: {
        entityType: EntityType;
        entityId: string;
    };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const { entityType, entityId } = props.params;

    const displayData = getDisplayData(entityType);

    const data = await getEntityPage(displayData!.fetchKeyword, entityId);

    return {
        title: `${data.name} | ${displayData!.metadataTitle}`,
    };
}

export default async function EntityPage(props: Props) {
    const { entityType, entityId } = props.params;

    const displayData = getDisplayData(entityType);

    const data = await getEntityPage(displayData!.fetchKeyword, entityId);

    return <EntityPageClient entity={...data} />;
}
