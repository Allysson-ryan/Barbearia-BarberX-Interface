import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 6rem;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 50px;
  }

  p {
    text-align: center;
    width: 40%;
    margin-top: 10px;
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
