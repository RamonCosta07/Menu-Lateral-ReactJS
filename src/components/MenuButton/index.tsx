import { Button } from "./styles";
import { FaGamepad } from "react-icons/fa";
import { useMenu } from "../../contexts/MainContext";

function MenuButton() {
  const { handleOpen, showMenu } = useMenu();
  const colorIcon = showMenu ? "cyan" : "#FF6347";
  return (
    <div>
      <Button onClick={handleOpen}>
        <FaGamepad size={32} color={colorIcon} />
      </Button>
    </div>
  );
}

export default MenuButton;
