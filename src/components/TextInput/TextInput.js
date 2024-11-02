import { useState, useCallback, memo } from "react";
import ResultDisplay from "../ResultDisplay/ResultDisplay";
import Button from "../common/Button";

const TextInput = memo(({ convertText }) => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState(false);

    const handleTranslate = useCallback(async () => {
        if (!input.trim()) {
            setError(true);
            setResult("");
            return;
        }

        try {
            const translation = await convertText(input);
            setResult(translation);
            setError(false);
        } catch {
            setError(true);
            setResult("Translation failed. Please try again.");
        }
    }, [input, convertText]);

    return (
        <section className="form-group mt-3">
            <label htmlFor="text-input" className="form-label">Enter Text:</label>
            <textarea
                id="text-input"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    setError(false);
                }}
                className={`form-control ${error ? "is-invalid" : ""}`}
                placeholder="Enter text to translate"
                rows="5"
            />
            {error && (<div className="invalid-feedback">Please enter text to translate.</div>)}
            <Button onClick={handleTranslate}>Translate</Button>
            <ResultDisplay result={result} />
        </section>
    );
});

export default TextInput;
