// function squareXY(x1, y1, x2, y2) {
//   let x = Math.abs(x2 - x1);
//   let y = Math.abs(y2- y1);

//   console.log(x * y);
// }

// squareXY(2, 3, 10, 5);
// squareXY(10, 5, 2, 3);
// squareXY(-5, 8, 10, 5);
// squareXY(5, 8, 5, 5);
// squareXY(8, 1, 5, 1);

// // // ================================================

// function result(a, b, n) {

//   let index = Math.pow(10, n);

//   let resultA = Math.floor((a - (Math.floor(a))) * index) ;
//   let resultB = Math.floor((b - (Math.floor(b))) * index) ;

//   console.log(resultA);
//   console.log(resultB);
//   console.log(resultA > resultB);
//   console.log(resultA < resultB);
//   console.log(resultA <= resultB);
//   console.log(resultA >= resultB);
//   console.log(resultA === resultB);
//   console.log(resultA != resultB);
// }

// result(13.123456789, 2.123, 5);
// result(13.890123, 2.891564, 2);
// result(13.890123, 2.891564, 3);


// // // ================================================

// function randomNumbs(n, m) {
//   let minNumb = Math.min(n, m);
//   let range = Math.abs(m - n);

//   let numberInRangeFirst = minNumb + (Math.round(Math.random() * range));
//   let numberInRangeSecond = minNumb + (Math.round(Math.random() * range));

//   console.log(`Первое число - '${numberInRangeFirst}', второе число - '${numberInRangeSecond}'.`);
//   console.log(`'${numberInRangeFirst}' больше чем '${numberInRangeSecond}' - ${numberInRangeFirst > numberInRangeSecond}`);
//   console.log(`'${numberInRangeFirst}' меньше чем '${numberInRangeSecond}' - ${numberInRangeFirst < numberInRangeSecond}`);
//   console.log(`'${numberInRangeFirst}' больше либо равно '${numberInRangeSecond}' - ${numberInRangeFirst >= numberInRangeSecond}`);
//   console.log(`'${numberInRangeFirst}' меньше либо равно '${numberInRangeSecond}' - ${numberInRangeFirst <= numberInRangeSecond}`);
//   console.log(`'${numberInRangeFirst}' равно '${numberInRangeSecond}' - ${numberInRangeFirst === numberInRangeSecond}`);
//   console.log(`'${numberInRangeFirst}' не равно '${numberInRangeSecond}' - ${numberInRangeFirst != numberInRangeSecond}`);
// }

// randomNumbs(0, 100);
// randomNumbs(2, 5);
// randomNumbs(100, -5);
// randomNumbs(-3, -10);


let password = 'asss_-';

if (password.length > 4 && (password.includes('_') || password.includes('-'))) {
  console.log('Пароль надёжный');
} else {
  console.log('Пароль не надёжный');
}

// ==========================================

let userName = 'Ivan';
let userSurname = 'ivanov';

let correctName = userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();
let correctSurname = userSurname.substring(0, 1).toUpperCase() + userSurname.substring(1).toLowerCase();

if (userName === correctName) {
  console.log(`Имя - '${correctName}', осталось без изменений`);
} else {
  console.log(`Имя '${correctName}',  было преобразовано`);
};

if (userSurname === correctSurname) {
  console.log(`Фамилия - '${correctSurname}' осталась без изменений`);
} else {
  console.log(`Фамилия - '${correctSurname}' была преобразована`);
};

if (userName === correctName && userSurname === correctSurname) {
  console.log(`Имя - '${correctName}' и фамилия - '${correctSurname}' остались без изменений`);
} else {
  console.log(`Имя '${correctName}' и фамилия - '${correctSurname}' были преобразованы`);
};

let result = userName != correctName || userSurname != correctSurname ? 'Имя и фамилия были преобразованны' : 'Имя и фамилия без изменений';

console.log(result);

// Последний вариант подсмотрел 

// =======================================

function number(n) {

  if (n % 2 === 0) {
    console.log(`${n} - чётное число`);
  } else if (n % 2 === 1) {
    console.log(`${n} - нечётное число`);
  }
}

number(4);
