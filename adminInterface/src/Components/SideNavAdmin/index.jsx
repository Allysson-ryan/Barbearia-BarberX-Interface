import {
  Container,
  NavLink,
  NavLinkContainer,
  StyledIcon,
  LabelNavLink,
} from "./style";
import LogoImg from "../../assets/Logomarca.png";
import { navLinks } from "./navLinks";
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
  const { pathname } = useResolvedPath();

  return (
    <Container>
      <img src={LogoImg} alt="logomarca" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            <StyledIcon active={pathname === link.path}>
              {link.icons}
            </StyledIcon>
            <LabelNavLink>{link.label}</LabelNavLink>
          </NavLink>
        ))}
      </NavLinkContainer>
    </Container>
  );
}
