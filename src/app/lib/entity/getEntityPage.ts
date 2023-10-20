export default async function getEntityPage(entityType: string, id: string) {
    const res = await fetch(`https://narutodb.xyz/api/${entityType}/${id}`, {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });

    if (!res.ok) return undefined;

    return res.json();
}
