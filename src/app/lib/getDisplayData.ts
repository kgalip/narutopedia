export default function getDisplayData(entityType: EntityType) {
    if (entityType === "characters") {
        return {
            fetchKeyword: "character",
            mapKeyword: "characters",
            totalKeyword: "totalCharacters",
            metadataTitle: "Characters",
        };
    } else if (entityType === "clans") {
        return {
            fetchKeyword: "clan",
            mapKeyword: "clans",
            totalKeyword: "totalClans",
            metadataTitle: "Clans",
        };
    } else if (entityType === "kara") {
        return {
            fetchKeyword: "kara",
            mapKeyword: "kara",
            totalKeyword: "totalKara",
            metadataTitle: "Kara",
        };
    } else if (entityType === "kekkeigenkai") {
        return {
            fetchKeyword: "kekkei-genkai",
            mapKeyword: "kekkeigenkai",
            totalKeyword: "totalKekkeiGenkai",
            metadataTitle: "Kekkei Genkai",
        };
    } else if (entityType === "tailedbeasts") {
        return {
            fetchKeyword: "tailed-beast",
            mapKeyword: "tailedBeasts",
            totalKeyword: "totalTailedBeasts",
            metadataTitle: "Tailed Beasts",
        };
    } else if (entityType === "teams") {
        return {
            fetchKeyword: "team",
            mapKeyword: "teams",
            totalKeyword: "totalTeams",
            metadataTitle: "Teams",
        };
    } else if (entityType === "villages") {
        return {
            fetchKeyword: "village",
            mapKeyword: "villages",
            totalKeyword: "totalVillages",
            metadataTitle: "Villages",
        };
    } else if (entityType === "akatsuki") {
        return {
            fetchKeyword: "akatsuki",
            mapKeyword: "akatsuki",
            totalKeyword: "totalMembers",
            metadataTitle: "Akatsuki",
        };
    }
}
