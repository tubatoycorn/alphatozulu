import { useCallback } from "react";
import { getAlphabetMapping } from "../services/alphabetService";

export const useAlphabetConverter = (alphabet) => {
  const convertText = useCallback(
    async (text) => {
      try {
        const mapping = await getAlphabetMapping(alphabet);
        return text
          .split("")
          .map((char) =>
            char === " " ? "(space)" : mapping[char.toUpperCase()] || char
          )
          .join(" ");
      } catch (error) {
        console.error("Conversion error:", error);
        return "Error in translation. Please try again.";
      }
    },
    [alphabet]
  );

  return { convertText };
};
