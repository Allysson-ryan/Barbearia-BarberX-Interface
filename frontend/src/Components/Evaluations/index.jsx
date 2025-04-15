import GoogleIcon from "../../assets/icons/icon-google.svg";
import TripadvisorIcon from "../../assets/icons/tripadvisor icon.svg";
import { Star } from "@phosphor-icons/react";
import Thumbnail from "../../assets/Thumbnail.png";
import {
  EvaluationCard,
  EvaluationHeader,
  EvaluationsContainer,
  Rating,
  RatingStars,
  ReviewCount,
  ReviewerName,
  ReviewText,
  ReviewThumbnail,
  Title,
  UserReview,
} from "./style";

export function Evaluations() {
  return (
    <EvaluationsContainer>
      <EvaluationCard>
        <EvaluationHeader>
          <img src={GoogleIcon} alt="googleIcon" />
          <Title>GOOGLE</Title>
          <Rating>4.9</Rating>
        </EvaluationHeader>
        <RatingStars>
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
        </RatingStars>
        <ReviewCount>196 avaliações</ReviewCount>
      </EvaluationCard>

      <UserReview>
        <ReviewThumbnail src={Thumbnail} alt="Thumbnail" />
        <RatingStars>
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
        </RatingStars>
        <Title>OS MELHORES SERVIÇOS DE BARBEIRO</Title>
        <ReviewText>
          Et proin ut in dignissim sem non a nullam magna lectus urna et dui
          quam tellus imperdiet sit purus at fringilla scelerisque diam amet
          fermentum orci fringilla aliquet nulla lectus erat eu auctor
        </ReviewText>
        <ReviewerName>SAM HOUSTON</ReviewerName>
      </UserReview>

      <EvaluationCard>
        <EvaluationHeader>
          <img src={TripadvisorIcon} alt="TripadvisorIcon" />
          <Title>TRIPADVISOR</Title>
          <Rating>5.0</Rating>
        </EvaluationHeader>
        <RatingStars>
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
          <Star size={20} color="#F2C94C" weight="fill" />
        </RatingStars>
        <ReviewCount>196 avaliações</ReviewCount>
      </EvaluationCard>
    </EvaluationsContainer>
  );
}
