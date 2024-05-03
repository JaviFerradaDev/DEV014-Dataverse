import { filterData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

describe('filtrarData', () => {

  it('retorna el objeto Python al filtrar por lenguaje de programación científica y técnica', () => {
    const resultado = [{
      "id": "Python",
      "name": "Python",
      "shortDescription": "Python es como un asistente versátil en la programación, siempre dispuesto a ayudarte en cualquier tarea.",
      "description": "Python es como un asistente versátil en la programación, siempre dispuesto a ayudarte en cualquier tarea. Su amigable sintaxis y su facilidad de aprendizaje lo convierten en el lenguaje perfecto para iniciarse en la programación y para profesionales experimentados por igual. Desde la creación de simples scripts hasta proyectos complejos de inteligencia artificial, Python brinda herramientas poderosas para una amplia gama de aplicaciones. Además, su comunidad activa y su extensa biblioteca de módulos proporcionan un respaldo sólido, permitiendo a los desarrolladores encontrar soluciones rápidas y eficientes para cualquier desafío que puedan enfrentar en sus proyectos.",
      "imageUrl": "https://github.com/JaviFerradaDev/DEV014-Dataverse/blob/main/Images/1_Python.jpg?raw=true",
      "imagePath": "https://github.com/JaviFerradaDev/DEV014-Dataverse/blob/main/Images/1_Python.jpg?raw=true",
      "facts": {
        "creationYear": 1991,
        "creator": "Guido van Rossum",
        "companiesUsingIt": ["Google", "Facebook"]
      },
      "extraInfo": {
        "imageSource": "https://github.com/JaviFerradaDev/DEV014-Dataverse/blob/main/Images/1_Python.jpg?raw=true",
        "category": ["Lenguaje de programación web", "Lenguaje de programación científica y técnica"]
      }
    }]
    expect(filterData(fakeData, 'category', "Lenguaje de programación científica y técnica")).toEqual(resultado);
  });
});

/*describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/