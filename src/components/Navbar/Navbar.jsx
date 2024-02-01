import {
  NavbarOuterContainer,
  NavbarLeftContainer,
  NavbarRightContainer,
  NavbarLogoContainer,
  NavbarMenuContainer,
  NavbarMenuButton,
} from "./Navbar.styled";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import BrandLogo from "../../assets/Logo/BrandLogo.svg";

const Navbar = () => {
  return (
    <NavbarOuterContainer>
      <NavbarLeftContainer>
        <RouterLink to="/">
          <NavbarLogoContainer>
            <img src={BrandLogo} alt="Arrium logo" />
          </NavbarLogoContainer>
        </RouterLink>
        <NavbarMenuContainer>
          <Link to="BenefitSection" offset={-60} smooth={true} duration={500}>
            <NavbarMenuButton variant="text">Benefits</NavbarMenuButton>
          </Link>
          <Link to="HowItWork" offset={-60} smooth={true} duration={500}>
            <NavbarMenuButton variant="text">How it Works</NavbarMenuButton>
          </Link>
          <Link to="Contact" offset={-60} smooth={true} duration={500}>
            <NavbarMenuButton variant="text">Contact Us</NavbarMenuButton>
          </Link>
        </NavbarMenuContainer>
      </NavbarLeftContainer>
      <NavbarRightContainer>
        <NavbarMenuButton variant="text">Login</NavbarMenuButton>
        <NavbarMenuButton
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
        </NavbarMenuButton>
      </NavbarRightContainer>
    </NavbarOuterContainer>
  );
};

export default Navbar;
