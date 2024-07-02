import React, { Component } from "react";
import alphard from "../assets/alphard.png";
import {
  Container,
  ImgContainer,
  StyledImg,
  Heading,
  Paragraph,
  SubHeading,
  ButtonContainer,
  StyledButton,
} from "./StyledBody";

const Heroes = () => {
  const handlePesanClick = (message) => {
    alert(message);
  };
  return (
    <Container className="container col-xxl-8 px-4 py-5 rounded-3" id="home">
      <div className="row flex-lg-row-reverse align-items-center g-4 py-4">
        <ImgContainer className="container col-lg-5">
          <StyledImg
            src={alphard}
            className="d-block mx-lg-auto img-fluid rounded-3"
            alt="Alphard"
            width={450}
            height={450}
            loading="lazy"
          />
        </ImgContainer>
        <div className="col-lg-7">
          <Heading className="display-5 fw-bold lh-1 mb-5">
            SEWA MOBIL JAVAS
          </Heading>
          <Paragraph className="fs-5 mb-5">
            Apakah Anda merencanakan perjalanan bisnis atau liburan keluarga?{" "}
            <br />
            Hubungi kami sekarang dan rasakan sendiri kenyamanan berkendara
            dengan Javas RC! <br />
          </Paragraph>
          <SubHeading className="fw-bold mb-4">
            Klik tombol pesan sekarang!
          </SubHeading>
          <div className="justify-content-md-center">
            <div className="row">
              <div className="col-1" />
              <div className="col-10"></div>
              <div className="col-1" />
            </div>
            <ButtonContainer>
              <StyledButton
                href="https://wa.me/6281808618844"
                variant="primary"
                className="btn btn-white btn-lg px-4 me-sm-3 fw-bold"
                onClick={() => handlePesanClick("Mau Pesan Sekarang?")}
              >
                Pesan Sekarang
              </StyledButton>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </Container>
  );
};

class Body extends Component {
  render() {
    return (
      <main style={{ marginTop: "100px" }}>
        <Heroes />
      </main>
    );
  }
}

export default Body;
