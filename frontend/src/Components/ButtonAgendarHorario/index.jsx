import { CalendarBlank } from "@phosphor-icons/react";
import { ButtonHero } from "./style";

export function ButtonAgendarHorario({ onClick }) {
  return (
    <ButtonHero onClick={onClick}>
      <CalendarBlank size={30} />
      <span>Agendar Horário</span>
    </ButtonHero>
  );
}
