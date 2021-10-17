import React, { useEffect, useState } from "react";
import Fields from "./components/fields";

function Form({ setData }) {
  const [row, setRow] = useState({
    nombre: "",
    mes: "",
    obraSocial: "",
    prestacion: [],
  });
  useEffect(() => {
    setData(row);
  }, [row, setData]);
  return (
    <div>
      <Fields row={row} setRow={setRow} />
    </div>
  );
}

export default Form;
