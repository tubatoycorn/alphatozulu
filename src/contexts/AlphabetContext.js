import { createContext, useState, useMemo, memo } from "react";

export const AlphabetContext = createContext();

const localeToAlphabet = {
  "en-US": "NATO",
  "en-GB": "NATO",
  "fr-FR": "FRENCH",
  "de-DE": "GERMAN",
  "es-ES": "SPANISH",
  "it-IT": "ITALIAN",
  "pt-PT": "PORTUGUESE",
  "nl-NL": "DUTCH",
  "sv-SE": "SWEDISH",
  "fi-FI": "FINNISH",
  "no-NO": "NORWEGIAN",
  "da-DK": "DANISH",
  "ru-RU": "RUSSIAN_OFFICIAL",
  "ja-JP": "JAPANESE",
  "ko-KR": "KOREAN",
  "zh-CN": "CHINESE",
  "ar-SA": "ARABIC",
  "he-IL": "HEBREW",
  "el-GR": "GREEK",
  "tr-TR": "TURKISH",
};

const getDefaultAlphabet = () => {
  const locale = navigator.language || "en-US";
  return localeToAlphabet[locale] || "NATO";
};

export const AlphabetProvider = memo(({ children }) => {
  const [alphabet, setAlphabet] = useState(getDefaultAlphabet());

  const value = useMemo(() => ({ alphabet, setAlphabet }), [alphabet]);

  return (
    <AlphabetContext.Provider value={value}>
      {children}
    </AlphabetContext.Provider>
  );
});

export default AlphabetProvider;
