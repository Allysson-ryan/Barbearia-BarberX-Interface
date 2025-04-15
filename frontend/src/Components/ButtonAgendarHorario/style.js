import styled from "styled-components";

export const ButtonHero = styled.button`
  margin-top: 20px;
  width: 23rem;
  height: 3rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.WarmBeige};
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 20px;
    font-weight: 600;
  }

  &:hover {
    background-color: ${(props) => props.theme.darkVanila};
  }

  &:active {
    background-color: ${(props) => props.theme.darkVanila};
  }
`;
