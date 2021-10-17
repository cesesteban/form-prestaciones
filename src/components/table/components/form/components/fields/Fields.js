import React, { useEffect, useMemo, useState } from "react";
import { months } from "../../../../../../assets/costants/statics";
import {
  codesSelectors,
  transformDataSecurities,
} from "../../../../../../assets/costants/utils";
import { codes } from "../../../../../../assets/costants/mook_codes";
function Fields({ setRow }) {
  const [security, setSecurity] = useState("");
  const [state, setState] = useState(false);
  const securities = transformDataSecurities(codes);
  const [codeRef, setCodeRef] = useState([]);
  const [name, setName] = useState("");
  const [monthly, setMonthly] = useState("");
  const [codesSelected, setCodeSelected] = useState([]);

  const handleName = (value) => {
    setName(value);
    setState(!state);
  };

  const handleMonthly = (data) => {
    setMonthly(data);
    setState(!state);
  };

  const handleChange = (data) => {
    setSecurity(data);
    setState(!state);
  };

  const handleCodeSelected = (data) => {
    const arrayAux = codesSelected;
    if (!arrayAux.includes(data)) {
      arrayAux.push(data);
      setCodeSelected(arrayAux);
      setState(!state);
    }
  };

  const handleDetele = (data) => {
    const arrayAux = codesSelected;
    const array = arrayAux.filter((item) => item !== data);
    setCodeSelected(array);
    setState(!state);
  };

  useMemo(() => {
    setCodeRef(codesSelectors(codes, security));
  }, [security]);

  useEffect(() => {
    const data = {
      nombre: name,
      mes: monthly,
      obraSocial: security,
      prestacion: codesSelected,
    };
    setRow(data);
  }, [state, name, monthly, security, codesSelected, setRow]);

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Nombre</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ display: "flex", justifyContent: "center" }}
          onChange={(e) => handleName(e.target.value)}
        />
      </div>

      <h2 style={{ display: "flex", justifyContent: "center" }}>Mes</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select
          style={{ minWidth: "170px", minHeight: "21px" }}
          onChange={(e) => handleMonthly(e.target.value)}
        >
          <option value="-">-</option>;
          {months.map((month) => {
            return <option value={month}>{month}</option>;
          })}
        </select>
      </div>

      <h2 style={{ display: "flex", justifyContent: "center" }}>Obra Social</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select
          style={{ minWidth: "170px", minHeight: "21px" }}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="-">-</option>
          {securities.map((security) => {
            return (
              <option key={security} value={security}>
                {security}
              </option>
            );
          })}
        </select>
      </div>

      <h2 style={{ display: "flex", justifyContent: "center" }}>Prestación</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select
          style={{ minWidth: "170px", minHeight: "21px" }}
          onChange={(e) => {
            handleCodeSelected(e.target.value);
          }}
        >
          <option value="-">-</option>;
          {codeRef
            ? codeRef.map((code) => {
                return (
                  <option key={code.code} value={code.code}>
                    {code.reference}
                  </option>
                );
              })
            : null}
        </select>
      </div>

      <div style={{ height: "60px", padding: "15px" }}>
        {!codesSelected[0] ? (
          <span style={{ display: "flex", justifyContent: "center" }}>
            selecciona un codigo
          </span>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {codesSelected.map((item) => {
              return (
                <div
                  style={{
                    padding: "5px",
                    boxShadow: "0px 0px 5px 0px black",
                    borderRadius: "5px",
                    margin: "10px",
                  }}
                  key={item}
                >
                  <span>{item}</span>
                  <button
                    style={{ marginLeft: "2px", cursor: "pointer" }}
                    onClick={() => handleDetele(item)}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Fields;
