import { Button, styled } from "@mui/material";

export const NavbarOuterContainer = styled("nav")`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  background-color: transparent;
  padding: 0 5rem;
  align-items: center;
`;

export const NavbarLeftContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const NavbarRightContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const NavbarLogoContainer = styled("div")`
  margin-right: 5rem;
  display: flex;
  align-items: center;
`;

export const NavbarMenuContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const NavbarMenuButton = styled(Button)`
  font-weight: 500;
  line-height: 1rem;
  color: #0a0a0a;
  text-transform: capitalize;
`;
