import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const BoxHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxFilterInput = styled.div`
  width: 15rem;
  padding: 8px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.LightSilver};
`;

export const FilterInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 80%;
    border: none;
    background-color: transparent;
  }
`;

export const InputFilterDate = styled.div`
  background-color: ${(props) => props.theme.white};
`;

export const BoxTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 20px;
  background-color: ${(props) => props.theme.white};
`;
