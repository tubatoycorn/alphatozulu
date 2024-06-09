import { useContext } from "react";
import { AlphabetContext } from "../../contexts/AlphabetContext";
import { alphabetMap } from "../../services/alphabetService";

const AlphabetSelector = () => {
  const { alphabet, setAlphabet } = useContext(AlphabetContext);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    const isValid = alphabetMap.some(({ key }) => key === selectedValue);

    if (isValid) {
      setAlphabet(selectedValue);
    } else {
      alert("Invalid selection. Please choose a valid phonetic alphabet.");
    }
  };

  const flagMap = {
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

  return (
    <section
      id="alphabet-selector-section"
      aria-labelledby="alphabet-selector-label"
      className="form-group mt-3"
    >
      <label
        id="alphabet-selector-label"
        htmlFor="alphabet-select"
        className="form-label"
      >
        Select Phonetic Alphabet:
      </label>
      <select
        id="alphabet-select"
        className="form-select form-control-lg"
        value={alphabet}
        onChange={handleChange}
        aria-describedby="alphabet-selector-label"
      >
        {alphabetMap.map(({ key, displayName }) => (
          <option key={key} value={key}>
            {`${flagMap[key]} ${displayName}`}
          </option>
        ))}
      </select>
    </section>
  );
};

export default AlphabetSelector;
