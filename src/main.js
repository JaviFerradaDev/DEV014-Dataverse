import { renderItems } from './view.js';
import { filterData, sortData } from './dataFunctions.js';
import data from './data/dataset.js';

// Selectores del DOM

const selectFilter = document.getElementById('selectFilter');
const selectSort = document.getElementById('selectSort');

// Filtrar los datos por categoría
const webLanguages = filterData(data, 'category', 'Lenguaje de programación web');
const mobileLanguages = filterData(data, 'category', 'Lenguaje de programación de aplicaciones móviles');
const systemLanguages = filterData(data, 'category', 'Lenguaje de programación de sistemas');
const scienceTechLanguages = filterData(data, 'category', 'Lenguaje de programación científica y técnica');
const otherLanguages = filterData(data, 'category', 'Lenguaje de programación de videojuegos, educación o procesamiento de datos');

// Llamar a la función renderItems con los datos filtrados

//Eventos del DOM
/*selectFilter.addEventListener('change', (e) => {
  const optionValue = e.target.value;
  if (optionValue === 'value1') {
    renderItems(data);
  }
  if (optionValue === 'value2') {
    renderItems(webLanguages);
  }
  if (optionValue === 'value3') {
    renderItems(mobileLanguages);
  }
  if (optionValue === 'value4') {
    renderItems(systemLanguages);
  }
  if (optionValue === 'value5') {
    renderItems(scienceTechLanguages);
  }  
  if (optionValue === 'value6') {
    renderItems(otherLanguages);
  }
});

selectSort.addEventListener('change', (e) => {
  renderItems(sortData(data, 'creationYear', e.target.value));
});
*/
const filterOrder = (e) => {
  const optionValue = selectFilter.value;
  console.log (optionValue);

  // podriamos tener una variable la cual primero ordene la data esta variable ejecuta el ordenado 
  //  const algo= sortData(data, 'creationYear', selectSort.value)
  // prodrias tener otra seguda variable que es copia de la primera y esta variable ejecuta el filtrado
  //    const algdos = filterData(algo, 'category', selectfilter.value);
  // renderitems(algdos)

  if (optionValue === 'value1') {
    renderItems(data);
  }
  if (optionValue === 'value2') {
    renderItems(webLanguages);
  }
  if (optionValue === 'value3') {
    renderItems(mobileLanguages);
  }
  if (optionValue === 'value4') {
    renderItems(systemLanguages);
  }
  if (optionValue === 'value5') {
    renderItems(scienceTechLanguages);
  }  
  if (optionValue === 'value6') {
    renderItems(otherLanguages);
  }
  console.log (selectSort.value)
  renderItems(sortData(data, 'creationYear', selectSort.value));
}

selectFilter.addEventListener('change', (e) => {
  filterOrder (e)
})

selectSort.addEventListener('change', (e) => {
  filterOrder (e)
})
  