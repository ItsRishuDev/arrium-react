import { styled } from "@mui/material";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 30%;
  background-color: #f9faff;
  max-width: 25.625rem;
  height: 15.25rem;
  border-radius: 12px;
  padding: 1.5rem;
  gap: 1rem;
`;

export const CardIconContainer = styled("div")`
  width: 40px;
  height: 40px;
  padding: 5px, 5px, 6px, 5px;
`;

export const CardTitleContainer = styled("p")`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: #000000;
`;

export const CardDescriptionContainer = styled("p")`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #000000;
`;
