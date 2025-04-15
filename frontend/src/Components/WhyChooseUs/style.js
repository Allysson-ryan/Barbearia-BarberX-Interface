import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 6rem;

  @media (max-width: 650px) {
    padding: 5rem;
  }

  @media (max-width: 555px) {
    padding: 4rem;
  }

  @media (max-width: 475px) {
    padding: 3rem;
  }

  @media (max-width: 335px) {
    padding: 2rem;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 50px;

  @media (max-width: 755px) {
    font-size: 40px;
  }

  @media (max-width: 650px) {
    font-size: 30px;
  }

  @media (max-width: 445px) {
    font-size: 25px;
  }

  @media (max-width: 390px) {
    font-size: 20px;
  }

  @media (max-width: 300px) {
    font-size: 17px;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  width: 50%;
  margin-top: 10px;

  @media (max-width: 1000px) {
    width: 70%;
  }

  @media (max-width: 775px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    font-size: 13px;
  }

  @media (max-width: 455px) {
    width: 95%;
    font-size: 11px;
  }

  @media (max-width: 390px) {
    width: 80%;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 40px 0;
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20%;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &::after {
      content: "";
      position: absolute;
      margin-bottom: -38px;
      width: 60px;
      height: 4px;
      background-color: ${(props) => props.theme.WarmBeige};
    }
  }

  p {
    text-align: center;
    margin-top: 20px;
  }
`;
