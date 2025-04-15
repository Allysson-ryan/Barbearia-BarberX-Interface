import styled from "styled-components";

export const BoxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem;

  @media (max-width: 1272px) {
    padding: 4rem;
  }

  @media (max-width: 1170px) {
    padding: 3rem;
  }

  @media (max-width: 1049px) {
    padding: 2rem;
  }

  @media (max-width: 1017px) {
    padding: 1rem;
  }

  @media (max-width: 860px) {
    flex-direction: column-reverse;
    padding: 5rem;
  }

  @media (max-width: 665px) {
    padding: 3rem;
  }

  @media (max-width: 566px) {
    padding: 2rem;
  }

  @media (max-width: 483px) {
    padding: 1rem;
  }
`;

export const TextSection = styled.div`
  width: 45%;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1017px) {
    width: 50%;
  }

  @media (max-width: 860px) {
    width: 70%;
    padding: 0;
  }

  @media (max-width: 665px) {
    width: 70%;
    padding: 0;
  }

  @media (max-width: 535px) {
    width: 65%;
  }

  @media (max-width: 330px) {
    width: 80%;
  }
`;

export const MainHeading = styled.h1`
  font-size: 50px;

  @media (max-width: 1137px) {
    font-size: 47px;
  }

  @media (max-width: 1086px) {
    font-size: 45px;
  }

  @media (max-width: 1017px) {
    font-size: 43px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 1.5;
  }

  @media (max-width: 535px) {
    font-size: 33px;
  }

  @media (max-width: 452px) {
    font-size: 30px;
  }

  @media (max-width: 414px) {
    font-size: 23px;
  }
`;

export const IntroText = styled.p`
  margin: 20px 0;
  font-size: 17px;

  @media (max-width: 1017px) {
    font-size: 15px;
  }

  @media (max-width: 535px) {
    font-size: 14px;
  }

  @media (max-width: 414px) {
    font-size: 12px;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatItem = styled.div`
  width: 80px;
  text-align: center;

  h1 {
    span {
      color: ${(props) => props.theme.WarmBeige};
    }

    @media (min-width: 1047px) {
      font-size: 27px;
    }

    @media (max-width: 535px) {
      font-size: 25px;
    }

    @media (max-width: 414px) {
      font-size: 23px;
    }
  }

  p {
    font-weight: 700;

    @media (max-width: 414px) {
      font-size: 13px;
    }
  }
`;

export const ImageCorteSection = styled.div`
  width: 55%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    height: 70%;
  }

  @media (max-width: 1017px) {
    width: 50%;
  }

  @media (max-width: 860px) {
    width: 100%;
  }

  @media (max-width: 535px) {
    width: 90%;
  }

  @media (max-width: 452px) {
    width: 80%;
  }
`;
