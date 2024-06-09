export const alphabetMap = [
  { key: "NATO", file: "nato", displayName: "NATO" },
  { key: "ICAO", file: "icao", displayName: "ICAO" },
  { key: "FRENCH", file: "french", displayName: "French" },
  { key: "GERMAN", file: "german", displayName: "German" },
  { key: "SPANISH", file: "spanish", displayName: "Spanish" },
  { key: "ITALIAN", file: "italian", displayName: "Italian" },
  { key: "PORTUGUESE", file: "portuguese", displayName: "Portuguese" },
  { key: "DUTCH", file: "dutch", displayName: "Dutch" },
  { key: "SWEDISH", file: "swedish", displayName: "Swedish" },
  { key: "FINNISH", file: "finnish", displayName: "Finnish" },
  { key: "NORWEGIAN", file: "norwegian", displayName: "Norwegian" },
  { key: "DANISH", file: "danish", displayName: "Danish" },
  {
    key: "RUSSIAN_OFFICIAL",
    file: "russian_official",
    displayName: "Russian (Official)",
  },
  {
    key: "RUSSIAN_UNOFFICIAL",
    file: "russian_unofficial",
    displayName: "Russian (Unofficial)",
  },
  { key: "JAPANESE", file: "japanese", displayName: "Japanese" },
  { key: "KOREAN", file: "korean", displayName: "Korean" },
  { key: "CHINESE", file: "chinese", displayName: "Chinese" },
  { key: "ARABIC", file: "arabic", displayName: "Arabic" },
  { key: "HEBREW", file: "hebrew", displayName: "Hebrew" },
  { key: "GREEK", file: "greek", displayName: "Greek" },
  { key: "TURKISH", file: "turkish", displayName: "Turkish" },
];

export const getAlphabetMapping = async (alphabet) => {
  const alphabetEntry =
    alphabetMap.find((entry) => entry.key === alphabet) || alphabetMap[0];
  const fileName = alphabetEntry.file;

  try {
    const module = await import(`../data/${fileName}.json`);
    return module.default;
  } catch (error) {
    console.error(`Error loading the ${alphabet} alphabet mapping: ${error}`);
    const fallback = await import("../data/nato.json");
    return fallback.default;
  }
};
