import { renderItems } from './view.js';
import { filterData, sortData } from './dataFunctions.js';
import data from './data/dataset.js';

// Selectores del DOM

const selectFilter = document.getElementById('selectFilter');
const selectSort = document.getElementById('selectSort');

renderItems(data);

let filteredData = [...data]; // Copia de los datos originales
let sortedData = [...data];   // Copia de los datos originales

selectFilter.addEventListener('change', function (e) {
  const optionValue = e.target.value;
  filteredData = filterData([...data], 'category', optionValue); // Actualiza el estado filtrado
  sortedData = sortData([...filteredData], 'creationYear', selectSort.value); // Ordena los datos filtrados
  renderItems(sortedData);
});

selectSort.addEventListener('change', function (e) {
  const optionValue = e.target.value;
  sortedData = sortData([...filteredData], 'creationYear', optionValue); // Actualiza el estado ordenado
  renderItems(sortedData);
});

document.addEventListener('DOMContentLoaded', function () {
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  clearButton.addEventListener('click', function () {
    //console.log('Botón de limpiar clickeado');
    filteredData = [...data]; // Reinicio los datos filtrados y ordenados a los originales
    sortedData = [...data]; // Renderizo los datos originales
    renderItems(data); // Restablezco el valor seleccionado en los selectores
    selectFilter.value = 'Todos';
    selectSort.value = 'Reset';
  });
});

