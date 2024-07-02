// import React, { Component, useState } from "react";
// import {
//   StyledFormContainer,
//   ButtonContainer,
//   StyledButton,
//   PesanStyle
// } from "./StyledForm";

// // import Card from 'react-bootstrap/Card';

// const Form = () => {
//   const [pesan, setPesan] = useState([]);
//   const [inputUserNama, setInputUserNama] = useState("");
//   const [inputUserEmail, setInputUserEmail] = useState("");
//   const [inputUserPesan, setInputUserPesan] = useState("");

//   const handleNamaChange = (e) => {
//     setInputUserNama(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setInputUserEmail(e.target.value);
//   };

//   const handlePesanChange = (e) => {
//     setInputUserPesan(e.target.value);
//   };

//   const addPesan = () => {
//     if (
//       inputUserNama.trim() !== "" &&
//       inputUserEmail.trim() !== "" &&
//       inputUserPesan.trim() !== ""
//     ) {
//       const newPesan = {
//         nama: inputUserNama,
//         email: inputUserEmail,
//         isiPesan: inputUserPesan,
//       };
//       setPesan([...pesan, newPesan]);
//       setInputUserNama("");
//       setInputUserEmail("");
//       setInputUserPesan("");
//     }
//   };

//   const deletePesan = (index) => {
//     const updatePesan = pesan.filter((_, i) => i !== index);
//     setPesan(updatePesan);
//   };

//   return (
//     <body>
//       <StyledFormContainer
//         className="container col-xxl-8 px-4 py-5 rounded-3"
//         id="hubungi-kami"
//       >
//         <div
//           className="card px-5"
//           style={{
//             backgroundColor: "#b5d4f8",
//             boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           <h1
//             className="display-5 fw-bold mb-5 mt-5 text-center"
//             style={{ color: "#2d3d50" }}
//           >
//             Hubungi Kami
//           </h1>
//           <div className="row g-4">
//             <div className="col-md-6">
//               <div className="mb-4">
//                 <div className="card-body">
//                   <h4
//                     className="card-title text-center mt-0 mb-4"
//                     style={{ color: "#2d3d50" }}
//                   >
//                     <strong>Alamat</strong>
//                   </h4>
//                   <h5
//                     className="card-text text-center"
//                     style={{ color: "#2d3d50" }}
//                   >
//                     Sewa Mobil Javas Office
//                     <br />
//                     Jl. Tamtama Barat XI No.34a, Ngesrep, Kec. Banyumanik, Kota
//                     Semarang, Jawa Tengah 50261
//                   </h5>
//                 </div>
//               </div>
//               {/* Form */}
//               <div>
//                 <form className="p-2">
//                   <div className="container">
//                     <h4 className="text-center" style={{ color: "#2d3d50" }}>
//                       <strong>Bagikan Pengalaman Anda</strong>
//                     </h4>
//                     <label
//                       htmlFor="exampleInputName"
//                       className="form-label"
//                       style={{ color: "#2d3d50" }}
//                     >
//                       Nama:
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="exampleInputName"
//                       aria-describedby="emailHelp"
//                       placeholder="Isikan Nama"
//                       style={{ color: "secondary" }}
//                       value={inputUserNama}
//                       onChange={handleNamaChange}
//                     />
//                   </div>
//                   <div className="container mt-3">
//                     <label
//                       htmlFor="exampleInputEmail"
//                       className="form-label"
//                       style={{ color: "#2d3d50" }}
//                     >
//                       Email:
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="exampleInputEmail"
//                       placeholder="Masukkan Email"
//                       style={{ color: "secondary" }}
//                       value={inputUserEmail}
//                       onChange={handleEmailChange}
//                     />
//                   </div>
//                   <div className="container mt-3">
//                     <label
//                       htmlFor="exampleInputEmail"
//                       className="form-label"
//                       style={{ color: "#2d3d50" }}
//                     >
//                       Pesan & Kesan:
//                     </label>
//                     <textarea
//                       name="pesan"
//                       id="pesan"
//                       className="form-control"
//                       defaultValue={""}
//                       rows="3"
//                       placeholder="Tuliskan Pesan"
//                       style={{ color: "secondary" }}
//                       value={inputUserPesan}
//                       onChange={handlePesanChange}
//                     />
//                   </div>
//                   <br />
//                   <div className="container mb-3">
//                     <ButtonContainer>
//                       <StyledButton
//                         type="button"
//                         variant="primary"
//                         className="btn btn-white btn-lg px-4 me-sm-3 fw-bold"
//                         onClick={() => addPesan("Yak!")}
//                       >
//                         Kirim
//                       </StyledButton>
//                     </ButtonContainer>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <h4
//                 className="card-title text-center mt-3 mb-4"
//                 style={{ color: "#2d3d50" }}
//               >
//                 <strong>Google Maps</strong>
//               </h4>
//               <iframe
//                 title="Google Maps Location"
//                 className="rounded-3"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7817866603386!2d110.42825890858869!3d-7.0349142999999925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d8ef567971d%3A0xcda4f790ef754048!2ssewa%20mobil%20javas%20office!5e0!3m2!1sid!2sid!4v1719084080282!5m2!1sid!2sid"
//                 width="95%"
//                 height="72%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>
//         </div>
//       </StyledFormContainer>
//       <PesanStyle className="pesan-list">
//         {pesan.map((pesan, index) => (
//           <div className="box" key={index}>
//             <h2 className="card-title">{pesan.nama}</h2>
//             <h2 className="card-title">{pesan.email}</h2>
//             <p className="card-title">{pesan.isiPesan}</p>
//             <button
//               onClick={() => deletePesan(index)}
//               className="btn btn-danger"
//             >
//               Hapus
//             </button>
//           </div>
//         ))}
//       </PesanStyle>
//     </body>
//   );
// };

// class form extends Component {
//   render() {
//     return (
//       <main style={{ marginTop: "50px" }}>
//         <Form />
//       </main>
//     );
//   }
// }

// export default form;

import React, { useState } from "react";
import {
  StyledFormContainer,
  ButtonContainer,
  StyledButton,
  PesanStyle
} from "./StyledForm";

const Form = () => {
  const [pesan, setPesan] = useState([]);
  const [inputUserNama, setInputUserNama] = useState("");
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputUserPesan, setInputUserPesan] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleNamaChange = (e) => {
    setInputUserNama(e.target.value);
  };

  const handleEmailChange = (e) => {
    setInputUserEmail(e.target.value);
  };

  const handlePesanChange = (e) => {
    setInputUserPesan(e.target.value);
  };

  const addPesan = () => {
    if (
      inputUserNama.trim() !== "" &&
      inputUserEmail.trim() !== "" &&
      inputUserPesan.trim() !== ""
    ) {
      const newPesan = {
        nama: inputUserNama,
        email: inputUserEmail,
        isiPesan: inputUserPesan,
      };
      if (editIndex !== null) {
        const updatedPesan = [...pesan];
        updatedPesan[editIndex] = newPesan;
        setPesan(updatedPesan);
        setEditIndex(null);
      } else {
        setPesan([...pesan, newPesan]);
      }
      setInputUserNama("");
      setInputUserEmail("");
      setInputUserPesan("");
    }
  };

  const deletePesan = (index) => {
    const updatePesan = pesan.filter((_, i) => i !== index);
    setPesan(updatePesan);
  };

  const editPesan = (index) => {
    setInputUserNama(pesan[index].nama);
    setInputUserEmail(pesan[index].email);
    setInputUserPesan(pesan[index].isiPesan);
    setEditIndex(index);
  };

  return (
    <body>
      <StyledFormContainer
        className="container col-xxl-8 px-4 py-5 rounded-3"
        id="hubungi-kami"
      >
        <div
          className="card px-5"
          style={{
            backgroundColor: "#b5d4f8",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1
            className="display-5 fw-bold mb-5 mt-5 text-center"
            style={{ color: "#2d3d50" }}
          >
            Hubungi Kami
          </h1>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="mb-4">
                <div className="card-body">
                  <h4
                    className="card-title text-center mt-0 mb-4"
                    style={{ color: "#2d3d50" }}
                  >
                    <strong>Alamat</strong>
                  </h4>
                  <h5
                    className="card-text text-center"
                    style={{ color: "#2d3d50" }}
                  >
                    Sewa Mobil Javas Office
                    <br />
                    Jl. Tamtama Barat XI No.34a, Ngesrep, Kec. Banyumanik, Kota
                    Semarang, Jawa Tengah 50261
                  </h5>
                </div>
              </div>
              {/* Form */}
              <div>
                <form className="p-2">
                  <div className="container">
                    <h4 className="text-center" style={{ color: "#2d3d50" }}>
                      <strong>Bagikan Pengalaman Anda</strong>
                    </h4>
                    <label
                      htmlFor="exampleInputName"
                      className="form-label"
                      style={{ color: "#2d3d50" }}
                    >
                      Nama:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      placeholder="Isikan Nama"
                      style={{ color: "secondary" }}
                      value={inputUserNama}
                      onChange={handleNamaChange}
                    />
                  </div>
                  <div className="container mt-3">
                    <label
                      htmlFor="exampleInputEmail"
                      className="form-label"
                      style={{ color: "#2d3d50" }}
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail"
                      placeholder="Masukkan Email"
                      style={{ color: "secondary" }}
                      value={inputUserEmail}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="container mt-3">
                    <label
                      htmlFor="exampleInputEmail"
                      className="form-label"
                      style={{ color: "#2d3d50" }}
                    >
                      Pesan & Kesan:
                    </label>
                    <textarea
                      name="pesan"
                      id="pesan"
                      className="form-control"
                      defaultValue={""}
                      rows="3"
                      placeholder="Tuliskan Pesan"
                      style={{ color: "secondary" }}
                      value={inputUserPesan}
                      onChange={handlePesanChange}
                    />
                  </div>
                  <br />
                  <div className="container mb-3">
                    <ButtonContainer>
                      <StyledButton
                        type="button"
                        variant="primary"
                        className="btn btn-white btn-lg px-4 me-sm-3 fw-bold"
                        onClick={addPesan}
                      >
                        {editIndex !== null ? "Update" : "Kirim"}
                      </StyledButton>
                    </ButtonContainer>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <h4
                className="card-title text-center mt-3 mb-4"
                style={{ color: "#2d3d50" }}
              >
                <strong>Google Maps</strong>
              </h4>
              <iframe
                title="Google Maps Location"
                className="rounded-3"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7817866603386!2d110.42825890858869!3d-7.0349142999999925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d8ef567971d%3A0xcda4f790ef754048!2ssewa%20mobil%20javas%20office!5e0!3m2!1sid!2sid!4v1719084080282!5m2!1sid!2sid"
                width="95%"
                height="72%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </StyledFormContainer>
      <PesanStyle className="pesan-list">
        {pesan.map((pesan, index) => (
          <div className="box" key={index}>
            <h2 className="card-title">{pesan.nama}</h2>
            <h2 className="card-title">{pesan.email}</h2>
            <p className="card-title">{pesan.isiPesan}</p>
            <button
              onClick={() => editPesan(index)}
              className="btn btn-warning"
            >
              Edit
            </button>
            <button
              onClick={() => deletePesan(index)}
              className="btn btn-danger"
            >
              Hapus
            </button>
          </div>
        ))}
      </PesanStyle>
    </body>
  );
};

const App = () => {
  return (
    <main style={{ marginTop: "50px" }}>
      <Form />
    </main>
  );
}

export default App;
