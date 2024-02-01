/* eslint-disable react/prop-types */
import {
  CardContainer,
  CardIconContainer,
  CardTitleContainer,
  CardDescriptionContainer,
} from "./Card.styled";

const Card = ({ icon, title, description }) => {
  return (
    <>
      <CardContainer>
        <CardIconContainer>
          <img src={icon} alt="icon" />
        </CardIconContainer>
        <CardTitleContainer>{title}</CardTitleContainer>
        <CardDescriptionContainer>{description}</CardDescriptionContainer>
      </CardContainer>
    </>
  );
};

export default Card;
