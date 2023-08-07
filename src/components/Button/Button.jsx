import { string, node } from "prop-types";
import ClassNames from "classnames";
import "./Button.css";

export default function Button({ children, className, ...props }) {
  return (
    <button className={ClassNames("btn", className)} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node,
  className: string,
};
