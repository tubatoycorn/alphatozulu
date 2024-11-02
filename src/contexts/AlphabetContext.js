import { createContext, useState, useMemo, memo } from "react";

export const AlphabetContext = createContext();

const LOCALE_ALPHABET_MAP = {
    en: "NATO",
    fr: "FRENCH",
    de: "GERMAN",
    es: "SPANISH",
    it: "ITALIAN",
    pt: "PORTUGUESE",
    nl: "DUTCH",
    sv: "SWEDISH",
    fi: "FINNISH",
    no: "NORWEGIAN",
    da: "DANISH",
    ru: "RUSSIAN_OFFICIAL",
    ja: "JAPANESE",
    ko: "KOREAN",
    zh: "CHINESE",
    ar: "ARABIC",
    he: "HEBREW",
    el: "GREEK",
    tr: "TURKISH",
};

const getDefaultAlphabet = () => LOCALE_ALPHABET_MAP[navigator.language?.split("-")[0]] || "NATO";

export const AlphabetProvider = memo(({ children }) => {
    const [alphabet, setAlphabet] = useState(getDefaultAlphabet);
    const value = useMemo(() => ({ alphabet, setAlphabet }), [alphabet]);

    return (
        <AlphabetContext.Provider value={value}>
            {children}
        </AlphabetContext.Provider>
    );
});

export default AlphabetProvider;
