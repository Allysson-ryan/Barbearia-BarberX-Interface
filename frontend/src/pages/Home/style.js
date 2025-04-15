import styled from "styled-components";
import HeroHeader from "../../assets/HeroHeader-img.png";
import HeroCallToAction from "../../assets/Hero Call to Action.png";
import HeroFooter from "../../assets/HeroFooter.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Banner = styled.div`
  background: url("${HeroHeader}"), rgba(0, 0, 0, 0.27);
  background-blend-mode: darken;
  background-size: cover;
  background-position: start;
  width: 100%;
  height: 670px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1265px) {
    height: 660px;
  }

  @media (max-width: 1220px) {
    height: 630px;
  }

  @media (max-width: 1165px) {
    height: 600px;
  }

  @media (max-width: 1110px) {
    height: 570px;
  }

  @media (max-width: 1000px) {
    height: 540px;
  }

  @media (max-width: 932px) {
    height: 510px;
  }

  @media (max-width: 870px) {
    height: 480px;
  }

  @media (max-width: 825px) {
    height: 440px;
  }

  @media (max-width: 765px) {
    height: 400px;
  }

  @media (max-width: 700px) {
    height: 360px;
  }

  @media (max-width: 630px) {
    height: 320px;
  }

  @media (max-width: 560px) {
    height: 280px;
  }

  @media (max-width: 485px) {
    height: 240px;
  }

  @media (max-width: 430px) {
    height: 200px;
  }

  @media (max-width: 370px) {
    height: 160px;
  }
`;

export const TitleBanner = styled.h1`
  width: 60%;
  text-align: center;
  font-size: 70px;
  background-color: transparent;
  color: ${(props) => props.theme.white};

  @media (max-width: 1265px) {
    width: 65%;
  }

  @media (max-width: 1167px) {
    width: 70%;
  }

  @media (max-width: 1085px) {
    width: 75%;
  }

  @media (max-width: 1014px) {
    font-size: 60px;
    line-height: 1.2;
  }

  @media (max-width: 870px) {
    width: 80%;
  }

  @media (max-width: 817px) {
    width: 85%;
  }

  @media (max-width: 817px) {
    font-size: 50px;
  }

  @media (max-width: 645px) {
    font-size: 40px;
  }

  @media (max-width: 518px) {
    font-size: 30px;
  }

  @media (max-width: 395px) {
    font-size: 20px;
  }
`;

export const BarberImageSection = styled.div`
  margin-top: 10rem;
  background: url("${HeroCallToAction}"), rgba(0, 0, 0, 0.33);
  background-blend-mode: darken;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1270px) {
    height: 450px;
  }

  @media (max-width: 1170px) {
    height: 420px;
  }

  @media (max-width: 1075px) {
    height: 390px;
  }

  @media (max-width: 1030px) {
    height: 360px;
  }

  @media (max-width: 915px) {
    height: 330px;
  }

  @media (max-width: 845px) {
    height: 300px;
  }

  @media (max-width: 770px) {
    height: 270px;
  }

  @media (max-width: 690px) {
    height: 240px;
  }

  @media (max-width: 615px) {
    height: 210px;
  }
`;

export const SentenceBarberImageSection = styled.h1`
  width: 80%;
  text-align: center;
  font-size: 70px;
  background-color: transparent;
  color: ${(props) => props.theme.white};

  @media (max-width: 1490px) {
    width: 90%;
  }

  @media (max-width: 1325px) {
    font-size: 65px;
  }

  @media (max-width: 1230px) {
    font-size: 60px;
  }

  @media (max-width: 1150px) {
    font-size: 55px;
  }

  @media (max-width: 1040px) {
    font-size: 45px;
  }
`;

export const AppointmentWrapper = styled.div`
  background: url("${HeroFooter}"), rgba(0, 0, 0, 0.15);
  background-blend-mode: darken;
  background-size: cover;
  background-position: start;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

export const AppointmentContent = styled.div`
  width: 40%;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  h1 {
    font-size: 47px;
    color: ${(props) => props.theme.white};
  }

  p {
    color: ${(props) => props.theme.white};
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const MapsBox = styled.div`
  width: 100%;
`;
