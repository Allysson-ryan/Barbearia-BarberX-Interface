import styled from "styled-components";

export const EvaluationsContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  padding: 20px;
  margin-bottom: 100px;
`;

export const EvaluationCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const EvaluationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h3``;

export const Rating = styled.h1`
  font-size: 5rem;
`;

export const RatingStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const ReviewCount = styled.p``;

export const UserReview = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  margin: 30px;
  gap: 15px;
  border: 2px solid ${(props) => props.theme.darkVanila};
  overflow: visible;
`;

export const ReviewThumbnail = styled.img`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ReviewTitle = styled.h3``;

export const ReviewText = styled.p`
  text-align: center;
`;

export const ReviewerName = styled.h4``;
