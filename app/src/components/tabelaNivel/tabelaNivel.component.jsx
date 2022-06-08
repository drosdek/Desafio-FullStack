import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";

function TabelaNivel({ data, onEditar }) {
  const columns = [
    {
      field: "editar",
      headerName: "",
      renderCell: (params) => (
        <IconButton onClick={() => onEditar(params)}>
          <EditIcon />
        </IconButton>
      )
    },
    { field: "_id", headerName: "ID" },
    {
      field: "nivel",
      headerName: "Nivel",
      width: 150
    }
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}

TabelaNivel.defaultProps = {
  data: []
};

TabelaNivel.propTypes = {
  onEditar: PropTypes.func,
  data: PropTypes.array
};

export default TabelaNivel;
