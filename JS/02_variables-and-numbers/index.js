function squareXY(x1, y1, x2, y2) {
  let x = Math.abs(x2 - x1);
  let y = Math.abs(y2- y1);

  console.log(x * y);
}

squareXY(2, 3, 10, 5);
squareXY(10, 5, 2, 3);
squareXY(-5, 8, 10, 5);
squareXY(5, 8, 5, 5);
squareXY(8, 1, 5, 1);

// // ================================================

function result(a, b, n) {

  let index = Math.pow(10, n);

  let resultA = Math.floor((a - (Math.floor(a))) * index) ;
  let resultB = Math.floor((b - (Math.floor(b))) * index) ;

  console.log(resultA);
  console.log(resultB);
  console.log(resultA > resultB);
  console.log(resultA < resultB);
  console.log(resultA <= resultB);
  console.log(resultA >= resultB);
  console.log(resultA === resultB);
  console.log(resultA != resultB);
}

result(13.123456789, 2.123, 5);
result(13.890123, 2.891564, 2);
result(13.890123, 2.891564, 3);


// // ================================================

function randomNumbs(n, m) {
  let minNumb = Math.min(n, m);
  let range = Math.abs(m - n);

  let numberInRangeFirst = minNumb + (Math.round(Math.random() * range));
  let numberInRangeSecond = minNumb + (Math.round(Math.random() * range));

  console.log(`Первое число - '${numberInRangeFirst}', второе число - '${numberInRangeSecond}'.`);
  console.log(`'${numberInRangeFirst}' больше чем '${numberInRangeSecond}' - ${numberInRangeFirst > numberInRangeSecond}`);
  console.log(`'${numberInRangeFirst}' меньше чем '${numberInRangeSecond}' - ${numberInRangeFirst < numberInRangeSecond}`);
  console.log(`'${numberInRangeFirst}' больше либо равно '${numberInRangeSecond}' - ${numberInRangeFirst >= numberInRangeSecond}`);
  console.log(`'${numberInRangeFirst}' меньше либо равно '${numberInRangeSecond}' - ${numberInRangeFirst <= numberInRangeSecond}`);
  console.log(`'${numberInRangeFirst}' равно '${numberInRangeSecond}' - ${numberInRangeFirst === numberInRangeSecond}`);
  console.log(`'${numberInRangeFirst}' не равно '${numberInRangeSecond}' - ${numberInRangeFirst != numberInRangeSecond}`);
}

randomNumbs(0, 100);
randomNumbs(2, 5);
randomNumbs(100, -5);
randomNumbs(-3, -10);