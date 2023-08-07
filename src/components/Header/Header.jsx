import logo from "./assets/logo-corebiz-preto-cinza";
import Search from "../Search";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="logo__image" src={logo} />
      </div>
      <Search />
      <div className="account">
        {/* <FiPeople */}
        <span>Minha Conta</span>
      </div>
      <div className="shopping-cart">
        {/* <FiCart */}
        {/* Number of items */}
      </div>
    </div>
  );
}
