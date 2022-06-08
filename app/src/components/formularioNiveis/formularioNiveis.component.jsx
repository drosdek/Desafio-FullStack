import { Box, FormControl, Grid, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Nivel from "../../models/nivel.model";

function FormularioNiveisComponent({ nivel, onUpdate }) {
  const handleSubmit = (e) => {
    e.preventDefault;
    onUpdate();
  };

  const handleChangeNivel = (e) => {
    e.preventDefault;
    const change = { ...nivel };
    change.nivel = e.target.value;
    onUpdate(change);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <TextField
              label="Nome Nivel"
              variant="standard"
              onChange={handleChangeNivel}
              value={nivel.nivel}
            ></TextField>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

FormularioNiveisComponent.propTypes = {
  nivel: PropTypes.shape(Nivel),
  onUpdate: PropTypes.func
};

export default FormularioNiveisComponent;
