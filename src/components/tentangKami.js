import React, { Component } from "react";
import imageMobil from "../assets/imageMobil.png";

const TentangKami = () => {
  return (
    <div
      className="bg-white text-secondary px-4 py-5 text-center"
      id="tentang-kami"
    >
      <div className="py-0">
        <h1 className="display-5 fw-bold mb-5" style={{ color: "#2d3d50" }}>
          Tentang Kami
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-5" style={{ color: "#2d3d50" }}>
            Javas RC siap menemani setiap langkah perjalanan Anda dengan
            pelayanan sewa mobil terbaik di kelasnya. Kami memahami bahwa
            kenyamanan dan keamanan adalah prioritas utama, dan itulah yang kami
            tawarkan kepada Anda. Javas RC bukan hanya sekedar sewa mobil,
            tetapi partner terpercaya yang selalu siap menemani setiap momen
            perjalanan Anda.
          </p>
          <img
            src={imageMobil}
            className="d-block mx-lg-auto img-fluid"
            alt="Mobil"
            width={800}
            height={800}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

class tentangKami extends Component {
  render() {
    return (
      <main style={{ marginTop: "100px" }}>
        <TentangKami />
      </main>
    );
  }
}

export default tentangKami;
