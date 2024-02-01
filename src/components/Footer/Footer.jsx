import {
  FooterContainer,
  FooterInnerContainer,
  FooterMenuContainer,
  FooterMenuButton,
  FooterEmailText,
  FooterInnerRightContainer,
  FooterLogoContainer,
  FooterIconContainer,
} from "./Footer.styled";
import BrandLogo from "../../assets/Logo/BrandLogo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterLogoContainer>
          <img src={BrandLogo} alt="Arrium" />
        </FooterLogoContainer>
        <FooterMenuContainer
          sx={{
            marginRight: "7rem",
          }}
        >
          <FooterEmailText>Benefits</FooterEmailText>
          <FooterEmailText>How it Works</FooterEmailText>
          <FooterEmailText>Contact Us</FooterEmailText>
        </FooterMenuContainer>
        <FooterMenuContainer>
          <FooterEmailText>info@arrium.com</FooterEmailText>
          <FooterIconContainer>
            <InstagramIcon />
            <FacebookIcon />
          </FooterIconContainer>
        </FooterMenuContainer>
      </FooterInnerContainer>
      <FooterInnerRightContainer>
        <FooterMenuContainer>
          <FooterMenuButton
            variant="outlined"
            sx={{
              borderColor: "#E6E6ED",
            }}
          >
            Login
          </FooterMenuButton>
          <FooterMenuButton
            variant="contained"
            sx={{
              color: "white",
              borderRadius: "6px",
              padding: "0.5rem 1rem",
              background: "#3071F2",
              fontWeight: "600",
            }}
          >
            Start Free Trial
          </FooterMenuButton>
        </FooterMenuContainer>
      </FooterInnerRightContainer>
    </FooterContainer>
  );
};

export default Footer;
