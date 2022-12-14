import { NavMenu } from "./styles";
import { useMenu } from "../../contexts/MainContext";

function Menu() {
  const { showMenu } = useMenu();
  return (
    <div>
      <NavMenu showMenu={showMenu}>
        <ul>
          <li>Playstation</li>
          <li>Xbox</li>
          <li>Nintendo Switch</li>
          <li>PC</li>
        </ul>
      </NavMenu>
    </div>
  );
}

export default Menu;
