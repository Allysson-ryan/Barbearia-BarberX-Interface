import styled from "styled-components";

export const HeaderAgendmento = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  margin-bottom: 40px;
`;

export const Logomarca = styled.img`
  width: 60px;
  height: 60px;
`;

export const BoxButtonsSair = styled.div`
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const Form = styled.form`
  width: 33rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  padding: 40px;
`;

export const BoxPersonalData = styled.div`
  width: 90%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.black};
  padding: 7px;

  margin-top: 7px;

  input {
    width: 100%;
    border: none;
  }
`;

export const Error = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.Error};
`;

export const ServicesContainer = styled.div`
  width: 90%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ServiceOptions = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    transform: scale(1.5);
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const HorariosContainer = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;
