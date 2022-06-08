import { Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuContainer from "../container/menu.container";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import Nivel from "../models/nivel.model";
import TabelaNivel from "../components/tabelaNivel/tabelaNivel.component";
import FormularioNiveisComponent from "../components/formularioNiveis/formularioNiveis.component";

function NiveisPage({ fetchNivel, create, remove, update, niveis }) {
  const [openNovo, setOpenNovo] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [nivel, setNivel] = useState(new Nivel());
  const handleOpen = () => setOpenNovo(true);
  const handleClose = () => setOpenNovo(false);

  useEffect(() => {
    fetchNivel();
  }, []);

  const handleRefresh = (e) => {
    e.preventDefault();
    fetchNivel();
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    create(nivel);
    setNivel(new Nivel());
    setOpenNovo(false);
  };

  const handleCancelar = (e) => {
    e.preventDefault();
    setNivel(new Nivel());
    setOpenNovo(false);
  };

  const handleEditar = (params) => {
    setNivel(params.row);
    setOpenEditar(true);
  };

  const handleDeletar = (e) => {
    e.preventDefault();
    remove(nivel);
    setNivel(new Nivel());
    setOpenEditar(false);
  };

  const handleAtualizar = (e) => {
    e.preventDefault();
    update(nivel);
    setNivel(new Nivel());
    setOpenEditar(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#FFF",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };

  return (
    <MenuContainer title="Niveis">
      <h1>Niveis</h1>
      <Button onClick={handleOpen}>Cadastrar Nivel</Button>
      <Button onClick={handleRefresh}>Atualizar</Button>
      <TabelaNivel data={niveis} onEditar={handleEditar} />
      <Modal open={openNovo} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h4" textAlign="center" fontWeight="bold">
            Novo Nivel
          </Typography>
          <FormularioNiveisComponent nivel={nivel} onUpdate={setNivel} />
          <Box mt={2} sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="warning" onClick={handleCancelar}>
              Cancelar
            </Button>
            <Button color="primary" onClick={handleCadastrar}>
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal open={openEditar} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h4" textAlign="center" fontWeight="bold">
            Editar Nivel
          </Typography>
          <FormularioNiveisComponent nivel={nivel} onUpdate={setNivel} />
          <Box mt={2} sx={{ display: "flex" }}>
            <Button color="error" onClick={handleDeletar}>
              Deletar
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="warning" onClick={handleCancelar}>
              Cancelar
            </Button>
            <Button color="primary" onClick={handleAtualizar}>
              Atualizar
            </Button>
          </Box>
        </Box>
      </Modal>
    </MenuContainer>
  );
}

NiveisPage.propTypes = {
  niveis: PropTypes.arrayOf(PropTypes.shape(Nivel)),
  fetchNivel: PropTypes.func,
  create: PropTypes.func,
  remove: PropTypes.func,
  update: PropTypes.func
};

export default NiveisPage;
