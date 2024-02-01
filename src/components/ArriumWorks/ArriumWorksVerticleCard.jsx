/* eslint-disable react/prop-types */
import {
  ArriumWorksVerticleContainer,
  ArriumWorksUpperLeftContainer,
  ArriumWorksNumberText,
  ArriumWorksTitleText,
  ArriumWorksDescriptionText,
} from "./ArriumWorks.styled";

const ArriumWorksVerticleCard = ({
  cardNumber,
  cardTitle,
  cardDescription,
  cardImage,
  textColor,
  cardColor,
}) => {
  return (
    <ArriumWorksVerticleContainer cardColor={cardColor}>
      <ArriumWorksUpperLeftContainer>
        <ArriumWorksNumberText textColor={textColor}>
          {cardNumber}
        </ArriumWorksNumberText>
        <ArriumWorksTitleText>{cardTitle}</ArriumWorksTitleText>
        <ArriumWorksDescriptionText>
          {cardDescription}
        </ArriumWorksDescriptionText>
      </ArriumWorksUpperLeftContainer>
      <img src={cardImage} alt="photo frame" />
    </ArriumWorksVerticleContainer>
  );
};

export default ArriumWorksVerticleCard;
