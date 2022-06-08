import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormularioDesenvolvedorComponent from "../components/formularioDesenvolvedor/formularioDesenvolvedor.component";
import Desenvolvedor from "../models/desenvolvedor.model";
import PropTypes from "prop-types";
import TabelaDesenvolvedor from "../components/tabelaDesenvolvedor/tabelaDesenvolvedor.component";
import MenuContainer from "../container/menu.container";

function DesenvolvedoresPage({
  desenvolvedores,
  fetchDev,
  fetchNiveis,
  niveis,
  create,
  update,
  remove
}) {
  const [openNovo, setOpenNovo] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [desenvolvedor, setDesenvolvedor] = useState(new Desenvolvedor());
  const handleOpen = () => setOpenNovo(true);
  const handleClose = () => setOpenNovo(false);

  useEffect(() => {
    fetchDev();
    fetchNiveis();
  }, []);

  const handleEditar = (params) => {
    setDesenvolvedor(params.row);
    setOpenEditar(true);
  };

  const handleCancelar = (e) => {
    e.preventDefault();
    setDesenvolvedor(new Desenvolvedor());
    setOpenNovo(false);
    setOpenEditar(false);
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    create(desenvolvedor);
    setDesenvolvedor(new Desenvolvedor());
    setOpenNovo(false);
  };

  const handleDeletar = (e) => {
    e.preventDefault();
    remove(desenvolvedor);
    setDesenvolvedor(new Desenvolvedor());
    setOpenEditar(false);
  };

  const handleAtualizar = (e) => {
    e.preventDefault();
    update(desenvolvedor);
    setDesenvolvedor(new Desenvolvedor());
    setOpenEditar(false);
  };

  const handleRefresh = (e) => {
    e.preventDefault();
    fetchDev();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };

  return (
    <MenuContainer title="Desenvolvedores">
      <h1>Desenvolvedores</h1>
      <Button onClick={handleOpen}>Cadastrar Usuario</Button>
      <Button onClick={handleRefresh}>Atualizar</Button>
      <TabelaDesenvolvedor data={desenvolvedores} onEditar={handleEditar} />
      <Modal open={openNovo} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h4" textAlign="center" fontWeight="bold">
            Novo Desenvolvedor
          </Typography>
          <FormularioDesenvolvedorComponent
            desenvolvedor={desenvolvedor}
            onUpdate={setDesenvolvedor}
            niveis={niveis}
          />
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
            Editar Desenvolvedor
          </Typography>
          <FormularioDesenvolvedorComponent
            desenvolvedor={desenvolvedor}
            onUpdate={setDesenvolvedor}
            niveis={niveis}
          />
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

DesenvolvedoresPage.defaultProps = {
  desenvolvedores: [],
  niveis: [],
  create: () => {},
  remove: () => {},
  update: () => {},
  fetchDev: () => {},
  fetchNiveis: () => {}
};

DesenvolvedoresPage.propTypes = {
  desenvolvedores: PropTypes.array,
  niveis: PropTypes.array,
  create: PropTypes.func,
  remove: PropTypes.func,
  update: PropTypes.func,
  fetchDev: PropTypes.func,
  fetchNiveis: PropTypes.func
};

export default DesenvolvedoresPage;
