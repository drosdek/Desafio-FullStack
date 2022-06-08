import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormularioDesenvolvedorComponent from "../components/formularioDesenvolvedor/formularioDesenvolvedor.component";
import Desenvolvedor from "../models/desenvolvedor.model";
import PropTypes from "prop-types";

function DesenvolvedoresPage({ desenvolvedores, fetchDev, fetchNiveis, niveis, create }) {
  const [open, setOpen] = useState(false);
  const [desenvolvedor, setDesenvolvedor] = useState(new Desenvolvedor());
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchDev();
    fetchNiveis();
  }, []);

  const handleCancelar = (e) => {
    e.preventDefault();
    setDesenvolvedor(new Desenvolvedor());
    setOpen(false);
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    create(desenvolvedor);
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
    <>
      <h1>Desenvolvedores</h1>
      <Button onClick={handleOpen}>Cadastrar Usuario</Button>
      <Button onClick={handleRefresh}>Atualizar</Button>
      <li>
        {desenvolvedores.map((dev) => (
          <ul key={dev.id}>{dev.nome}</ul>
        ))}
      </li>
      <Modal open={open} onClose={handleClose}>
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
    </>
  );
}

DesenvolvedoresPage.defaultProps = {
  desenvolvedores: [],
  niveis: [],
  create: () => {},
  fetchDev: () => {},
  fetchNiveis: () => {}
};

DesenvolvedoresPage.propTypes = {
  desenvolvedores: PropTypes.array,
  niveis: PropTypes.array,
  create: PropTypes.func,
  fetchDev: PropTypes.func,
  fetchNiveis: PropTypes.func
};

export default DesenvolvedoresPage;
