export const renderItems = (data) =>  {
  const divRoot = document.getElementById('root'); // 1° selector 
  // Creo un elemento <ul>
  const ulElement = document.createElement('ul');
  if (divRoot.hasChildNodes()) {
    divRoot.innerHTML = ''; // Elimina todos los hijos del nodo 'root'
  }

  // Recorro cada elemento del arreglo 'data'
  data.forEach(item => {
    // Para cada elemento, creo un elemento <li>
    const liElement = document.createElement('li');
    liElement.setAttribute('itemscope',''); //se crea el atributo "itemscope" pero no le estamos asignando valor
    liElement.setAttribute('itemtype',item.name);

    const name = document.createElement('h2'); // Creo los elementos de HTML para el contenido de cada item
    name.textContent = item.name;
    name.setAttribute('itemprop',item.name);

    const creationYear = document.createElement("strong");
    creationYear.textContent = item.facts.creationYear;
    creationYear.setAttribute('itemprop',item.facts.creationYear);

    const shortDescription = document.createElement('p');
    shortDescription.textContent = item.shortDescription;
    shortDescription.setAttribute('itemprop',item.shortDescription);

    const imageElement = document.createElement('img');
    imageElement.src = item.imageUrl;
    imageElement.alt = item.title;

    liElement.classList.add('card');

    liElement.appendChild(imageElement);
    liElement.appendChild(name);
    liElement.appendChild(creationYear); // Agrego los elementos de contenido al <li>
    liElement.appendChild(shortDescription);

    ulElement.appendChild(liElement); // Agrego el <li> al <ul>
    divRoot.appendChild(ulElement);
  });

  // Devolver <ul> que retorne el UL, no el root 
  return ulElement;
};

