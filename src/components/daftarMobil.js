import React, { Component } from "react";
import innova from "../assets/innova.png";
import xpander from "../assets/xpander.png";
import hiace from "../assets/hiace.png";

const DaftarMobil = () => {
  return (
    <div
      className="bg-white text-secondary px-4 py-5 text-center"
      id="daftar-mobil"
    >
      <div className="py-0">
        <h1 className="display-5 fw-bold mb-5" style={{ color: "#2d3d50" }}>
          Daftar Mobil
        </h1>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="card mx-3" style={{ width: "18rem" }}>
              <img src={innova} className="card-img-top" alt="Kijang Innova" />
              <div className="card-body">
                <h5 className="card-title">Kijang Innova</h5>
                <p className="card-text">
                  Innova New 350.000/Hari
                  <br />
                  Innova Reborn 500.000/Hari
                  <br />
                  (Tersedia Pilihan Manual dan Matic)
                </p>
              </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem" }}>
              <img
                src={xpander}
                className="card-img-top"
                alt="Mitsubishi Xpander"
              />
              <div className="card-body">
                <h5 className="card-title">Mitsubishi Xpander</h5>
                <p className="card-text">
                  350.000/Hari
                  <br />
                  (Tersedia Pilihan Manual dan Matic)
                </p>
              </div>
            </div>
            <div className="card mx-3" style={{ width: "18rem" }}>
              <img src={hiace} className="card-img-top" alt="Hiace" />
              <div className="card-body">
                <h5 className="card-title">Toyota Hiace</h5>
                <p className="card-text">
                  1.000.000/Hari
                  <br />
                  (Termasuk Supir)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class daftarMobil extends Component {
  render() {
    return (
      <main style={{ marginTop: "50px" }}>
        <DaftarMobil />
      </main>
    );
  }
}

export default daftarMobil;
