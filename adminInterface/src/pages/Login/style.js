import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.cultured};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxInput = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 25rem;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Form = styled.form`
  width: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 50%;
  height: 35px;
  border: none;
  background-color: ${(props) => props.theme.WarmBeige};
  font-weight: 600;
  color: ${(props) => props.theme.white};
  margin-top: 40px;

  &:hover {
    background-color: ${(props) => props.theme.darkVanila};
  }

  &:active {
    background-color: ${(props) => props.theme.darkVanila};
  }
`;

export const LoginRedirect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  p {
    font-size: 13px;
  }
`;

export const InformationLogin = styled.div`
  width: 12rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.darkVanila};
  border-radius: 10px;
  margin-top: 20px;
`;

export const TitleInformationLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 4px;

  h3 {
    font-size: 15px;
    font-weight: 700;
    color: ${(props) => props.theme.darkVanila};
  }
`;

export const BoxInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4 {
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => props.theme.darkVanila};
  }
`;
