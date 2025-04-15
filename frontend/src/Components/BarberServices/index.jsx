import {
  BoxServices,
  Container,
  Information,
  Services,
  WrapperServices,
  Title,
  ContainerButtonAgendarHorario,
  ImgIcon,
  TitleInformation,
  DescricptionInformation,
  Price,
} from "./style";
import PenteTesoura from "../../assets/icons/PenteTesoura-icon.svg";
import MaquinaBarbear from "../../assets/icons/maquinaBarbear-icon.svg";
import Pente from "../../assets/icons/pente-icon.svg";
import Navalha from "../../assets/icons/navalha-icon.svg";
import { ButtonAgendarHorario } from "./../ButtonAgendarHorario/index";
import { Link } from "react-router-dom";

export function BarberServices() {
  return (
    <Container>
      <Title>NOSSOS SERVIÇOS</Title>
      <WrapperServices>
        <BoxServices>
          <Services>
            <ImgIcon src={PenteTesoura} alt="PenteTesoura-icon" />
            <Information>
              <TitleInformation>CORTE ADULTO</TitleInformation>
              <DescricptionInformation>
                Nulla egestas sapien integer mi fermentum tellus tristique
                consequatolm pulvinar sagittis
              </DescricptionInformation>
              <Price>R$40</Price>
            </Information>
          </Services>

          <Services>
            <ImgIcon src={MaquinaBarbear} alt="MaquinaBarbear-icon" />
            <Information>
              <TitleInformation>BARBA</TitleInformation>
              <DescricptionInformation>
                Nulla egestas sapien integer mi fermentum tellus tristique
                consequatolm pulvinar sagittis
              </DescricptionInformation>
              <Price>R$30</Price>
            </Information>
          </Services>

          <Services>
            <ImgIcon src={Pente} alt="Pente-icon" />
            <Information>
              <TitleInformation>CORTE CRIANÇA</TitleInformation>
              <DescricptionInformation>
                Nulla egestas sapien integer mi fermentum tellus tristique
                consequatolm pulvinar sagittis
              </DescricptionInformation>
              <Price>R$55</Price>
            </Information>
          </Services>

          <Services>
            <ImgIcon src={Navalha} alt="Navalha-icon" />
            <Information>
              <TitleInformation>CORTE ADULTO + Barba</TitleInformation>
              <DescricptionInformation>
                Nulla egestas sapien integer mi fermentum tellus tristique
                consequatolm pulvinar sagittis
              </DescricptionInformation>
              <Price>R$65</Price>
            </Information>
          </Services>
        </BoxServices>
        <ContainerButtonAgendarHorario>
          <Link to="/agendar" style={{ textDecoration: "none" }}>
            <ButtonAgendarHorario />
          </Link>
        </ContainerButtonAgendarHorario>
      </WrapperServices>
    </Container>
  );
}
