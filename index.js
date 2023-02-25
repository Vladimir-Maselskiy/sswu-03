// Задача1
// Ви повинні реалізувати функцію, яка повертає різницю між
// найбільшим та найменшим значенням у списку , отриманому як аргумент
// функції. Масив, який отримує функція як аргумент, може містити позитивні
// та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
// Спочатку масив буде поданий у невідсортованому вигляді.
// arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
// arr([16]) => 0

const getMaxDiference = array => {
  const numberArray = [];

  //   get only type "number"
  array.forEach(el => {
    if (typeof el === 'number') numberArray.push(el);
  });
  if (numberArray.length <= 1) return 0;

  //   sort numberArray & return
  numberArray.sort((a, b) => a - b);
  return numberArray[numberArray.length - 1] - numberArray[0];
};

// task-01(lodash)

const getMaxDiferenceLodash = array => {
  const numberArray = _.sortBy(_.filter(array, el => typeof el === 'number'));
  if (numberArray.length <= 1) return 0;
  return _.takeRight(numberArray) - _.take(numberArray);
};

// Test-01
// console.log(getMaxDiference(['f', -4, 3, 2, true, false, 11]));
// console.log(getMaxDiferenceLodash(['f', -4, 3, 2, true, false, 11]));

// -----------------------------------------------------------------------------------------------------
// Задача2
// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.

const getWordsWithLongerLength = (str, num) => {
  return str.split(' ').filter(el => el.length > num);
};

// task-02(lodash)
const getWordsWithLongerLengthLodash = (str, num) => {
  return _.filter(_.split(str, ' '), el => el.length > num);
};

// Test-02
// const str =
//   'Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді масиву тільки ті слова, довжина яких перевищує число.';
// console.log(getWordsWithLongerLength(str, 7));
// console.log(getWordsWithLongerLengthLodash(str, 2));

// -----------------------------------------------------------------------------------------------------

// Задача3
// Напишіть функцію, яка повертає true, якщо перший переданий
// аргумент (рядок) закінчується другим аргументом (також рядком).
// Приклад:
// solution('abc', 'bc') => true
// solution('abc', 'd') => false

const isSolution = (word, str) => {
  return word.slice(-str?.length) === str;
};

// task-03(lodash)

const isSolutionLodash = (word, str) => {
  return _.endsWith(word, str);
};

// Test-03
// console.log(isSolution('abc', 'bc'));
// console.log(isSolutionLodash('abc', 'bc'));

// -----------------------------------------------------------------------------------------------------

// Задача4
// Напишіть функцію, яка отримує масив цілих чисел і повертає масив
// середніх значень кожного цілого числа та його послідовника, якщо він є.
// Приклад:
// averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]

const getAverages = array => {
  const res = [];
  array.forEach((el, index, array) => {
    if (index > 0) res.push((el + array[index - 1]) / 2);
  });
  return res;
};

// task-04(lodash)

const getAveragesLodash = array => {
  return _.reduce(
    array,
    (acc, el, index, arr) => {
      if (index >= 1) acc.push((el + arr[index - 1]) / 2);
      return acc;
    },
    []
  );
};

// Test-04
// console.log(getAverages([2, -2, 2, -2, 2]));
// console.log(getAverages([1, 3, 5, 1, -10]));
// console.log(getAveragesLodash([2, -2, 2, -2, 2]));
// console.log(getAveragesLodash([1, 3, 5, 1, -10]));

// -----------------------------------------------------------------------------------------------------

// Задача5
// Створіть функцію, яка приймає рядок і повертає кількість (кількість)
// голосних, які у ній.
// Приклад:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
// Приклад:
// removeABC("This might be a bit hard") ➞ "This might e it hrd"
// removeABC("hello world!") ➞ null

const countVowels = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(el => vowels.includes(el)).length;
};

const removeABC = str => {
  const chars = ['a', 'b', 'c'];
  const newStr = str
    .split('')
    .filter(el => !chars.includes(el))
    .join('');
  return newStr.length === str.length ? null : newStr;
};

// task-05(lodash)

const countVowelsLodash = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return _.filter(_.split(str, ''), char => vowels.includes(char)).length;
};

const removeABCLodash = str => {
  const newStr = _.replace(str, /[abc]/g, '');
  return newStr.length === str.length ? null : newStr;
};

// Test-05
// console.log(countVowels('Celebration'));
// console.log(removeABC('Celebration'));
// console.log(countVowelsLodash('Celebration'));
// console.log(removeABCLodash('Celebration'));

// -----------------------------------------------------------------------------------------------------

// Задача6
// Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
// Приклад:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

const difference = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

// task-06(lodash)

const differenceLodash = (arr1, arr2) => {
  return _.uniq([...arr1, ...arr2]);
};

// Test-06
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(differenceLodash([1, 2, 3], [100, 2, 1, 10]));

// -----------------------------------------------------------------------------------------------------

// Задача7

// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.
// Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

const getInvertCopy = obj => {
  const invertCopy = {};
  for (let key in obj) {
    invertCopy[obj[key]] = key;
  }
  return invertCopy;
};

// task-07(lodash)

const getInvertCopyLodash = obj => {
  return _.invert(obj);
};

// Test-07
// console.log(
//   getInvertCopy({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' })
// );
// console.log(
//   getInvertCopyLodash({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' })
// );

// -----------------------------------------------------------------------------------------------------
// Задача8
// Івана Іванова обікрали. Але його речі було застраховано на певну суму.
// Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.
// Приклад:
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
// Обмеження: Об'єкт завжди повинен містити елементи, сума предметів
// завжди повинна бути більшою за страховку.

const calculateDifference = (obj, limit) => {
  const res = Object.values(obj).reduce((acc, el) => acc + el) - limit;
  return res > 0 ? res : null;
};

// task-08(lodash)

const calculateDifferenceLodash = (obj, limit) => {
  const res = _.sum(_.values(obj)) - limit;
  return res > 0 ? res : null;
};

// Test-08
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
// console.log(
//   calculateDifferenceLodash({ skate: 200, painting: 200, shoes: 1 }, 400)
// );

// -----------------------------------------------------------------------------------------------------

// Задача9
// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
// (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
// шириною (w) та висотою (h). Виміри вводить користувач через форму.
// Приклад:
// doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 2, 1, 1) ➞ false
// Обмеження:
// Цеглу можна повернути будь-якою стороною до отвору.
// Ми припускаємо, що цегла підходить, якщо її розміри дорівнюють
// розмірам отвору (тобто розмір цегли повинен бути меншим або дорівнює
// розміру отвору, не строго менше).
// Цегла не можна класти під неортогональним кутом.

const doesBrickFit = (a, b, c, width, height) => {
  const sortedBrickSide = [a, b, c].sort((a, b) => a - b);
  console.log(sortedBrickSide);
  if (
    sortedBrickSide[1] <= Math.max(width, height) &&
    sortedBrickSide[0] <= Math.min(width, height)
  )
    return true;
  return false;
};

// task-09(lodash)

const doesBrickFitLodash = (a, b, c, width, height) => {
  const sizes = [
    [a, b],
    [a, c],
    [b, c],
  ];
  return _.some(
    sizes,
    ([x, y]) => (x <= width && y <= height) || (y <= width && x <= height)
  );
};

// Test-09
// console.log(doesBrickFit(1, 2, 2, 1, 1));
// console.log(doesBrickFitLodash(4, 7, 4, 8, 3));

// -----------------------------------------------------------------------------------------------------
// Задача10
// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
// \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.

const getNameWithoutExtention = str => {
  return str.split('.').shift().split('\\').pop();
};

// task-10(lodash)

const getNameWithoutExtentionLodash = str => {
  return _.head(_.split(_.last(_.split(str, '\\')), '.'));
};

// Test-10
// console.log(
//   getNameWithoutExtention('c:\\WebServers\\home\\testsite\\www\\myfile.txt')
// );
// console.log(
//   getNameWithoutExtentionLodash(
//     'c:\\WebServers\\home\\testsite\\www\\myfile.txt'
//   )
// );

// -----------------------------------------------------------------------------------------------------

// Задача11
// Дано два рядки. Чи можна перший рядок отримати з другим циклічним
// зрушенням?

const isCyclicShift = (str1, str2) => {
  return (str2 + str2).includes(str1);
};
// task-11(lodash)

const isCyclicShiftLodash = (str1, str2) => {
  return _.includes(str2 + str2, str1);
};

// Test-11
// console.log(isCyclicShift('JavaScript', 'iptJuvaScr'));
// console.log(isCyclicShift('JavaScript', 'iptJavaScr'));
// console.log(isCyclicShiftLodash('JavaScript', 'iptJuvaScr'));
// console.log(isCyclicShiftLodash('JavaScript', 'iptJavaScr'));

// -----------------------------------------------------------------------------------------------------
// Задача12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.

const splitArray = arr => {
  const arrA = [];
  const arrB = [];
  const getMinDif = arr => {
    // сотруємо вхідний масив за зростанням
    const sortedArr = arr.sort((a, b) => a - b);
    let [el1, el2] = sortedArr;
    let min = Math.abs(el2 - el1);

    // знаходимо елементи з мінімальною різницею значень
    sortedArr.forEach((el, index, arr) => {
      if (index <= 1) return;
      if (Math.abs(el - arr[index - 1]) < min) {
        el1 = arr[index - 1];
        el2 = el;
      }
    });
    // пушим знайдені елементи в нові масиви та видаляем їх з основного масиву
    const index1 = arr.indexOf(el1);
    arrA.push(...arr.splice(index1, 1));
    const index2 = arr.indexOf(el2);
    arrB.push(...arr.splice(index2, 1));
    // перевіряємо чи залишились елементи в основному масиві і якщо так то запускаємо рекусію
    if (arr.length > 1) getMinDif(arr);
  };
  getMinDif(arr);
  return { arrA: arrA, arrB: arrB };
};

// task-12(lodash)

const splitArrayLodash = arr => {
  let arrA = [];
  let arrB = [];
  const sortedArr = _.sortBy(arr);
  const getMinDif = arr => {
    // сотруємо вхідний масив за зростанням

    let [el1, el2] = arr;
    let min = Math.abs(el2 - el1);

    // знаходимо елементи з мінімальною різницею значень
    _.forEach(arr, (el, index) => {
      if (index <= 1) return;
      if (Math.abs(el - arr[index - 1]) < min) {
        el1 = arr[index - 1];
        el2 = el;
      }
    });
    // пушим знайдені елементи в нові масиви та видаляем їх з основного масиву
    arrA = _.concat(arrA, _.pullAt(arr, _.indexOf(arr, el1)));
    arrB = _.concat(arrB, _.pullAt(arr, _.indexOf(arr, el2)));

    // перевіряємо чи залишились елементи в основному масиві і якщо так то запускаємо рекусію
    if (arr.length > 1) getMinDif(arr);
  };
  getMinDif(sortedArr);
  return { arrA: arrA, arrB: arrB };
};

// Test-12
// console.log(splitArray([1, 1, 3, 6, 8, 9, 12, 16, 18, 1]));
// console.log(splitArrayLodash([8, 9, 12, 1, 1, 3, 6, 16, 18, 1]));

// -----------------------------------------------------------------------------------------------------
// Задача13
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
// Якщо кількість символів в отриманому рядку буде більшої ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога.

const textValidation = str => {
  const startAlert = () => {
    setInterval(() => alert('Do you need help?'), 5000);
  };

  const linkRegex =
    /(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?|(\b\w+\.com\b)/gi;

  const postRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
  const numberRegex = /^\d+$/;
  const normalCaseString = str
    .split(' ')
    .map(word => {
      const normalStrCaseWord = word[0] + word.slice(1).toLowerCase();
      if (normalStrCaseWord.match(linkRegex)) return '[посилання заборонено]';
      if (normalStrCaseWord.match(postRegex)) return '[контакти заборонені]';
      if (normalStrCaseWord.match(numberRegex) && normalStrCaseWord.length > 3)
        return;

      return normalStrCaseWord;
    })
    .join(' ');
  if (normalCaseString.length !== str.length) startAlert();
  return normalCaseString;
};

// Test-13

// const text =
//   "Текст з виправленнями: Серед 1554 наЙважливіШИХ теМ, які обговорюють у мережі ІНТЕРНЕТ , знаходяться здоРОВ'Я, фІНАНСИ та поДОРОЖІ. Якщо у вас є 3553 питаНнЯ чи 2442 пропОЗицІЇ, будь ласка, напишіть нам на адресу support@company.com. Також не забувайте перевіряти 2888 новини на нашому сайті company.com, де ви знайдете корисну інформацію про тенденції та тренди у різних 7777 галузях.";

// const text = 'Цей текст не містить помилок';

// console.log(textValidation(text));

// -----------------------------------------------------------------------------------------------------
// Задача14
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
// що відкриваються і закриваються, тобто можна встановити взаємно
// однозначну відповідність відкриваючих і закриваючих дужок, причому
// відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
// дотримується вивести цей текст на html – сторінку і заборонити користувачу
// копіювати цей текст та перегляд коду сторінки.

const isBracketsPair = str => {
  let res = true;
  const arr = [];
  const allBrackets = str
    .split('')
    .filter(char => char === '(' || char === ')');
  for (let bracket of allBrackets) {
    if (bracket === '(') arr.push('(');
    if (bracket === ')' && !arr.pop()) {
      res = false;
      break;
    }
  }

  if (res && arr.length === 0) {
    const body = document.body;
    const text = document.createElement('p');
    text.textContent = str;
    text.style.userSelect = 'none';
    body.append(text);
    body.style.height = '100vh';
    body.setAttribute('oncontextmenu', 'return false');
  }

  return res && arr.length === 0;
};

// Test-14
// const str =
//   'Запашний ) (аромат (квітів)) зігріває (наші серця) і наповнює ({наші душі) незрівнянною} красою (природи). Вітер грає з листям (дерев) і дарує ((нам) приємне прохолоду (влітку)). Сонце, яке зійшло {((вранці))}, надає (всім рослинам) життєву силу, а нічні зірки (на небі) створюють неповторний (обрій). Ця (неймовірна) гармонія (природи) надихає (нас) на нові відкриття (у житті) і дарує (безцінний) відпочинок (для душі).';

// console.log(isBracketsPair(str));
