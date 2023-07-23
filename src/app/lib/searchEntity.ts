export default async function searchEntity(fetchKeyword: string, searchTerm: string) {
    const res = await fetch(`https://api.narutodb.xyz/${fetchKeyword}/search?name=${searchTerm}`, {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });

    if (!res.ok) return undefined;

    return res.json();
}
