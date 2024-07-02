import styled from "styled-components";

export const FooterContainer = styled.footer`
  text-align: center;
  background-color: var(--bs-body-tertiary);
  margin-top: 1.25rem;
`;

export const GridContainer = styled.div`
  padding-top: 1rem;
`;

export const SocialSection = styled.section`
  margin-bottom: 1rem;
`;

export const SocialButton = styled.a`
  color: #2d3d50;
  &.btn-link.btn-floating.btn-lg.m-1 {
    color: #2d3d50;
  }
`;

export const CopyrightContainer = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #2d3d50;
  color: #e5e7ea;
  & a {
    text-decoration: none;
    color: #e5e7ea;
  }
`;
