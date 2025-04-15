import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  PinterestLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { ContainerFooter, Logo } from "./style";

export function Footer() {
  return (
    <ContainerFooter>
      <h4>© Copyright 2025 Allysson Ryan - Todos os direitos reservados</h4>
      <Logo>
        <FacebookLogo size={32} color="#ffffff" weight="fill" />
        <TwitterLogo size={32} color="#ffffff" weight="fill" />
        <InstagramLogo size={32} fill="#ffffff" />
        <PinterestLogo size={32} fill="#ffffff" />
        <LinkedinLogo size={32} color="#ffffff" weight="fill" />
      </Logo>
    </ContainerFooter>
  );
}
