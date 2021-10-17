import React, { useEffect } from "react";
import styles from "./viewData.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

function ViewData({ data, state, handleDeleteData }) {
  useEffect(() => {}, [state]);
  return (
    <div className={styles.size}>
      <h1 className={styles.title}>Pacientes</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Obra Social</TableCell>
              <TableCell align="right">Mes</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Codigo</TableCell>
              <TableCell></TableCell>
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.obraSocial.toUpperCase()}
                </TableCell>
                <TableCell align="right">{row.mes.toUpperCase()}</TableCell>
                <TableCell align="right">{row.nombre.toUpperCase()}</TableCell>
                <TableCell align="right">
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {row.prestacion
                      ? row.prestacion.map((code) => {
                          return <spam>{Number(code)};</spam>;
                        })
                      : null}
                  </div>
                </TableCell>
                <TableCell>
                  <input
                    style={{
                      width: "60px",
                      borderColor: "unset",
                      border: "aliceblue",
                    }}
                  ></input>
                </TableCell>
                <TableCell>
                  <div style={{ cursor: "pointer" }}>
                    <DeleteIcon onClick={() => handleDeleteData(row)}>
                      x
                    </DeleteIcon>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ViewData;
