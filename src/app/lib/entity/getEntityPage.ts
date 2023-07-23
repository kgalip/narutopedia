export default async function getEntityPage(entityType: string, id: string) {
    const res = await fetch(`https://api.narutodb.xyz/${entityType}/${id}`, {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });

    if (!res.ok) return undefined;

    return res.json();
}
