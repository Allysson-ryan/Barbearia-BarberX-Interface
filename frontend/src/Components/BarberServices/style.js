import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8rem;
`;

export const Title = styled.h1`
  font-size: 40px;

  @media (max-width: 758px) {
    font-size: 35px;
  }

  @media (max-width: 515px) {
    font-size: 30px;
  }

  @media (max-width: 355px) {
    font-size: 25px;
  }
`;

export const WrapperServices = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 75%;
  margin-top: 30px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1168px) {
    width: 85%;
  }

  @media (max-width: 758px) {
    padding: 25px;
  }

  @media (max-width: 490px) {
    width: 75%;
  }

  @media (max-width: 410px) {
    width: 65%;
  }

  @media (max-width: 355px) {
    width: 55%;
  }
`;

export const BoxServices = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media (max-width: 758px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Services = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 30px;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 905px) {
    padding: 25px;
  }

  @media (max-width: 415px) {
    padding: 15px;
  }
`;

export const ImgIcon = styled.img`
  margin-right: 30px;

  @media (max-width: 905px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 415px) {
    width: 35px;
    height: 35px;
    margin-right: 20px;
  }
`;

export const Information = styled.div`
  @media (max-width: 758px) {
    width: 60%;
  }

  @media (max-width: 615px) {
    width: 70%;
  }

  @media (max-width: 518px) {
    width: 80%;
  }
`;

export const TitleInformation = styled.h2`
  @media (max-width: 905px) {
    font-size: 25px;
  }

  @media (max-width: 810px) {
    font-size: 22px;
  }

  @media (max-width: 415px) {
    font-size: 19px;
  }

  @media (max-width: 355px) {
    font-size: 16px;
  }
`;

export const DescricptionInformation = styled.p`
  @media (max-width: 905px) {
    font-size: 15px;
  }

  @media (max-width: 810px) {
    font-size: 12px;
  }

  @media (max-width: 415px) {
    font-size: 9px;
  }

  @media (max-width: 355px) {
    font-size: 7px;
  }
`;

export const Price = styled.h2`
  @media (max-width: 905px) {
    font-size: 25px;
  }

  @media (max-width: 810px) {
    font-size: 22px;
  }

  @media (max-width: 415px) {
    font-size: 19px;
  }

  @media (max-width: 355px) {
    font-size: 16px;
  }
`;

export const ContainerButtonAgendarHorario = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
