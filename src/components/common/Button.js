import { memo } from "react";

const Button = memo(({ onClick, children }) => (
  <button
    type="button"
    className="btn btn-primary btn-lg mt-3"
    onClick={onClick}
    aria-label={children}
  >
    {children}
  </button>
));

export default Button;
