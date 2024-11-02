import { useContext, useMemo } from "react";
import { AlphabetContext } from "../../contexts/AlphabetContext";
import { alphabetMap } from "../../services/alphabetService";

const FLAGS = {
    NATO: "🌐",
    ICAO: "🌍",
    FRENCH: "🇫🇷",
    GERMAN: "🇩🇪",
    SPANISH: "🇪🇸",
    ITALIAN: "🇮🇹",
    PORTUGUESE: "🇵🇹",
    DUTCH: "🇳🇱",
    SWEDISH: "🇸🇪",
    FINNISH: "🇫🇮",
    NORWEGIAN: "🇳🇴",
    DANISH: "🇩🇰",
    RUSSIAN_OFFICIAL: "🇷🇺",
    RUSSIAN_UNOFFICIAL: "🇷🇺",
    JAPANESE: "🇯🇵",
    KOREAN: "🇰🇷",
    CHINESE: "🇨🇳",
    ARABIC: "🇸🇦",
    HEBREW: "🇮🇱",
    GREEK: "🇬🇷",
    TURKISH: "🇹🇷",
};

const AlphabetSelector = () => {
    const { alphabet, setAlphabet } = useContext(AlphabetContext);

    const options = useMemo(
        () =>
            alphabetMap.map(({ key, displayName }) => ({
                value: key,
                label: `${FLAGS[key]} ${displayName}`,
            })),
        []
    );

    return (
        <section className="form-group mt-3">
            <label htmlFor="alphabet-select" className="form-label">Select Phonetic Alphabet:</label>
            <select id="alphabet-select" className="form-select form-control-lg" value={alphabet} onChange={(e) => setAlphabet(e.target.value)}>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default AlphabetSelector;
