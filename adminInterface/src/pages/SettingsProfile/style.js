import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  width: 23rem;
  height: 23rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const BoxUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const BoxButtonEdit = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ButtonEdit = styled.button`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.LightSilver};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.LightGray};
  }
`;

//Modal style
export const BoxInput = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 25rem;
  padding: 50px;
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
