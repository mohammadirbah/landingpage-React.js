// StyledHeader.js
import styled from "styled-components";
import { Navbar, Container, Nav } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background-color: #2d3d50;
  &.rounded-bottom-1 {
    border-radius: 0 0 0.25rem 0.25rem;
  }
`;

export const StyledNavbarBrand = styled(Navbar.Brand)`
  img {
    width: 120px;
    height: 40px;
    margin-left: 3rem;
  }
`;

export const StyledNavbarToggle = styled(Navbar.Toggle)`
  color: #e5e7ea;
`;

export const StyledNavbarCollapse = styled(Navbar.Collapse)`
  color: #e5e7ea;
`;

export const StyledNavLink = styled(Nav.Link)`
  font-family: sans-serif;
  color: #e5e7ea;
  text-align: center;
`;

export const StyledNav = styled(Nav)`
  max-height: 100px;
  .ms-auto {
    margin-right: 1.25rem;
  }
`;

export const StyledContainer = styled(Container)``;
