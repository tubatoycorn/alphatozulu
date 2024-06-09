import { memo } from "react";

const ResultDisplay = memo(({ result = "" }) => (
  <section
    aria-live="polite"
    className="result-display border rounded mt-4 p-3"
  >
    {result || <span className="text-muted">Translation will appear here</span>}
  </section>
));

export default ResultDisplay;
