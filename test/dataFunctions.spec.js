import { filterData, sortData } from '../src/dataFunctions.js';
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

it('retorna el objeto JavaScript al filtrar por lenguaje de programación web', () => {
  const resultadoJavaScript = [{
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
  },
  {
    "id": "JavaScript",
    "name": "JavaScript",
    "shortDescription": "JavaScript, el lenguaje de programación de la web, permite la creación de interactividad dinámica en páginas web.",
    "description": "JavaScript, el lenguaje de programación de la web, permite la creación de interactividad dinámica en páginas web. Funciona del lado del cliente, permitiendo manipulaciones del DOM, animaciones, manejo de eventos y comunicación asíncrona con el servidor. Es esencial para la construcción de aplicaciones web modernas y responsables de gran parte de la experiencia del usuario en línea. Aprender JavaScript implica comprender sus estructuras de control, funciones, objetos y métodos, así como su integración con HTML y CSS, para desarrollar interfaces de usuario interactivas y responsivas.",
    "imageUrl": "https://raw.githubusercontent.com/JaviFerradaDev/DEV014-Dataverse/main/Images/2_JavaScript.jpg",
    "imagePath": "https://raw.githubusercontent.com/JaviFerradaDev/DEV014-Dataverse/main/Images/2_JavaScript.jpg",
    "facts": {
      "creationYear": 1995,
      "creator": "Brendan Eich",
      "companiesUsingIt": ["Microsoft", "Google"]
    },
    "extraInfo": {
      "imageSource": "https://raw.githubusercontent.com/JaviFerradaDev/DEV014-Dataverse/main/Images/2_JavaScript.jpg",
      "category": "Lenguaje de programación web"
    }
  }]
  expect(filterData(fakeData, 'category', "Lenguaje de programación web")).toEqual(resultadoJavaScript);
});

describe('sortdata', () => {
  it("sortData debería ser una función", () => {
    expect(typeof sortData).toBe('function')
  })
  it('retorna un array ordenado por año de creación de manera descendente', () => {
    const sortResult = [
      {
        "id": "JavaScript",
        "name": "JavaScript",
        "shortDescription": "JavaScript, el lenguaje de programación de la web, permite la creación de interactividad dinámica en páginas web.",
        "description": "JavaScript, el lenguaje de programación de la web, permite la creación de interactividad dinámica en páginas web. Funciona del lado del cliente, permitiendo manipulaciones del DOM, animaciones, manejo de eventos y comunicación asíncrona con el servidor. Es esencial para la construcción de aplicaciones web modernas y responsables de gran parte de la experiencia del usuario en línea. Aprender JavaScript implica comprender sus estructuras de control, funciones, objetos y métodos, así como su integración con HTML y CSS, para desarrollar interfaces de usuario interactivas y responsivas.",
        "imageUrl": "https://raw.githubusercontent.com/JaviFerradaDev/DEV014-Dataverse/main/Images/2_JavaScript.jpg",
        "imagePath": "https://raw.githubusercontent.com/JaviFerradaDev/DEV014-Dataverse/main/Images/2_JavaScript.jpg",
        "facts": {
          "creationYear": 1995,
          "creator": "Brendan Eich",
          "companiesUsingIt": ["Microsoft", "Google"]
        },
        "extraInfo": {
          "imageSource": "https://raw.githubusercontent.com/JaviFerradaDev/DEV014-Dataverse/main/Images/2_JavaScript.jpg",
          "category": "Lenguaje de programación web"
        }
      },
      {
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
      },
    ]
    expect(sortData(fakeData, "creationYear", "desc")).toEqual(sortResult);
  });

  it('retorna un array ordenado por año de creación de manera ascendente', () => {
    const sortResult = [
      {
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
      },
      {
        "id": "JavaScript",
        "name": "JavaScript",
        "shortDescription": "JavaScript, el lenguaje de programación de la web, permite la creación de interactividad dinámica en páginas web.",
        "description": "JavaScript, el lenguaje de programación de la web, permite la creación de interactividad dinámica en páginas web. Funciona del lado del cliente, permitiendo manipulaciones del DOM, animaciones, manejo de eventos y comunicación asíncrona con el servidor. Es esencial para la construcción de aplicaciones web modernas y responsables de gran parte de la experiencia del usuario en línea. Aprender JavaScript implica comprender sus estructuras de control, funciones, objetos y métodos, así como su integración con HTML y CSS, para desarrollar interfaces de usuario interactivas y responsivas.",
        "imageUrl": "https://raw.githubusercontent.com/JaviFerradaDev/DEV014-Dataverse/main/Images/2_JavaScript.jpg",
        "imagePath": "https://raw.githubusercontent.com/JaviFerradaDev/DEV014-Dataverse/main/Images/2_JavaScript.jpg",
        "facts": {
          "creationYear": 1995,
          "creator": "Brendan Eich",
          "companiesUsingIt": ["Microsoft", "Google"]
        },
        "extraInfo": {
          "imageSource": "https://raw.githubusercontent.com/JaviFerradaDev/DEV014-Dataverse/main/Images/2_JavaScript.jpg",
          "category": "Lenguaje de programación web"
        }
      },
    ]
    expect(sortData(fakeData, "creationYear", "asc")).toEqual(sortResult);
  });
})