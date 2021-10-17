import React, { useEffect, useState } from "react";
import ViewData from "./components/viewData";
import Form from "./components/form";
import AddData from "./components/addData";
import styles from "./table.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Table(props) {
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);
  const [row, setRow] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddRow = () => {
    const totalData = data;
    let bolean = true;
    totalData.forEach((item) => {
      if (item.nombre.includes(row.nombre)) {
        alert("ya existen datos cargados para ese nombre");
        bolean = false;
      }
    });
    if (bolean) {
      totalData.push(row);
      setData(totalData);
      setState(!state);
    }
  };

  const handleDeleteData = (rowData) => {
    const dataFilter = data.filter((item) => item.nombre !== rowData.nombre);
    setData(dataFilter);
    setState(!state);
  };
  useEffect(() => {}, [state]);
  return (
    <div className={styles.display}>
      <div className={styles.displayButton}>
        <Button onClick={handleOpen}>Agregar paciente</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Form setData={setRow} />
            <AddData onClose={handleClose} setData={handleAddRow} />
          </Box>
        </Modal>
      </div>
      <ViewData data={data} state={state} handleDeleteData={handleDeleteData} />
    </div>
  );
}

export default Table;
