import { useState, useContext, useCallback } from "react";
import { AlphabetContext } from "../../contexts/AlphabetContext";
import ResultDisplay from "../ResultDisplay/ResultDisplay";
import Button from "../common/Button";

const TextInput = ({ convertText, result = "" }) => {
  const [input, setInput] = useState("");
  const [resultState, setResultState] = useState(result);
  const [error, setError] = useState(false);
  useContext(AlphabetContext);

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
    if (e.target.value) {
      setError(false);
    }
  }, []);

  const handleTranslate = useCallback(async () => {
    if (!input.trim()) {
      setError(true);
      setResultState("");
      return;
    }
    try {
      const translation = await convertText(input);
      setResultState(translation);
    } catch (error) {
      console.error("Translation error:", error);
      setError(true);
      setResultState("Translation failed. Please try again.");
    }
  }, [input, convertText]);

  return (
    <section aria-labelledby="text-input-label" className="form-group mt-3">
      <label id="text-input-label" htmlFor="text-input" className="form-label">
        Enter Text:
      </label>
      <textarea
        id="text-input"
        value={input}
        onChange={handleChange}
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder="Enter text to translate"
        rows="5"
        aria-describedby="text-input-label"
      />
      {error && <div className="invalid-feedback">This field is required.</div>}
      <Button onClick={handleTranslate}>Translate</Button>
      <ResultDisplay result={resultState} />
    </section>
  );
};

export default TextInput;
