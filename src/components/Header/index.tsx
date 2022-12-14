import MenuButton from "../MenuButton";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <div className="wrapper">
        <strong>Começar o Jogo</strong>
        <MenuButton />
      </div>
    </Container>
  );
}

export default Header;
