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