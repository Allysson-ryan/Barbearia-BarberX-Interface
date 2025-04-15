import { BarberDescriptions } from "../../Components/BarberDescriptions/index";
import { BarberServices } from "../../Components/BarberServices/index";
import { ButtonAgendarHorario } from "../../Components/ButtonAgendarHorario/index";
import { Evaluations } from "../../Components/Evaluations";
import { Footer } from "../../Components/Footer";
import { InboxInformation } from "../../Components/inboxInformation/index";
import { WhyChooseUs } from "../../Components/WhyChooseUs";
import {
  Container,
  Banner,
  TitleBanner,
  BarberImageSection,
  AppointmentWrapper,
  AppointmentContent,
  MapsBox,
  SentenceBarberImageSection,
} from "./style";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Banner>
        <TitleBanner>Praticidade máxima para pessoas ocupadas.</TitleBanner>
        <ButtonAgendarHorario onClick={() => navigate("/agendar")} />
      </Banner>
      <InboxInformation />
      <BarberDescriptions />
      <BarberServices />
      <BarberImageSection>
        <SentenceBarberImageSection>
          Experimente o luxo dos serviços de barbeiro exclusivo na nossa
          barbearia.
        </SentenceBarberImageSection>
      </BarberImageSection>
      <WhyChooseUs />
      <Evaluations />
      <AppointmentWrapper>
        <AppointmentContent>
          <h1>AGENDE SEU HORÁRIO</h1>
          <p>
            Agende seu horário de forma prática e rápida. Escolha o melhor
            horário para você, e garanta um atendimento exclusivo e sem espera.
            Estamos prontos para cuidar do seu estilo!
          </p>
          <ButtonAgendarHorario onClick={() => navigate("/agendar")} />
        </AppointmentContent>
      </AppointmentWrapper>
      <MapsBox>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12478.086339457011!2d-34.89894481612478!3d-8.084541765097859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f3bec607c45%3A0xf9b44be61a236c4d!2sRioMar%20Recife!5e0!3m2!1spt-BR!2sbr!4v1741286728215!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: "0", opacity: 0.6 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapsBox>
      <Footer />
    </Container>
  );
}
