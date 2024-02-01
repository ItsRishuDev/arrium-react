/* eslint-disable react/prop-types */
import {
  ArriumWorksNumberText,
  ArriumWorksTitleText,
  ArriumWorksDescriptionText,
  ArriumWorksMiddleInnerContainer,
  ArriumWorkMiddleTextContainer,
} from "./ArriumWorks.styled";

import { Box } from "@mui/material";

const ArriumWorksHorizontalCard = ({
  cardNumber,
  cardTitle,
  cardDescription,
  cardImage,
  imagePadding,
  textColor,
  cardColor,
}) => {
  return (
    <ArriumWorksMiddleInnerContainer cardColor={cardColor}>
      <ArriumWorkMiddleTextContainer>
        <ArriumWorksNumberText textColor={textColor}>
          {cardNumber}
        </ArriumWorksNumberText>
        <ArriumWorksTitleText>{cardTitle}</ArriumWorksTitleText>
        <ArriumWorksDescriptionText>
          {cardDescription}
        </ArriumWorksDescriptionText>
      </ArriumWorkMiddleTextContainer>
      <Box paddingTop={imagePadding}>
        <img src={cardImage} alt="photo frame" />
      </Box>
    </ArriumWorksMiddleInnerContainer>
  );
};

export default ArriumWorksHorizontalCard;
