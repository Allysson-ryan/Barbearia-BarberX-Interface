import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const BoxInfo = styled.div`
  width: 20rem;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.WarmBeige};
  gap: 10px;
`;

export const Button = styled.button`
  width: 10rem;
  height: 40px;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;
