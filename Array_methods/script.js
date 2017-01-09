const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
      { first: 'Kamill', last: 'Miftachov', year: 1829, passed: 1909 }
    ];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter',
    'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
    'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
    'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk',
    'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

// С помощью метода filter выводим новый массив с обьектами дходящими под значения функции
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
//console.log(fifteen);

// Пример работы метода map. Выводим массив с полными именами 
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
//console.log(fullName);


// Сортируем массив по годам если функция возвращает -1 то а ставится ниже б и наоборот
const order = inventors.sort((a, b) => a.year > b.year? 1 : -1);
//console.log(order);

// Выводим общее количесво лет
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
//console.log(totalYears);

const ordest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
})
//console.log(ordest);


//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//const category = document.querySelector('.mw-category');
//const links = Array.from(category.querySelectorAll("a"));
//const de = links
//            .map(link => link.textContent)
 //           .filter(streetName => streetName.includes('de'));


//Sort people by Name
//const alpha = people.sort(function(lastOne, nextOne) {
  //  const [aLast, aFirst] = lastOne.split(', ');
   // const [bLast, bFirst] = lastOne.split(', ');
    //return aLast > bLast ? 1: -1
//});
//console.log(alpha);
//Подсчитываем число обьектов в массиве
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item) {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj    
}, {})
//console.log(transportation);