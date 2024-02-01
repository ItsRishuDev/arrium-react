import { Button, styled } from "@mui/material";
import NotFoundBackground from "../../assets/images/NotFoundBackground.png";

export const NotFoundContainer = styled("main")`
  background-image: url(${NotFoundBackground});
  background-size: cover;
  min-height: 100vh;
`;

export const NotFoundContentContainer = styled("div")`
  display: flex;
  padding: 0 5rem;
  padding-top: 5rem;
`;

export const NotFoundTextContainer = styled("div")`
  display: flex;
  flex: 40%;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const NotFoundImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 60%;
  height: 100%;
  margin-top: 5rem;
`;

export const NotFoundCodeText = styled("p")`
  font-size: 146px;
  font-weight: 700;
  line-height: 146px;
`;

export const NotFoundDescription = styled("p")`
  line-height: 27px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #585a61;
`;

export const NotFoundBackHomeButton = styled(Button)`
  border-radius: 10px;
  color: white;
  text-transform: capitalize;
  width: 25%;
  background: #3071f2;
`;
