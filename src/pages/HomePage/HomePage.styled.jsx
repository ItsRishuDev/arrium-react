import { styled } from "@mui/material";
import NotFoundBackground from "../../assets/images/NotFoundBackground.png";

export const BannerContainer = styled("div")`
  background-image: url(${NotFoundBackground});
  height: 100vh;
`;

export const CardContainer = styled("section")`
  display: flex;
  flex-wrap: wrap;
  padding: 2.5rem 5rem;
  gap: 1.5rem;
`;
