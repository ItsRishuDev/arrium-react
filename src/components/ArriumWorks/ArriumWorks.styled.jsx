import { styled } from "@mui/material";

export const ArriumWorksContainer = styled("section")`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 5rem;
  gap: 1.5rem;
`;

export const ArriumWorksVerticleContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  height: 380px;
  border-radius: 40px;
  border: 1.5px;
  background: ${(props) => props.cardColor};
`;

export const ArriumWorksUpperLeftContainer = styled("div")`
  flex: 40%;
  display: flex;
  padding: 0 4.5rem;
  padding-top: 3.125rem;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ArriumWorksNumberText = styled("p")`
  font-size: 72px;
  font-weight: 600;
  line-height: 87px;
  color: ${(props) => props.textColor};
`;

export const ArriumWorksTitleText = styled("p")`
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
`;

export const ArriumWorksDescriptionText = styled("p")`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`;

export const ArriumWorksMiddleContainer = styled("div")`
  display: flex;
  gap: 1.5rem;
`;

export const ArriumWorksMiddleInnerContainer = styled("div")`
  flex: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  width: 628px;
  height: 670px;
  border-radius: 40px;
  border: 1.5px;
  background: ${(props) => props.cardColor};
`;

export const ArriumWorkMiddleTextContainer = styled("div")`
  padding: 0 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
