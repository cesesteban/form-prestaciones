export const transformDataSecurities = (data) => {
  const securitiesAux = [];
  data.forEach((code) => {
    if (!securitiesAux.includes(code["security"]))
      securitiesAux.push(code["security"]);
  });
  return securitiesAux;
};

export const codesSelectors = (data, security) => {
  if (security !== "") {
    const codeRefAux = [];
    data.forEach((code) => {
      if (code["security"] === security) {
        codeRefAux.push({
          code: code["code"]["code"],
          reference: code["code"]["reference"],
        });
      }
    });
    return codeRefAux;
  }
};
