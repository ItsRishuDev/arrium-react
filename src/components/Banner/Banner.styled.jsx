import { Button, styled } from "@mui/material";

export const BannerOuterContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 5rem;
  padding-top: 5rem;
  gap: 1.5rem;
`;

export const BannerTopText = styled("p")`
  margin-top: 3rem;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #3071f2;
`;

export const BannerMiddleText = styled("p")`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  text-align: center;
  color: #000000;
`;

export const BannerLowerText = styled("p")`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #49f199;
`;

export const BannerStartButton = styled(Button)`
  border-radius: 10px;
  color: white;
  text-transform: capitalize;
  background: #3071f2;
`;

export const BannerImage = styled("div")`
  align-items: center;
  padding-top: 2.8rem;
`;
