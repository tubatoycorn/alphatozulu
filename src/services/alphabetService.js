export const alphabetMap = [
    { key: "NATO", file: "nato" },
    { key: "ICAO", file: "icao" },
    { key: "FRENCH", file: "french" },
    { key: "GERMAN", file: "german" },
    { key: "SPANISH", file: "spanish" },
    { key: "ITALIAN", file: "italian" },
    { key: "PORTUGUESE", file: "portuguese" },
    { key: "DUTCH", file: "dutch" },
    { key: "SWEDISH", file: "swedish" },
    { key: "FINNISH", file: "finnish" },
    { key: "NORWEGIAN", file: "norwegian" },
    { key: "DANISH", file: "danish" },
    { key: "RUSSIAN_OFFICIAL", file: "russian_official" },
    { key: "RUSSIAN_UNOFFICIAL", file: "russian_unofficial" },
    { key: "JAPANESE", file: "japanese" },
    { key: "KOREAN", file: "korean" },
    { key: "CHINESE", file: "chinese" },
    { key: "ARABIC", file: "arabic" },
    { key: "HEBREW", file: "hebrew" },
    { key: "GREEK", file: "greek" },
    { key: "TURKISH", file: "turkish" },
].map((entry) => ({
    ...entry,
    displayName: entry.key.split("_")[0].charAt(0) + entry.key.split("_")[0].slice(1).toLowerCase(),
}));

export const getAlphabetMapping = async (alphabet) => {
    try {
        const { default: mapping } = await import(`../data/${(alphabetMap.find((entry) => entry.key === alphabet) || alphabetMap[0]).file}.json`);
        return mapping;
    } catch {
        const { default: fallback } = await import("../data/nato.json");
        return fallback;
    }
};
