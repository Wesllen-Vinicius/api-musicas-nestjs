import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages";
import FourZeroFour from "../pages/404";
import CadastroAlbum from "../pages/cadasAlbum";
import CadastroArtista from "../pages/cadasArtista";
import CadastroMusica from "../pages/cadasMusica";
import Cadastro from "../pages/cadastroUser";
import Login from "../pages/loginUser";
import DashBoard from "../pages/dashBoard";
import UpdateDados from "../pages/updateDados";


const Rotas: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/cadastroMusica" element={<CadastroMusica/>} />
      <Route path="/cadastroAlbum" element={<CadastroAlbum/>} />
      <Route path="/updateDados" element={<UpdateDados/>} />
      <Route path="/cadastroArtista" element={<CadastroArtista/>} />
      <Route path="/dashBoard" element={<DashBoard/>} />
      <Route path="/*" element={<FourZeroFour />} />
    </Routes>
  );
};
export default Rotas;
