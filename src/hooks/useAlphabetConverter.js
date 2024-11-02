import { useCallback } from "react";
import { getAlphabetMapping } from "../services/alphabetService";

export const useAlphabetConverter = (alphabet) => ({
    convertText: useCallback(
        async (text) => {
            try {
                const mapping = await getAlphabetMapping(alphabet);
                return text
                    .split("")
                    .map((char) => char === " " ? "(space)" : mapping[char.toUpperCase()] || char)
                    .join(" ");
            } catch {
                return "Error in translation. Please try again.";
            }
        },
        [alphabet]
    ),
});
