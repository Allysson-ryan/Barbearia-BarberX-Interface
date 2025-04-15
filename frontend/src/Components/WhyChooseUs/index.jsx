import LicensedIcon from "../../assets/icons/licensed icon.svg";
import MastersIcon from "../../assets/icons/masters icon.svg";
import TrustedIcon from "../../assets/icons/trusted icon.svg";
import { Container, InfoContent, InfoSection, TitleBox } from "./style";

export function WhyChooseUs() {
  return (
    <Container>
      <TitleBox>
        <h1>PORQUE ESCOLHER-NOS</h1>
        <p>
          Escolher-nos é garantir um atendimento personalizado, com
          profissionais experientes e um ambiente acolhedor, tudo para atender
          suas necessidades e realçar seu estilo.
        </p>
      </TitleBox>

      <InfoSection>
        <InfoContent>
          <img src={LicensedIcon} alt="licensedIcon" />
          <h3>LICENCIADO</h3>
          <p>
            Nossa equipe de barbeiros licenciados segue rigorosas normas de
            limpeza e segurança para garantir uma experiência confortável e
            segura.
          </p>
        </InfoContent>

        <InfoContent>
          <img src={MastersIcon} alt="licensedIcon" />
          <h3>MESTRADO</h3>
          <p>
            Nossos barbeiros são apaixonados por seu ofício e visam fornecer
            cortes de cabelo de alta qualidade para cada cliente.
          </p>
        </InfoContent>

        <InfoContent>
          <img src={TrustedIcon} alt="licensedIcon" />
          <h3>CONFIÁVEL</h3>
          <p>
            Temos uma forte reputação online com uma classificação de 5 estrelas
            de mais de 100 mil clientes satisfeitos.
          </p>
        </InfoContent>
      </InfoSection>
    </Container>
  );
}
