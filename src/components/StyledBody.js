import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Container = styled.div`
  background-color: #b5d4f8;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
`;

export const ImgContainer = styled.div`
  text-align: center;
`;

export const StyledImg = styled.img`
  border-radius: 0.3rem;
`;

export const Heading = styled.h1`
  color: #2d3d50;
  text-align: center;
`;

export const Paragraph = styled.p`
  text-align: center;
  color: #2d3d50;
`;

export const SubHeading = styled.h4`
  color: #2d3d50;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const StyledButton = styled(Button)`
  color: #e5e7ea;
`;
