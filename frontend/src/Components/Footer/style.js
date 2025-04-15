import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: ${(props) => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  h4 {
    color: ${(props) => props.theme.white};
    font-weight: 400;
    font-size: 13px;
  }
`;

export const Logo = styled.div`
  margin-right: 10px;
`;
