import { FC } from 'react';

interface IMenuBurger {
  onClick: () => void;
}
const MenuBurger: FC<IMenuBurger> = ({ onClick }) => (
  <button type="button" className="menu-btn-wrapper" onClick={onClick}>
    <span className="menu-btn">
      <span className="menu-btn-burger" />
    </span>
  </button>
);

export default MenuBurger;
