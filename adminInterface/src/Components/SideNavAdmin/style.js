import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 20px;

  img {
    margin: 30px 0;
    opacity: 0.8;
  }
`;

export const StyledIcon = styled.span`
  color: ${(props) =>
    props.active ? props.theme.darkVanila : props.theme.LightSilver};
  display: flex;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  padding: 12px 20px;
  text-decoration: none;
  color: ${(props) =>
    props.$isActive ? props.theme.darkVanila : props.theme.LightSilver};
  background-color: ${(props) =>
    props.$isActive ? props.theme.LightGray : "transparent"};
  &:hover {
    background-color: ${(props) => props.theme.LightGray};
  }
`;

export const LabelNavLink = styled.span`
  font-weight: 500;
`;
