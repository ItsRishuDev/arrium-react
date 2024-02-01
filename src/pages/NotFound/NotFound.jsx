/* eslint-disable react/no-unescaped-entities */
import {
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundTextContainer,
  NotFoundImageContainer,
  NotFoundCodeText,
  NotFoundDescription,
  NotFoundBackHomeButton,
} from "./NotFound.styled.jsx";

import Navbar from "../../components/Navbar";
import Laptop from "../../assets/Logo/Laptop.svg";
import Arrow from "../../assets/Logo/Arrow.svg";
import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <NotFoundContainer>
        <NotFoundContentContainer>
          <NotFoundTextContainer>
            <NotFoundCodeText>404</NotFoundCodeText>
            <Box position="relative">
              <NotFoundDescription>
                This page doesn't exist or was removed. <br /> We suggest you
                back to home
              </NotFoundDescription>
              <Box position="absolute" left="230px" top="2rem">
                <img src={Arrow} alt="Arrow" />
              </Box>
            </Box>

            <NotFoundBackHomeButton variant="contained">
              Back to Home
            </NotFoundBackHomeButton>
          </NotFoundTextContainer>
          <NotFoundImageContainer>
            <img
              src={Laptop}
              alt="Laptop Image"
              style={{
                width: "80%",
                height: "80%",
              }}
            />
          </NotFoundImageContainer>
        </NotFoundContentContainer>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
