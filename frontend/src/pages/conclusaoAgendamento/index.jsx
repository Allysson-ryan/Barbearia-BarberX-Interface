import { Info } from "@phosphor-icons/react";
import Logomarca from "../../assets/Logomarca.png";
import { Button, BoxInfo, Container, Title } from "./style";
import { useNavigate } from "react-router-dom";

export function ConclusaoAgendamento() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={Logomarca} alt="Logomarca" />
      <Title>Agendamento realizado com sucesso!</Title>
      <BoxInfo>
        <Info size={23} />
        <h4>ABRA SEU EMAIL PARA CONFERIR!</h4>
      </BoxInfo>
      <Button onClick={() => navigate("/")}>
        <span>Voltar para home</span>
      </Button>
    </Container>
  );
}
