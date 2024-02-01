import { styled } from "@mui/material";
import { Button } from "@mui/material";

export const FooterContainer = styled("footer")`
  display: flex;
  padding: 3rem 5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FooterInnerContainer = styled("div")`
  display: flex;
`;

export const FooterInnerRightContainer = styled("div")`
  display: flex;

  justify-content: end;
`;

export const FooterMenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FooterMenuButton = styled(Button)`
  font-weight: 64px;
  line-height: 1rem;
  color: #0a0a0a;
  text-transform: capitalize;
  text-align: left;
  align-items: start;
`;

export const FooterEmailText = styled("p")`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  color: #0a0a0a;
`;

export const FooterLogoContainer = styled("div")`
  margin-right: 5rem;
  display: flex;
  align-items: flex-start;
`;

export const FooterIconContainer = styled("div")`
  display: flex;
  padding-top: 0.5rem;
`;
