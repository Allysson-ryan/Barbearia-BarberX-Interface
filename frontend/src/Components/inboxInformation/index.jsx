import { ClockIcon, MapPinIcon, PhoneIcon } from "./style";
import { Container, InfoSection, Title, Information } from "./style";

export function InboxInformation() {
  return (
    <InfoSection>
      <Container>
        <MapPinIcon />
        <Title>ENDEREÇO</Title>
        <Information>3696 Lynden Road, canada</Information>
      </Container>

      <Container>
        <PhoneIcon />
        <Title>CONTATOS</Title>
        <Information>+62(123)-456-7890</Information>
        <Information>+62(123)-456-7890</Information>
      </Container>

      <Container>
        <ClockIcon />
        <Title>HORÁRIOS</Title>
        <Information>SEG - SAB: 9H - 18H</Information>
        <Information>DOM: FECHADO</Information>
      </Container>
    </InfoSection>
  );
}
