import { Button, styled } from "@mui/material";
import ContactBackground from "../../assets/images/ContactBackground.png";
import TextField from "@mui/material/TextField";

export const ContactContainer = styled("section")`
  display: flex;
  margin: 2.5rem 5rem;
  padding: 4rem 5.5rem;
  gap: 5.3rem;
  background-image: url(${ContactBackground});
  width: 1280px;
  height: 576px;
  border-radius: 32px;
`;

export const ContactInnerContainer = styled("div")`
  flex: 50%;
  flex-direction: column;
`;

export const ContactTitleText = styled("p")`
  font-size: 42px;
  font-weight: 700;
  line-height: 46px;
`;

export const ContactDescriptionText = styled("p")`
  padding-top: ${(props) => props.textPadding};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #585a61;
`;

export const ContactFormContainer = styled("form")`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactNameContainer = styled("div")`
  display: flex;
  gap: 1rem;
`;

export const ContactInput = styled(TextField)`
  background-color: white;
  color: #585a61;
  width: ${(props) => props.inputWidth};
  &&& {
    border-radius: 15px;
  }
  & > .MuiOutlinedInput-root {
    border-radius: 15px;
  }
  & > .MuiOutlinedInput-root > fieldset {
    outline: none;
    border: none;
  }
`;

export const ContactSubmitButton = styled(Button)`
  border-radius: 10px;
  color: white;
  text-transform: capitalize;
  background: #3071f2;
  margin-top: 1.5rem;
  width: 180px;
  height: 48px;
`;
