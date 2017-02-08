const jsonArray = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// функция fetch() принимает путь к данным и возвращает Promise, который ведет к 
// ответу(Response) если загрузка прошла успешно.
// с помощью .then навешиваем обработчики на Promise
// сначала используем метод .json на обьекте Response для того чтобы ответ был в формате json
// далее пушим json в пустой массив
fetch( jsonArray )
  .then(blob => blob.json())
  .then(data => cities.push(...data));

// находим все вхождения из input'a
// на входе слово из поля ввода и json-массив
// filter возвращает новый массив с результатами колбека
// в обьект RegExp передается слово и параметры поиска 
//  
function findMatches( word, cities ) {
  return cities.filter(place => {
    const regex = new RegExp(word, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}  

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray  = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="name">${this.value}</span>`);
    const stateName = place.city.replace(regex, `<span class="name">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);