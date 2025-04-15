import {
  BoxContent,
  IntroText,
  MainHeading,
  StatItem,
  Stats,
  TextSection,
  ImageCorteSection,
} from "./style";
import ImageCorte from "../../assets/ImageCorte.png";

export function BarberDescriptions() {
  return (
    <BoxContent>
      <TextSection>
        <MainHeading>Seu barbeiro de confiança, sempre por perto.</MainHeading>
        <IntroText>
          Na nossa barbearia, você encontra tradição e modernidade em cada
          corte. Cuidamos do seu estilo com atenção aos detalhes, garantindo um
          atendimento de qualidade para quem valoriza uma boa experiência.
        </IntroText>
        <Stats>
          <StatItem>
            <h1>
              99 <span>%</span>
            </h1>
            <p>Satisfação do cliente</p>
          </StatItem>
          <StatItem>
            <h1>
              3 <span>+</span>
            </h1>
            <p>anos de experiência</p>
          </StatItem>
        </Stats>
      </TextSection>
      <ImageCorteSection>
        <img src={ImageCorte} alt="" />
      </ImageCorteSection>
    </BoxContent>
  );
}
