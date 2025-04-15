import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  border-bottom: 1px solid #000000;
  padding-bottom: 40px;

  h1 {
    font-weight: 600;
  }
`;

export const UserBox = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h4 {
    font-weight: 600;
  }
`;

export const InputFilterDate = styled.div`
  width: 245px;
  background-color: ${(props) => props.theme.white};
`;

export const ContainerHorario = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxHorario = styled.div`
  width: 25rem;
  height: 25rem;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const TimeOfDay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  gap: 10px;
`;

export const NoTimeMessage = styled.div`
  grid-column: span 4;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.black};
`;

export const Times = styled.div`
  width: 70px;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.LightSilver};
`;

export const BoxButtonEdit = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ButtonEdit = styled.button`
  width: 100%;
  padding: 5px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.LightSilver};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background-color: ${(props) => props.theme.LightGray};
  }
`;

//Modal style
export const BoxInput = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 25rem;
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

export const TimeOfDayModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export const TimesModal = styled.div`
  width: 120px;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.LightSilver};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxEditTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const EditTime = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    width: 25px;
    width: 25px;
    padding: 2px;
    background-color: ${(props) => props.theme.LightGray};
    color: ${(props) => props.theme.LightSilver};
    border-radius: 5px;
  }
`;
