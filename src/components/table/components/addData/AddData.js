import React from "react";

function AddData({ onClose, setData }) {
  const handleSubmit = () => {
    setData();
    onClose();
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button style={{ cursor: "pointer" }} onClick={handleSubmit}>
        AGREGAR
      </button>
    </div>
  );
}

export default AddData;
