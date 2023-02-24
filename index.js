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
