import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";
import Desenvolvedor from "../../models/desenvolvedor.model";
import ptBrLocale from "dayjs/locale/pt-br";

function FormularioDesenvolvedorComponent({ desenvolvedor, onUpdate, niveis }) {
  const handleSubmit = (e) => {
    e.preventDefault;
    onUpdate();
  };

  const handleChangeNome = (e) => {
    e.preventDefault;
    const change = { ...desenvolvedor };
    change.nome = e.target.value;
    onUpdate(change);
  };

  const handleChangeSexo = (e) => {
    e.preventDefault;
    const change = { ...desenvolvedor };
    change.sexo = e.target.value;
    onUpdate(change);
  };

  const handleChangeNivel = (e) => {
    e.preventDefault;
    const change = { ...desenvolvedor };
    change.nivel = e.target.value;
    onUpdate(change);
  };

  const handleChangeHobby = (e) => {
    e.preventDefault;
    const change = { ...desenvolvedor };
    change.hobby = e.target.value;
    onUpdate(change);
  };

  const handleChangeDateNasc = (value) => {
    const change = { ...desenvolvedor };
    change.datanascimento = value ? value.toISOString() : new Date().toISOString();
    onUpdate(change);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <TextField
              label="Nome desenvolvedor"
              variant="standard"
              onChange={handleChangeNome}
              value={desenvolvedor.nome}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <InputLabel>Sexo</InputLabel>
            <Select onChange={handleChangeSexo} value={desenvolvedor.sexo}>
              <MenuItem value="M">Homem</MenuItem>
              <MenuItem value="F">Mulher</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel>Nivel</InputLabel>
            <Select onChange={handleChangeNivel} value={desenvolvedor.nivel}>
              {niveis.map((nivel) => (
                <MenuItem key={nivel._id} value={nivel._id}>
                  {nivel.nivel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ptBrLocale}>
              <DatePicker
                openTo="day"
                views={["day", "month", "year"]}
                label="Data de Nascimento"
                value={desenvolvedor.datanascimento}
                onChange={handleChangeDateNasc}
                renderInput={(params) => <TextField {...params} helperText={null} />}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Hobby"
              multiline
              rows={4}
              variant="standard"
              placeholder="Nos conte sobre seu hobby!"
              onChange={handleChangeHobby}
              value={desenvolvedor.hobby}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

FormularioDesenvolvedorComponent.propTypes = {
  desenvolvedor: PropTypes.shape(Desenvolvedor),
  niveis: PropTypes.array,
  onUpdate: PropTypes.func
};

export default FormularioDesenvolvedorComponent;
