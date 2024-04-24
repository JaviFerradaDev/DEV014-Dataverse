export const filterData = (data, filterby, value) => {
  let resultadoFiltro = [];

  resultadoFiltro = data.filter((element) => {
    if (Array.isArray(element.extraInfo[filterby])) {
      return element.extraInfo[filterby].includes(value);
    } else {
      return element.extraInfo[filterby] === value;
    }
  });

  return resultadoFiltro;
}
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === 'asc') {
    return data.sort((a, b) => a.facts[sortBy] - b.facts[sortBy]);
  }
  else {
    return data.sort((a, b) => b.facts[sortBy] - a.facts[sortBy]);
  }
}