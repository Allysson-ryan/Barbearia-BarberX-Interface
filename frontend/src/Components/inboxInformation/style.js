import styled from "styled-components";
import { Clock, MapPin, Phone } from "@phosphor-icons/react";

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80vw;
  padding: 20px;
  background-color: ${(props) => props.theme.white};
  position: relative;
  top: -3rem;
  gap: 5rem;
  border-radius: 10px;

  @media (max-width: 1020px) {
    width: 90vw;
  }

  @media (max-width: 565px) {
    gap: 4rem;
  }

  @media (max-width: 526px) {
    gap: 3rem;
  }

  @media (max-width: 518px) {
    padding: 15px;
  }

  @media (max-width: 493px) {
    gap: 2rem;
  }

  @media (max-width: 387px) {
    gap: 1rem;
  }

  @media (max-width: 387px) {
    gap: 12px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 13rem;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    margin-top: 38px;
    width: 60px;
    height: 4px;
    background-color: ${(props) => props.theme.WarmBeige};
  }

  @media (max-width: 759px) {
    font-size: 17px;
    margin-bottom: 20px;
  }

  @media (max-width: 518px) {
    font-size: 13px;
  }

  @media (max-width: 485px) {
    font-size: 10px;
    margin-bottom: 15px;

    &::after {
      margin-top: 25px;
      width: 30px;
    }
  }
`;

export const ClockIcon = styled(Clock)`
  width: 43px;
  height: 43px;

  @media (max-width: 759px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 485px) {
    width: 25px;
    height: 25px;
  }
`;

export const MapPinIcon = styled(MapPin)`
  width: 43px;
  height: 43px;

  @media (max-width: 759px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 485px) {
    width: 25px;
    height: 25px;
  }
`;

export const PhoneIcon = styled(Phone)`
  width: 43px;
  height: 43px;

  @media (max-width: 759px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 485px) {
    width: 25px;
    height: 25px;
  }
`;

export const Information = styled.p`
  @media (max-width: 759px) {
    font-size: 14px;
  }

  @media (max-width: 655px) {
    font-size: 12px;
  }

  @media (max-width: 518px) {
    font-size: 10px;
    font-weight: 400;
  }

  @media (max-width: 387px) {
    font-size: 9px;
  }
`;
