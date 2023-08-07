import { FiZoomIn } from "react-icons/fi";
import { string } from "prop-types";

export default function Search({ value }) {
  return (
    <div className="header__search">
      <input
        className="search__input"
        placeholder="O que está procrando?"
        value={value}
      />
      <FiZoomIn />
    </div>
  );
}

Search.propTypes = {
  value: string,
};
