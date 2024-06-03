/* Дан массив:

let arr = ['a', 'b', 'c', 'd', 'e']; */

// let arr = ['a', 'b', 'c', 'd', 'e'];

// delete arr[1]

// console.log(arr.length);

/* Код должен вывести последний элемент массива:

let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length]); */

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length - 1]);

/* Код должен найти сумму элементов массива:

let arr = [1, 2, 3, 4, 5];
console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[5]); */

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

/* Код должен вывести длину массива:

let arr = {1, 2, 3, 4, 5};
console.log(arr.length]);*/

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

/* Код должен вывести длину массива:

let arr = [1, 2, 3, 4, 5];
console.log(arr.lenght); */

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

/* Объекты в JavaScript */

/* Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы. */

// var obj = {
//     1: "Понедельник",
//     2: "Вторник",
//     3: "Среда",
//     4: "Четвер",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресенье",
// }

// var day;

// function per() {
//     for (day in obj) {
//        console.log(obj[day]);
//     }
// }
// per()

/* Создайте объект с ключами от 1 до 12, в качестве значений содержащий названия месяцев. Выведите этот объект в консоль. */

// let objMonths = {
//     1: "December",
//     2: "January",
//     3: "February",
//     4: "March",
//     5: "April",
//     6: "May",
//     7: "June",
//     8: "July",
//     9: "August",
//     10: "September",
//     11: "October",
//     12: "November"
// }

// console.log(objMonths);

/* Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел. */

// let user = {
//     name: "lesha",
//     surname: "Ivanov",
//     patronymic: "Oleksiiovich"
// }

// console.log(user['name'] + ' ' + user['surname'] + ' ' + user['patronymic']);

/* Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день. */

// let date = {
//     year: 2003,
//     month: "October",
//     day: 5
// }
// console.log(`${date.year} ${date.month} ${date.day}`);

/* Исправьте ошибки, допущенные в следующем коде:

let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj.1a);
console.log(obj.b2);
console.log(obj.c-c);
console.log(obj.d 4);
console.log(obj.e5); */

// let obj = {
// 	'1a': 1,
// 	'b2': 2,
// 	'с-с': 3,
// 	'd 4': 4,
// 	'e5': 5
// };

// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['с-с']);
// console.log(obj['d 4']);
// console.log(obj.e5);

/* Дан объект:

let obj = {x: 1, y: 2, z: 3};
Возведите в квадрат каждый элемент этого объекта. */

// let obj = {x: 1, y: 2, z: 3};

// obj.x *= obj.x
// obj.y *= obj.y
// obj.z *= obj.z

// console.log(obj);

/* Создайте пустой объект, а затем заполните его значениями. */

// let obj = {}

// obj.a = 2
// obj.b = 3
// obj.z = 4
// console.log(obj);

/* Создайте объект и убедитесь, что порядок ключей в нем не имеет значения. */

// const obj = {
// 	44: 'g',
// 	1: 'a',
// 	55: 'b'
// }

// console.log(obj[55], obj[44], obj[1]);

/* Получите массив ключей следующего объекта:

let obj = {x: 1, y: 2, z: 3};
 */

// let obj = {x: 1, y: 2, z: 3};

// let keys = Object.keys(obj)

// console.log(keys);

/* Найдите количество элементов в следующем объекте:

let obj = {x: 1, y: 2, z: 3}; */

// let obj = {x: 1, y: 2, z: 3};

// let lengthObj = Object.keys(obj).length
// console.log(lengthObj);

/* Дан следующий объект:

let obj = {x: 1, y: 2, z: 3};
Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью этой переменной соответствующий элемент объекта. */

// let obj = {x: 1, y: 2, z: 3},
// key = 'z'

// console.log(obj[key]);

/* Исправьте ошибку, допущенную в следующем коде:

let obj = {x: 1, y: 2, z: 3};
console.log(obj[x]); */

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

/* Исправьте ошибку, допущенную в следующем коде:

let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj['key']); */

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);

/* Исправьте ошибку, допущенную в следующем коде:

let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj.prop); */

// let obj = {x: 1, y: 2, z: 3};

// let prop = 'x';
// console.log(obj[prop]);

/* Исправьте ошибку, допущенную в следующем коде:

let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj['prop']); */

// let obj = {x: 1, y: 2, z: 3};

// let prop = 'x';
// console.log(obj[prop]);

/* В следующем коде ключ должен был взяться из переменной. Исправьте допущенную ошибку:

let key = 'x';

let obj = {
	key: 1,
	y: 2,
	z: 3
}; */

// let key = 'x';

// let obj = {
// 	[key]: 1,
// 	y: 2,
// 	z: 3
// };

// console.log(obj);

/* Дан объект:

let obj = {
	x: 1,
	y: 2,
	z: 3
};
Даны переменные:

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
Сделайте так, чтобы ключи объекта брались из этих переменных. */

// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';

// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3
// };

// console.log(obj);

// let obj = {x: 1, y: 2, z: 3};
// delete obj.x;

// console.log('x' in obj);

/* Перепишите следующий код через описанный подход:

let arr = [1, 2, 3, 4, 5];
let res = arr[1] + arr[2];

console.log(res); */

// const arr = [1, 2, 3, 4, 5]
// const res = arr[1] + arr[2]

// console.log(res)

/* Код должен вывести элемент объекта:

let obj = {x: 1, y: 2, z: 3};
console.log(obj[x]); */

// let obj = { x: 1, y: 2, z: 3 }
// console.log(obj['x'])

/* Код должен вывести элемент объекта по ключу из переменной:

let obj = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj.key); */

// let obj = { x: 1, y: 2, z: 3 }
// let key = 'x'

// console.log(obj[key])

/* Код должен вывести сумму элементов объекта:

let obj = {x: 1, y: 2, z: 3};
let sum = obj[x] + obj[y] + obj[x];

console.log(obj); */

// let obj = { x: 1, y: 2, z: 3 }
// let sum = obj['x'] + obj['y'] + obj['x']

// console.log(sum)

/* Код должен вывести количество элементов объекта:

let obj = {x: 1, y: 2, z: 3};
console.log(obj.length); */

// let obj = { x: 1, y: 2, z: 3 }
// console.log(Object.keys(obj).length)

/* Проверьте, что переменная test больше 10. */

// let test = 11

// if (test > 10) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Проверьте, что переменная test меньше 10. */

// let test = 1

// if (test < 10) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Проверьте, что переменная test больше или равна 10. */

// let test = 10

// if (test >= 10) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Проверьте, что переменная test меньше или равна 10. */

// let test = 9

// if (test <= 10) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Проверьте, что переменная test равна 10. */

// let test = 10

// if (test == 10) {
// 	console.log('=')
// } else {
// 	console.log('!=')
// }

/* Проверьте, что переменная test не равна 10. */

// let test = 10

// if (test != 10) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение. */

// let test1 = 10, test2 = 24
// if(test1 > test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

/* Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение. */

// let test1 = 10,
// 	test2 = 10
// if (test1 == test2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Даны переменные test1 и test2, содержащие строки. Проверьте, равны ли их значения и выведите соответствующее сообщение. */

// let test1 = 'abbc',
// 	test2 = 'abc'

// if (test1 == test2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Даны переменные:

let test1 = '123';
let test2 = 123;
Проверьте, равны ли значения переменных и выведите соответствующее сообщение */

// let test1 = '123'
// let test2 = 123

// if (test1 == test2) {
// 	console.log('Yes')
// } else {
// 	console.log('No')
// }

/* Проверьте, что переменная num больше нуля и меньше 5. */

// let num = 6

// if (num > 0 && num < 5) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Проверьте, что переменная num больше или равна 10 и меньше или равна 20. */

// let num = 11

// if (num >= 10 && num <= 20) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3. */

// let num1 = 1
// let num2 = 5

// if (num1 <= 1 && num2 >= 3) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Дан следующий код:

if (num1 >= 0 || num2 <= 10) {
	console.log('+++');
} else {
	console.log('---');
}
Используя оператор ! инвертируйте приведенное условие. */

// let num1 = -1
// let num2 = 11

// if (!(num1 >= 0 || num2 <= 10)) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Проверьте, что переменная test равна true. */

// let test = true

// if(test === true){
// 	console.log("+++");
// } else{
// 	console.log('-')
// }

/* Проверьте, что переменная test равна false. */

// let test = true

// if (test === false) {
// 	console.log('+++')
// } else {
// 	console.log('-')
// }

/* Вспомните и напишите, какие значения при приведении к логическому типу дают false. */

// let test = undefined

// if (Boolean(test) == false) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код с использованием сокращенной формы:

let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test = true

// if (test) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код с использованием сокращенной формы:

let test = true;

if (test == false) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test = true

// if (!test) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код с использованием сокращенной формы:

let test = true;

if (test != true) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test = true

// if (!test) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код с использованием сокращенной формы:

let test = true;

if (test != false) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test = true

// if (test) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;

if (test1 === true && test2 === true) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test1 = true
// let test2 = true

// if (test1 && test2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;

if (test1 === true && test2 !== true) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test1 = true
// let test2 = true

// if (test1 && !test2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;

if (test1 !== true && test2 !== true) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test1 = true
// let test2 = true

// if (!test1 && !test2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;

if (test1 !== false && test2 === true) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test1 = true
// let test2 = true

// if (test1 && test2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 === true && test2 === true && test3 === true) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test1 = true
// let test2 = true
// let test3 = true

// if (test1 && test2  && test3) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 === true || test2 === true && test3 === true) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test1 = true
// let test2 = true
// let test3 = true

// if (test1 || (test2 && test3)) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 === true || test2 === false && test3 === false) {
	console.log('+++');
} else {
	console.log('---');
} */

// let test1 = true
// let test2 = true
// let test3 = true

// if (test1 || (!test2 && !test3)) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Проверьте, что переменная test равна 10, то пусть на экран выведется 'yes'. В противном случае пусть ничего не произойдет. */

// let test = 11
// if(test == 10){
// 	console.log('yes');
// }

/* Перепишите следующий код в сокращенной форме:

if (test > 0) {
	console.log('+++');
} else {
	console.log('---');
} */
// let test = 10

// if (test > 0) console.log('+++')
// else console.log('---')

/* Перепишите следующий код в сокращенной форме:

if (test > 0) {
	console.log('+++');
} */

// let test= 10
// if(test > 0 ) console.log('+++');

/* В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */

// let day = 25

// if (day < 20) {
// 	console.log('decada 1')
// } else if (day < 30) {
// 	console.log('decada 2')
// } else if (day < 40) {
// 	console.log('decada 3')
// } else {
// 	console.log('не правильное число')
// }

/* Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна. */

// let num = 54

// if (num < 10 || num > 99) {
// 	console.log('сума чисел меньше 10 или больше 99')
// } else {
// 	let num2 = num % 10
// 	let num1 = (num - num2) / 10
// 	let sum = num1 + num2
// 	// console.log(sum)

// 	if (sum < 10) {
// 		console.log('сумма однозначная')
// 	} else {
// 		console.log('сумма двухзначная')
// 	}
// }

/* Перепишите следующий код через switch-case:

let lang = 'ru';

if (lang == 'ru') {
	console.log('рус');
} else if (lang == 'en') {
	console.log('анг');
} else if (lang == 'de') {
	console.log('нем');
} else {
	console.log('язык не поддерживается');
} */

// let lang = 'de'

// switch (lang) {
// 	case 'ru':
// 		console.log('rus')
// 		break
// 	case 'en':
// 		console.log('ang')
// 		break
// 	case 'de':
// 		console.log('nem')
// 		break
// 	default:
// 		console.log('dont')
// 		break
// }

/* Перепишите следующий код через тернарный оператор:

let num = 1;
let res;

if (num >= 0) {
	res = '1';
} else {
	res = '2';
}

console.log(res); */

// let num = 1
// let res = num >= 0 ? '1' : '2'

// console.log(res)

/* Пусть даны следующие переменные:

let a = 2 * (3 - 1);
let b = 6 - 2;
Используя оператор ==, узнайте, равны ли значения этих переменных или нет. */

// let a = 2 * (3 - 1)
// let b = 6 - 2
// console.log(a == b) true

/* Пусть даны следующие переменные:

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
Используя оператор >, узнайте, больше ли переменная a, чем b. */

// let a = 5 * (7 - 4)
// let b = 1 + 2 + 7

// console.log(a>b); true

/* Пусть даны следующие переменные:

let a = 2 ** 4;
let b = 4 ** 2;
Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет. */

// let a = 2 ** 4
// let b = 4 ** 2
// console.log(a != b) false

/* Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен. */

// let year = confirm('Вам есть 18?')

// if(year){
// 	alert('дрочите на здоровье');
// } else {
// 	alert('достут запрещен')
// }

/* Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода. Вот проблемный код:

let age = 17;

if (age >= 18) {
	let adult = true;
} else {
	let adult = false;
}

console.log(adult); */

// let age = 17
// let adult;

// if (age >= 18) {
// 	 adult = true
// } else {
// 	 adult = false
// }

// console.log(adult)

/* Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода. Вот проблемный код:

let age = 17;
let adult;

if (age >= 18) {
	let adult = true;
} else {
	let adult = false;
}

console.log(adult); */

// let age = 17
// let adult

// if (age >= 18) {
// 	 adult = true
// } else {
// 	 adult = false
// }

// console.log(adult)

/* Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. После проверки кода оказалось, что если возраст равен или больше 18 лет, то в переменную adult записывается true, как и должно быть, однако, если возраст меньше 18, то переменная adult имеет значение undefined. Исправьте ошибку автора кода.

Вот проблемный код:

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	let adult = false;
}

console.log(adult); */

// let age = 17
// let adult

// if (age >= 18) {
// 	adult = true
// } else {
// 	 adult = false
// }

// console.log(adult)

/* Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.

Вот проблемный код:

let age = 17;
let res;

if (age >= 18) {
	if (age <= 23) {
		let res = 'от 18 до 23';
	} else {
		let res = 'больше 23';
	}
} else {
	let res = 'меньше 18';
}

console.log(res); */

// let age = 17
// let res

// if (age >= 18) {
// 	if (age <= 23) {
// 		 res = 'от 18 до 23'
// 	} else {
// 		 res = 'больше 23'
// 	}
// } else {
// 	 res = 'меньше 18'
// }

// console.log(res)

/* Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined. Исправьте ошибку автора кода.

Вот проблемный код:

let age = 19;
let res;

if (age >= 18) {
	let res;
	
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res); */

// let age = 19
// let res

// if (age >= 18) {

// 	if (age <= 23) {
// 		res = 'от 18 до 23'
// 	} else {
// 		res = 'больше 23'
// 	}
// } else {
// 	res = 'меньше 18'
// }

// console.log(res)

/* Решите аналогичную задачу, только определите в какую треть часа попадает указанное количество минут. */

// let min = 45
// let tret = 45/3

// if(tret >= 10 && tret <= 14){
// 	console.log('1 треть часа')
// }
// if(tret >= 15 && tret <= 29){
// 	console.log('2 треть часа');
// }
// if(tret >= 30 && tret <= 44){
// 	console.log('3 треть часа');
// }
// if(tret >= 45 && tret <= 59){
// 	console.log('4 треть часа');
// }

/* В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива. */

// let arr = [1, 2, 3]

// if(arr.length = 3){
// 	console.log(arr[0] + arr[1] + arr[2]);
// } else {
// 	console.log('no');
// }

/* Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'. */

// let str = 'abc'

// if (str[0] == 'a') {
// 	console.log('yes')
// }

/* Дана переменная, содержащая некоторую строку. Проверьте, что эта строка заканчивается на символ 'x'. */

// let str = 'abcx', last = str[str.length - 1]

// if(last == 'x'){
// 	console.log('x');
// }

/* Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a' или символ 'b'. */

// let str = 'babcd'

// if(str[0] == 'a' || str[0] == 'b'){
// 	console.log('yes');
// }

/* Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю. */

// let num = 100, str = String(num)

// if(str[str.length - 1] == 0){
// 	console.log('верно');
// }

/* Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае. */

// let num = 48
// let cel = num % 2
// let str = String(cel)

// if (str[str.length - 1] == 0) {
// 	console.log('ye')
// } else {
// 	console.log('no')
// }

/* Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет. */

// let num = 28
// let cel = num % 2

// if (cel == 0) {
// 	console.log('ye')
// } else {
// 	console.log('no ' + cel)
// }

/* Дано число. Проверьте, что оно делится на 3 */

// let a = 66
// let b = 3
// let res = a % b

// if (res === 0) {
// 	console.log('yes')
// } else {
// 	console.log('no ' + res)
// }

/* Код должен проверить сумму чисел:

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num1 = 1
// let num2 = 2

// if (num1 + num2 === 3) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить сумму чисел:

let num1 = '1';
let num2 = '2';

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num1 = 1
// let num2 = 2

// if (num1 + num2 === 3) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить сумму чисел:

let num1 = '1';
let num2 = '2';

if (Number(num1 + num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num1 = 1
// let num2 = 2

// if (num1 + num2 === 3) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить первую цифру числа:

let num = 123;

if (num[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num = 123
// let str = String(num)

// if (str[0] == 1) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить первую цифру числа:

let num = 123;

if (String(num[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num = 123

// if (String(num)[0] == 1) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить первую цифру числа:

let num = 123;

if (String(num)[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num = 123

// if (String(num)[0] === '1') {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить первую цифру числа:

let num = 123;
let first = String(num)[0];

if (first === 1) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num = 123
// let first = String(num)[0]

// if (first == 1) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить, что в числе ровно две цифры:

let num = 12;

if (num.length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num = 12

// if (String(num).length === 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить, что в числе ровно две цифры:

let num = 12;
let str = Number(str);

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num = 12
// let str = String(num)

// if (str.length == 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить, что в числе ровно две цифры:

let num = 12;

if (String(num.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num = 12

// if (String(num).length == 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить, что в числе ровно две цифры:

let num = 12;

if (String(num).length === String(2)) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num = 12

// if (String(num).length === 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить, что в числе ровно две цифры:

let num = 12;

if (String(num).lenght === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

// let num = 12

// if (String(num).length === 2) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:

let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = num[0] + num[1] + num[2];
let sum2 = num[3] + num[4] + num[5];

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
} */

// let num = [1, 2, 3, 0, 3, 3] // берем в кавычки, чтобы обращаться к цифрам

// let sum1 = num[0] + num[1] + num[2]
// let sum2 = num[3] + num[4] + num[5]

// if (sum1 == sum2) {
// 	console.log('суммы равны')
// } else {
// 	console.log('суммы не равны')
// 	console.log(sum2, sum1);
// }

/* В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). */

// let month = 5

// if (month <= 2 || month == 12) {
// 	console.log('Зима')
// } else if (month >= 3 && month <= 5) {
// 	console.log('Весна')
// } else if (month >= 6 && month <= 8) {
// 	console.log('Лето')
// } else if (month >= 9 && month <= 11) {
// 	console.log('Осень')
// } else {
// 	console.log('Месяцов всего 12')
// }

/* Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'. */

// let str = 'abcde'

// if (str[0] == 'a') {
// 	console.log('da')
// } else {
// 	console.log('no')
// }

/* Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'. */

// let num = 12345

// if (String(num)[0] <= 3) {
// 	console.log('da')
// } else {
// 	console.log('no')
// }

/* Дано трехзначное число. Найдите сумму цифр этого числа. */

// let num = 345
// let str = String(num)
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2])
// console.log(sum);

/* Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */

// let num = 123123
// let str = String(num)
// let sum1 = str[0] + str[1] + str[2]
// let sum2 = str[3] + str[4] + str[5]
// if (sum1 == sum2) {
// 	console.log('ye')
// 	console.log(sum1, sum2)
// } else {
// 	console.log('no')
// }

/* Выведите в консоль все элементы следующего массива:

let arr = ['a', 'b', 'c', 'd', 'e']; */

// let arr = ['a', 'b', 'c', 'd', 'e']

// for (let elem of arr) {
// 	console.log(elem)
// }

/* Выведите в консоль все ключи следующего объекта:

let obj = {x: 1, y: 2, z: 3}; */

// let obj = { x: 1, y: 2, z: 3 }

// for(let key in obj){
// 	console.log(key);
// }

/* Выведите в консоль все элементы следующего объекта:

let obj = {x: 1, y: 2, z: 3}; */

// let obj = { x: 1, y: 2, z: 3 }

// for (let key in obj) {
// 	console.log(obj[key])
// }

/* Выведите в консоль числа от 1 до 100. */

// let num = 0

// while (num <= 99) {
// 	num++
// 	console.log(num)
// }

/* Выведите в консоль числа от 11 до 33. */

// let num = 10

// while (num >= 10 && num <= 32) {
// 	num++
// 	console.log(num)
// }

/* Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого. */

// let num = 34
// let count = 0
// while (num <= 1000) {
// 	num = num * 3
// 	count++
// 	console.log(count)
// }

// console.log(num)

/* С помощью цикла for выведите в консоль числа от 1 до 100. */

// for (let i = 1; i <= 100; i++) {
// 	console.log(i)
// }

/* С помощью цикла for выведите в консоль числа от 11 до 33. */

// for (let i = 11; i <= 33; i++) {
// 	console.log(i)
// }

/* С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100. */
// for (let i = 0; i <= 100; i++) {
// 	if (i % 2) {
// 		console.log(i)
// 	}
// }

/* С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99. */
// for (let i = 1; i < 99; i++) {
// 	let num = i % 2
// 	if (num !== 0) {
// 		console.log(i)
// 	}
// }

/* С помощью цикла for выведите в консоль числа от 100 до 0. */
// for (let i = 100; i >= 0; i--) {
// 	console.log(i)
// }

/* Выведите в консоль все элементы следующего массива:

let arr = ['a', 'b', 'c', 'd', 'e']; */

// let arr = ['a', 'b', 'c', 'd', 'e']

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i])
// }

/* Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего:

let arr = ['a', 'b', 'c', 'd', 'e']; */

// let arr = ['a', 'b', 'c', 'd', 'e']

// for (let i = 1; i < arr.length - 1; i++) {
// 	console.log(arr[i])
// }

/* Выведите в консоль элементы следующего массива в обратном порядке:

let arr = ['a', 'b', 'c', 'd', 'e']; */

// let arr = ['a', 'b', 'c', 'd', 'e']

// for(let i = arr.length; i >= 0; i--){
// 	console.log(arr[i]);
// }

/* Исправьте ошибку, допущенную в следующем коде:

let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i <= arr.length; i++) {
	console.log(arr[i]);
} */

// let arr = ['a', 'b', 'c', 'd', 'e']

// for (let i = 0; i <= arr.length - 1; i++) {
// 	console.log(arr[i])
// }

/* Дан следующий массив:

let arr = [2, 5, 9, 15, 1, 4];
Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10. */

// let arr = [2, 5, 9, 15, 1, 4]

// for(let elem of arr){
// 	if(elem > 3 && elem < 10){
// 		console.log(elem);
// 	}
// }

/* Дан следующий объект:

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
Выведите в консоль те элементы объекта, значения которых - нечетные числа. */

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }

// for (elem in obj) {
// 	if (obj[elem] % 2 !== 0) {
// 		console.log(obj[elem])
// 	}
// }

/* Найдите сумму четных чисел от 2 до 100. */
// let res = 0
// for (let i = 2; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		res += i
// 		console.log(i)
// 	}
// }

/* Найдите сумму нечетных чисел от 1 до 99. */
// let res = 0

// for(let i = 1; i <= 100; i++){
// 	if(i % 2 !== 0){
// 		res += i
// 		console.log(res);
// 	}
// }

/* Найдите произведение целых чисел от 1 до 20. */
// let res = 1

// for (let i = 1; i <= 20; i++) {
// 	if (i % 2 == 0) {
// 		res *= i
// 		console.log(res)
// 	}
// }

/* Дан массив:

let arr = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива. */

// let arr = [2, 5, 9, 3, 1, 4]
// let res = 0

// for (let elem of arr) {
// 	res += elem
// }
// console.log(res)

/* Дан массив:

let arr = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов элементов, являющихся четными числами. */

// let arr = [2, 5, 9, 3, 1, 4]
// let res = 0

// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		res += elem
// 	}
// }
// console.log(res)

/* Дан массив:

let arr = [2, 5, 9, 3, 1, 4];
Найдите сумму квадратов элементов этого массива. */

// let arr = [2, 5, 9, 3, 1, 4]
// let res = 0

// for (elem of arr) {
// 	res += elem**2
// }
// console.log(res)

/* Дан массив:

let arr = [2, 5, 9, 3, 1, 4];
Найдите произведение элементов этого массива. */

// let arr = [2, 5, 9, 3, 1, 4]
// let res = 1

// for (let elem of arr) {
// 	res *= elem
// }

// console.log(res)

/* С помощью цикла сформируйте строку, заполненную 5-тью дефисами. */
// let str = ''

// for (let i = 1; i <= 5; i++) {
// 	str += '-'
// }

// console.log(str)

/* С помощью цикла сформируйте строку '123456789'. */

// let str = ''

// for (let i = 1; i <= 9; i++) {
// 	str += i
// }

// console.log(str)

/* С помощью цикла сформируйте строку '987654321'. */

// let str = ''

// for (let i = 9; i >= 1; i--) {
// 	str += i
// }

// console.log(str)

/* С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'. */
// let str = '-'

// for (let i = 1; i <= 9; i++) {
// 	str += `${i}-`
// }
// console.log(str)

/* Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа. */

// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i)

// 	console.log(str[0])
// }

/* Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа. */

// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i)

// 	if (str[0] && str[1]) {
// 		let res = Number(str[0]) + Number(str[1])
// 		console.log(res)
// 	}
// }

/* Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1. */

// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i)

// 	if (str[0] === '1') {
// 		console.log(str)
// 	}
// }

/* Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5. */

// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i)

// 	if (str[0] && str[1]) {
// 		let res = Number(str[0]) + Number(str[1])
// 		if (res === 5) {
// 			if (str[0] == res) {
// 				console.log(str)
// 			}
// 		}
// 	}
// }

/* Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу. */

// let arr = [1, 2, 4, 5, 6, 0, 5, 4, 3, 2, 1]

// for(let elem of arr){
// 	console.log(elem);
// 	if(elem == 0){
// 		break
// 	}
// }

/* Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа. */

// let arr = [1, 2, 3, 4, 5, -1, 2, 6, 5]

// for (let elem of arr) {
// 	elem += elem
// 	console.log(elem)
// 	if (elem < 0) {
// 		break
// 	}
// }

/* Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве). */

// let arr = [1, 4, 3, 5, 6]

// for (let elem of arr) {
// 	if (elem === 3) {
// 		console.log(elem - 1)
// 		break
// 	}
// }

/* Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100. */

// let res = 1

// while (res <= 100) {
// 	res += res
// 	console.log(res)
// }

/* С помощью двух вложенных циклов выведите на экран следующую строку:

111222333444555666777888999 */

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		console.log(i)
// 	}
// }

/* С помощью двух вложенных циклов выведите на экран следующую строку:

11 12 13 21 22 23 31 32 33 */

// for (let i = 11; i <= 33; i++) {
// 	for (let j = 1; j <= 1; j++) {
// 		if(i >= 11 && i <= 13){
// 			console.log(i);
// 			continue
// 		} else if(i >= 21 && i <= 23){
// 			console.log(i);
// 			continue
// 		} else if(i >= 31 && i <= 33){
// 			console.log(i);
// 		}
// 	}
// }

/* Используя цикл и метод push заполните массив числами от 1 до 10. */

// let arr = []
// for(let i = 1; i <= 10; i++){
// 	arr.push(i)
// }
// console.log(arr);

/* Используя цикл и метод push заполните массив 10-ю буквами 'x'. */

// let arr = []

// for (let i = 1; i <= 10; i++) {
// 	arr.push('x')
// }
// console.log(arr)

/* Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел. */

// let arr = [1, 2, -1, 6, 5, 4]
// let arr1 = []

// for (let elem of arr) {
// 	if (elem > 0) {
// 		arr1.push(elem)
// 	}
// }
// console.log(arr1)

/* Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат. */

// let arr = [1,2,3,4,5]

// for(let i = 0; i < arr.length; i++){
// 	arr[i] = arr[i] ** 2
// }

// console.log(arr);

/* Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу. */

// let arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
// 	arr[i]--
// }

// console.log(arr)

/* Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10. */

// let arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
// 	arr[i] += 10
// }

// console.log(arr)

/* Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера. */

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let arr2 = [1, 2, 3, 4, 5, 6, 7]
// let obj = {}

// for (let i = 0; i < arr1.length; i++) {
// 	obj[arr1[i]] = arr2[i]
// }

// console.log(obj)

/* Дан объект:

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами. */

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
// let obj1 = {}

// for (let elem in obj) {
// 	if (obj[elem] % 2 == 0) {
// 		obj1[elem] = obj[elem]
// 	}
// 	// console.log()
// }

// console.log(obj1)

/* Дан объект:

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта. */

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
// let obj1 = {}

// for(let elem in obj){
// 	obj1[obj[elem]] = elem
// }

// console.log(obj1);

/* Дан объект:

let obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат. */

// let obj = { x: 1, y: 2, z: 3 }

// for(let elem in obj){
// 	obj[elem] = obj[elem] ** 2
// }

// console.log(obj);

/* let obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу. */

// let obj = {x: 1, y: 2, z: 3};

// for(let elem in obj) {
// 	obj[elem]++
// }

// console.log(obj);

/* Дан массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'. */

// let arr = ['a', 'b', 'c', 'd', 'e']
// let flag = false

// for (let elem of arr) {
// 	if (elem === 'c') {
// 		flag = true
// 		break
// 	}
// }

// if (flag === true) {
// 	console.log('+++')
// } else {
// 	console.log('---')
// }

/* Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа. */

// let arr = 32
// flag = true

// if (arr < 2) {
// 	flag = false
// } else {
// 	for (let i = 2; i <= Math.sqrt(arr); i++) {
// 		if(arr % i == 0){
// 			flag = false
// 			break
// 		}
// 	}
// }

// if (flag) {
// 	console.log(arr)
// } else {
// 	console.log('no')
// }

/* Дан массив:

let arr = [10, 20, 30, 40, 21, 32, 51];
Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму. */

// let arr = [10, 20, 30, 40, 21, 32, 51]
// let res = 0

// for (let elem of arr) {
// 	elem = String(elem)
// 	if (elem[0] == 1 || elem[0] == 2) {
// 		res += Number(elem)
// 	}
// }

// console.log(res)

/* Исправьте ошибки, допущенные в следующем коде:

let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
	if (elem[0] === '1' && elem[0] === '2') {
		sum += +elem;
	}
}

console.log(sum); */

// let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 }
// let sum = 0

// for (let elem in obj) {
// 	let el = String(obj[elem])
// 	if (el[0] === '1' || el[0] === '2') {
// 		elem = Number(obj[elem])
// 		sum += elem
// 	}
// }

// console.log(sum)

/* Код должен вывести числа от 0 до 10:

for (let i = 0; i > 10; i++) {
	console.log(i);
} */

// for (let i = 0; i <= 10; i++) {
// 	console.log(i)
// }

/* Код должен вывести числа от 10 до 0:

for (let i = 10; i > 0; i++) {
	console.log(i);
} */

// for (let i = 10; i >= 0; i--) {
// 	console.log(i)
// }

/* Код должен вывести числа от 10 до 0:

for (let i = 10; i == 0; i--) {
	console.log(i);
} */

// for (let i = 10; i >= 0; i--) {
// 	console.log(i)
// }

/* Код должен вывести числа от 0 до 10:

let i = 0;

while (i >= 10) {
	console.log(i);
	i++;
} */

// let i = 0

// while (i < 10) {
// 	i++
// 	console.log(i)
// }

/* Код должен найти сумму целых чисел от 1 до 10:

let res;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res); */

// let res = 0

// for (let i = 1; i <= 10; i++) {
// 	res += i
// }

// console.log(res)

/* Код должен найти произведение целых чисел от 1 до 10:

let res = 0;

for (let i = 1; i <= 10; i++) {
	res *= i;
}

console.log(res); */

// let res = 1

// for (let i = 1; i <= 10; i++) {
// 	res *= i
// }

// console.log(res)

/* Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += elem;
}

console.log(sum); // должно вывести 15 */

// let arr = ['1', '2', '3', '4', '5']
// let sum = 0

// for (let elem of arr) {
// 	sum += +elem
// }

// console.log(sum)

/* Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = '';

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15 */

// let arr = ['1', '2', '3', '4', '5']
// let sum = 0

// for (let elem of arr) {
// 	sum += +elem
// }

// console.log(sum)

/* Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum = +elem;
}

console.log(sum); // должно вывести 15 */

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15

/* Код должен найти сумму элементов массива, однако, всегда выводит NaN:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит NaN */

// let arr = ['1', '2', '3', '4', '5']
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i]
// }

// console.log(sum) // почему-то выводит NaN

/* Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length - 1; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15 */

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит не 15

/* Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +i;
}

console.log(sum); // почему-то выводит не 15 */

// let arr = ['1', '2', '3', '4', '5']
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i]
// }

// console.log(sum) // почему-то выводит не 15

/* Код должен возвести в квадрат каждый элемент массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	elem = elem ** 2;
}

console.log(arr); */

// let arr = [1, 2, 3, 4, 5]

// for (let elem of arr) {
// 	elem = elem ** 2
// 	console.log(elem);
// }

/* Код должен заполнить массив числами от 1 до 5:

let arr;

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */

// let arr = []

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i)
// }

// console.log(arr)

/* Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
	sum += elem;
}

console.log(sum); */

// let obj = { a: 1, b: 2, c: 3 }
// let sum = 0

// for (let elem in obj) {
// 	sum += obj[elem]
// }

// console.log(sum)

/* Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum = +obj.key;
}

console.log(sum); */

// let obj = { a: 1, b: 2, c: 3 }
// let sum = 0

// for (let key in obj) {
// 	sum += obj[key]
// }

// console.log(sum)

/* Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
	} else {
		res = '---';
	}
}

console.log(res); */

// let arr = [1, 2, 3, 4, 5]
// let res

// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = '+++'
// 		break
// 	} else {
// 		res = '---'
// 	}
// }

// console.log(res)

/* Код должен заполнить массив числами от 1 до 5:

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */

// let arr = []

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i)
// }

// console.log(arr)

/* Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		let res = true;
		break;
	}
}

console.log(res); */

// let arr = [1, 2, 3, 4, 5]
// let res = false

// for (let elem of arr) {
// 	if (elem === 3) {
// 		 res = true
// 		break
// 	}
// }

// console.log(res)

/* Код должен вывести только четные элементы из массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 = 0) {
		console.log(elem);
	}
} */

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		console.log(elem);
// 	}
// }

/* Код должен записать в новый массив только нечетные элементы старого массива:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}

console.log(res); */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
// 	newArr = []

// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		newArr.push(elem)
// 	}
// }

// console.log(newArr)

/* Выведите с помощью цикла столбец чисел от 1 до 100. */

// for(let i = 1; i <= 100; i++){
// 	console.log(i);
// }

/* Выведите с помощью цикла столбец чисел от 100 до 1. */

// for (let i = 100; i >= 1; i--) {
// 	console.log(i)
// }

/* Выведите с помощью цикла столбец четных чисел от 1 до 100. */

// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i)
// 	}
// }

/* Заполните массив 10-ю иксами с помощью цикла. */
// let arr = []

// for(let i = 0; i < 10; i++){
// 	arr.push('x')
// }

// console.log(arr);

/* Заполните массив числами от 1 до 10 с помощью цикла. */

// let arr = []
// for(let i = 1; i <= 10; i++){
// 	arr.push(i)
// }

// console.log(arr);

/* Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. */

// let arr = [1, 3, -1, 23, 45, 9]

// for (let elem of arr) {
// 	if (elem > 0 && elem <= 10) {
// 		console.log(elem)
// 	}
// }

/* Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. */

// let arr = [1,2,3,4,5,6,7]

// for(let elem of arr){
// 	if(elem == 5){
// 		console.log('+++');
// 		break
// 	}
// }

/* Дан массив с числами. С помощью цикла найдите сумму элементов этого массива. */

// let arr = [1, 2, 3, 4, 5]
// let res = 0

// for (let elem of arr) {
// 	res += elem
// }
// console.log(res)

/* Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. */

// let arr = [1,2,3,4,5]

// for(let el of arr){
// 	el = el ** 2
// 	console.log(el);
// }

/* Дан массив с числами. Найдите среднее арифметическое его элементов.*/

// let arr = [1, 2, 3, 4, 5]
// let res = 0,
// 	arf

// for (let el of arr) {
// 	res += el
// 	arf = res / arr.length
// }
// console.log(arf)

/* Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа. */

// let arr = [1, 2, 3, 4, 5],
// 	res = 1

// for (let el of arr) {
// 	res *= el
// }

// console.log(res)

/* Заполните массив числами от 10 до 1 с помощью цикла. */

// let arr = []

// for (let i = 10; i >= 1; i--) {
// 	arr.push(i)
// }

// console.log(arr)

/* Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. */

// let arr = [-1, 1, -2, 2, -3, 3, -4, 4, -5, 5],
// res = 0

// for(let el of arr){
// 	if(el > 0){
// 		res += el
// 	}
// }
// console.log(res);

/* Дан массив числами, например:

let arr = [10, 20, 30, 50, 235, 3000];
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */

// let arr = [10, 20, 30, 50, 235, 3000]

// for (let el of arr) {
// 	let str = String(el)

// 	if (str[0] == '2' || str[0] == '2' || str[0] == '5') {
// 		console.log(+el)
// 	}
// }

/* Дан массив с числами. Выведите элементы этого массива в обратном порядке. */

// let arr = [1, 2, 3, 4, 5]

// for (let i = arr.length; i >= 0; i--) {
// 	console.log(arr[i])
// }

/* Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве. */

// let arr = [0, 1, 2, 3, 5, 4]

// for (let el of arr) {
// 	if(el === arr[el]){
// 		console.log(`елемент ${el} : порядковый номер ${arr[el]}`);
// 	}
// 	// console.log(el)
// }

// console.log(arr);

/* Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br. */

// let arr = [1, 2, 3, 4, 5]
// let div = document.querySelector('.div')

// for (let el of arr) {
// 	document.write((div.innerHTML += `${el}<br>`))
// }

/* Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным. */

// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let day = [1, 2, 3, 4, 5, 6, 7],
// 	div = document.querySelector('.div')

// for (let i = 0; i < arr.length - 2; i++) {
// 	div.innerHTML += ` ${arr[i]} - ${day[i]} <br>`
// }

// div.innerHTML += `<b>${arr.slice(-2)} ${day.slice(-2)} </b> <br>`

/* Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day. */

// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let days = [1, 2, 3, 4, 5, 6, 7],
// 	day = 3,
// 	div = document.querySelector('.div')

// for (let i = 0; i < arr.length; i++) {
// 	if (days[i] == day) {
// 		div.innerHTML += `<i>${arr[i]} - ${days[i]}</i> <br>`
// 	} else if (arr[i] != day) {
// 		div.innerHTML += `${arr[i]} - ${days[i]} <br>`
// 	}
// }

/* Дан следующий объект с работниками и их зарплатами:

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
Увеличьте зарплату каждого работника на 10%. */

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// }

// for (let el in obj) {
// 	obj[el] *= 1.1
// 	console.log(Math.floor(obj[el]))
// }

/* Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400. */

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// }

// for (let el in obj) {
// 	if (obj[el] <= 400) {
// 		obj[el] *= 1.1
// 		console.log(Math.floor(obj[el]))
// 	}
// }

/* Даны следующие массивы:

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго. */

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let obj = {}

// for (let i = 0; i < arr1.length; i++) {
// 	obj[arr1[i]] = arr2[i]
// }
// console.log(obj)

/* Дан следующий объект:

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
Найдите сумму ключей этого объекта и поделите ее на сумму значений. */

// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 }
// res = 0

// for (let el in obj) {
// 	res = obj[el] / +el
// 	console.log(`${obj[el]} : ${+el} = ${res}`)
// }

/* Дан следующий объект:

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
Запишите ключи этого объекта в один массив, а значения - в другой. */

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
// let key = []
// let elements = []

// for (let el in obj) {
// 	key.push(el)
// 	elements.push(obj[el])
// }

// console.log(key, elements)

/* Дан следующий объект:

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив: */

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// }
// let arr = []

// for (let el in obj) {
// 	let str = String(obj[el])
// 	if (str[0] == 1 || str[0] == 2) {
// 		arr.push(obj[el])
// 	}
// }
// console.log(arr)

/* Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:

{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}; */

// let arr = ['a', 'b', 'c', 'd', 'e']
// let obj = {}
// let i = 1

// for (let el of arr) {
// 	obj[i++] = el
// }
// console.log(obj)

/* Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:

{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; */

// let arr = ['a', 'b', 'c', 'd', 'e']
// let obj = {}
// let i = 1

// for(let el of arr){
// 	obj[el] = i++
// }

// console.log(obj);

/* Дан следующий массив:

let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'. */

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ]

// console.log(`${arr[3][2]} ${arr[1][1]} ${arr[2][0]} ${arr[0][0]}`);

/* Дан следующий массив:

let arr = [[1, 2], [3, 4], [5, 6]];
Обращаясь к каждому элементу массива найдите сумму всех его элементов. */

// let arr = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6],
// ], res = 0

// for (let el of arr) {
// 	res = el[0] + el[1]
// 	a = res + res
// 	console.log(`${el[0]} + ${el[1]} = ${res}`)
// }

/* Дан следующий массив:

let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
Обращаясь к каждому элементу массива найдите сумму всех его элементов. */

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ]
// let res = 0

// console.log(
// 	arr[0][0][0] + arr[0][0][1],
// 	arr[0][1][0] + arr[0][1][1],
// 	arr[1][0][0] + arr[1][0][1],
// 	arr[1][1][0] + arr[1][1][1]
// )

/* Дан следующий массив:

let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
Вручную, без цикла, найдите сумму элементов этого массива. */

// let arr = [
// 	[1, 2, 3, [4, 5, [6, 7]]],
// 	[8, [9, 10]],
// ]

// console.log(
// 	arr[0][0] +
// 		arr[0][1] +
// 		arr[0][2] +
// 		arr[0][3][0] +
// 		arr[0][3][1] +
// 		arr[0][3][2][0] +
// 		arr[0][3][2][1] +
// 		arr[1][0] +
// 		arr[1][1][0] +
// 		arr[1][1][1]
// )

/* Дан двухмерный массив с числами:

let arr = [[1, 2, 3], [4, 5], [6]];
С помощью вложенных циклов найдите сумму элементов этого массива. */

// let arr = [[1, 2, 3], [4, 5], [6]]
// let res = 0

// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		res += elem
// 	}
// }
// console.log(res)

/* Дан трехмерный массив с числами:

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
С помощью вложенных циклов найдите сумму элементов этого массива. */

// let arr = [
// 		[
// 			[1, 2],
// 			[3, 4],
// 		],
// 		[
// 			[5, 6],
// 			[7, 8],
// 		],
// 	],
// 	res = 0

// for (let subArr of arr) {
// 	for (let subArr1 of subArr) {
// 		for (let elem of subArr1) {
// 			res += elem
// 		}
// 	}
// }

// console.log(res)

/* Решите предыдущие две задачи через цикл for. */

// let arr = [[1, 2, 3], [4, 5], [6]]
// let res = 0

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		res += arr[i][j]
// 	}
// }
// console.log(res)

// let arr = [
// 		[
// 			[1, 2],
// 			[3, 4],
// 		],
// 		[
// 			[5, 6],
// 			[7, 8],
// 		],
// 	],
// 	res = 0

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		for (let k = 0; k < arr[j].length; k++) {
// 			res += arr[i][j][k]
// 		}
// 	}
// }

// console.log(res)

/* Сформируйте с помощью двух вложенных циклов следующий массив:

[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]] */
// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 5; j++) {
// 		arr[i].push(j + 1)
// 	}
// }

// console.log(arr)

/* Сформируйте с помощью двух вложенных циклов следующий массив:

[
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x']
] */

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 4; j++) {
// 		arr[i].push('x')
// 	}
// }

// console.log(arr)

/* Сформируйте с помощью трех вложенных циклов следующий массив:

[
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
] */

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = []
// 		for (let k = 0; k < 5; k++) {
// 			arr[i][j].push(k + 1)
// 		}
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

 */
// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = '';
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[j] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr.push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j)
// 	}
// }

// console.log(arr)

/* Сформируйте с помощью двух вложенных циклов следующий массив:

[[1, 2], [3, 4], [5, 6], [7, 8]] */

// let arr = []

// for (let i = 0, k = 1; i < 4; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 2; j++) {
// 		arr[i].push(k++)
// 	}
// }

// console.log(arr)

/* Сформируйте с помощью двух вложенных циклов следующий массив:

[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]] */

// let arr = []

// for (let i = 0, k = 1; i < 4; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push((k++ * 2))
// 	}
// }

// console.log(arr)

/* Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:

[[[1, 2], [3, 4]], [[5, 6], [7, 8]]] */

// let arr = []

// for (let i = 0, l = 1; i < 2; i++) {
// 	arr[i] = []
// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = []
// 		for (let k = 0; k < 2; k++) {
// 			arr[i][j].push(l++)
// 		}
// 	}
// }
// console.log(arr)

/* Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = [],
// 	k = 1

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k)
// 		k++
// 	}
// }

// console.log(arr)

/*  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []
// let k = 1

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++)
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k--;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []
// let k = 1

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++)
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];
let k;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []
// let k = 1

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k)
// 		k++
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++)
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0, k++; j < 3; j++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++)
// 	}
// }

// console.log(arr);

/* Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++; k++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++)
// 	}
// }

// console.log(arr);

/* Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = ++k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[k] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []
// let k = 1

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k
// 		k++
// 	}
// }

// console.log(arr)

/* Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; k++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

// let arr = []

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = []

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++
// 	}
// }

// console.log(arr)

/* Дан следующий объект:

let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
Найдите сумму элементов приведенного объекта. */

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }

// console.log(
// 	obj.key1.key1 +
// 		obj.key1.key2 +
// 		obj.key1.key3 +
// 		obj.key2.key1 +
// 		obj.key2.key2 +
// 		obj.key2.key3 +
// 		obj.key3.key1 +
// 		obj.key3.key2 +
// 		obj.key3.key3
// )

/* Дан следующий объект:

let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
Выведите на экран элемент 'b2' и элемент 'c1'. */

// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }

// console.log(obj[2][2], obj[3][1]);

/* Дан следующий объект:

let obj = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}
Вручную, без цикла, найдите сумму всех элементов-чисел. */

// let obj = {
// 	key1: {
// 		a: 1,
// 		b: 2,
// 		c: {
// 			d: 3,
// 			e: 4,
// 		},
// 		f: 5,
// 	},
// 	key2: {
// 		g: 6,
// 		h: 7,
// 	},
// }

// console.log(
// 	obj.key1.a +
// 		obj.key1.b +
// 		obj.key1.c.d +
// 		obj.key1.c.e +
// 		obj.key1.f +
// 		obj.key2.g +
// 		obj.key2.h)

/* Дан следующий объект:

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
Используя циклы, найдите сумму элементов этого объекта. */

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }

// for (let key in obj) {
// 	let subObj = obj[key]

// 	for (let elem in subObj) {
// 		console.log(subObj[elem])
// 	}
// }

/* Дан следующий объект:

let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
Используя циклы, найдите сумму элементов этого объекта. */

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// let res = 0
// for (let key in obj) {
// 	let subObj = obj[key]

// 	for (let key2 in subObj) {
// 		let subObj2 = subObj[key2]
// 		for (let elem in subObj2) {
// 			res += subObj2[elem]
// 		}
// 	}
// }
// console.log(res)

/* Дан следующий объект со студентами:

let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
Выведите на экран первого студента из третьей группы. */

// let students = {
// 	group1: ['name11', 'name12', 'name13'],
// 	group2: ['name21', 'name22', 'name23'],
// 	group3: ['name31', 'name32', 'name33'],
// }

// console.log(students.group3[0])

/* Дана следующая структура с данными:

let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
С помощью вложенных циклов выведите на экран все строки с данными. */

// let data = {
// 	1: ['data11', 'data12', 'data13'],
// 	2: ['data21', 'data22', 'data23'],
// 	3: ['data31', 'data32', 'data33'],
// 	4: ['data41', 'data42', 'data43'],
// }

// for (let key in data) {
// 	for (let elem of data[key]) {
// 		console.log(elem)
// 	}
// }

/* Дана следующая структура с данными:

let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];
С помощью вложенных циклов выведите на экран все строки с данными. */

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ]

// for (let arr of data) {
// 	for (let elem in arr) {
// 		console.log(arr[elem])
// 	}
// }

/* 
Дана следующая структура с данными:

let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];
С помощью вложенных циклов выведите на экран все строки с данными. */

// let data = [
// 	{
// 		1: ['data111', 'data112', 'data113'],
// 		2: ['data121', 'data122', 'data123'],
// 	},
// 	{
// 		1: ['data211', 'data212', 'data213'],
// 		2: ['data221', 'data222', 'data223'],
// 	},
// 	{
// 		1: ['data411', 'data412', 'data413'],
// 		2: ['data421', 'data422', 'data423'],
// 	},
// ]

// for (let arr of data) {
// 	for (let key in arr) {
// 		for (let subObj of arr[key]) {
// 			console.log(subObj)
// 		}
// 	}
// }

/* Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
Выведите на экран данные каждого работника в формате имя - зарплата. */

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ]

// for(let user of employees){
// 	console.log(`${user.name} - ${user.salary}`);
// }

/* Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
Выведите на экран сумму зарплат всех работников. */

// let employees = [
// 		{
// 			name: 'name1',
// 			salary: 300,
// 		},
// 		{
// 			name: 'name2',
// 			salary: 400,
// 		},
// 		{
// 			name: 'name3',
// 			salary: 500,
// 		},
// 	],
// 	res = 0

// for (let user of employees) {
// 	res += user.salary
// }

// console.log(res)

/* Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет. */

// let employees = [
// 		{
// 			name: 'name1',
// 			salary: 300,
// 			age: 28,
// 		},
// 		{
// 			name: 'name2',
// 			salary: 400,
// 			age: 29,
// 		},
// 		{
// 			name: 'name3',
// 			salary: 500,
// 			age: 30,
// 		},
// 		{
// 			name: 'name4',
// 			salary: 600,
// 			age: 31,
// 		},
// 		{
// 			name: 'name5',
// 			salary: 700,
// 			age: 32,
// 		},
// 	],
// 	res = 0

// for (let user of employees) {
// 	if (user.age >= 30) {
// 		res += user.salary
// 	}
// }

// console.log(res)

/* Дан следующий объект с названиями месяцев:

let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
Даны также следующие переменные:

let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11
Выведите на экран название месяца, соответствующее значениям переменных lang и month. */

// let months = {
// 	ru: [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	en: [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// }

// let lang = 'ru' // может быть или 'ru' или 'en'
// let month = 5 // число от 0 до 11

// console.log(months[lang][month])

/* Дана вот такая структура для хранения списка дел за года, месяцы и дни:

let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных. */

// let affairs = {
// 	2018: {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	2019: {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		},
// 	},
// }

// let date = 2019, day = 29, month = 12, number = 1

// console.log(affairs[date][month][day][number]);

/* Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj['key1'][key2]);
Код, однако, выводит не то, что ожидал автор. Исправьте ошибку. */

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2'
// let key2 = 'key4'
// console.log(obj[key1][key2])

/* Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj.key1.key2);
Код, однако, выводит не то, что ожидал автор. Исправьте ошибку. */

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2'
// let key2 = 'key4'
// console.log(obj[key1][key2])

/* Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj.key1['key2']);
Код, однако, выводит не то, что ожидал автор. Исправьте ошибку. */

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2'
// let key2 = 'key4'
// console.log(obj[key1][key2])

/* Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
console.log(obj['key1']['key4']);
Код, однако, выводит не то, что ожидал автор. Исправьте ошибку. */

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2'
// console.log(obj[key1]['key4'])

/* Добавьте в следующий массив еще одного работника:

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
]; */

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// ]

// employees.push({
// 	name: 'name4',
// 	salary: 600,
// 	age: 25,
// })

// console.log(employees)

/* Скопируйте себе следующую структуру для хранения списка дел за определенные даты:

let affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
} */
/* Добавьте еще одно дело в дату '2019-12-29' */
// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// }(
// affairs['2019-12-29'].push('data24')

// console.log(affairs)
/* Добавьте еще два дела в дату '2019-12-31'. */

// affairs['2019-12-30'].push('data34', 'data35')

/* Скопируйте себе следующую структуру для хранения списка студентов:

let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
}; */

/* Добавьте нового студента в подгруппу 'subgroup11'. */

// let students = {
// 	group1: {
// 		subgroup11: ['student111', 'student112', 'student113'],
// 		subgroup12: ['student121', 'student122', 'student123'],
// 	},
// 	group2: {
// 		subgroup21: ['student211', 'student212', 'student213'],
// 		subgroup22: ['student221', 'student222', 'student223'],
// 	},
// 	group3: {
// 		subgroup31: ['student311', 'student312', 'student313'],
// 		subgroup32: ['student321', 'student322', 'student323'],
// 	},
// }

// students.group1.subgroup11.push('student114')
// console.log(students)

/* Добавьте в первую группу еще одну подгруппу. */

// students.group1.subgroup13 = [2]

// console.log(students)

/* Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов. */

// students.group4 = {}
// students.group4.subgroup33 = []
// students.group4.subgroup33.push('student324', 'student325')

/* Возведите 2 в 10 степень. */
// console.log(2**10);

/* Найдите квадратный корень из 245. */
// console.log(Math.sqrt(245));

/* Дан следующий массив:

[4, 2, 5, 19, 13, 0, 10]
Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

// let arr = [4, 2, 5, 19, 13, 0, 10],
// 	sum = 0

// for (let el of arr) {
// 	sum += el ** 3
// 	console.log(Math.sqrt(sum))
// }

/* Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. */

// let num = Math.sqrt(379)

// console.log(num.toFixed(2), num.toFixed(3))

/* Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'. */

// let obj = {}
// let num = Math.sqrt(587)

// obj.floor = Math.floor(num)
// obj.ceil = Math.ceil(num)

// console.log(obj)

/* Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. */

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10), Math.min(4, -2, 5, 19, -130, 0, 10));

/* Выведите на экран случайное целое число от 1 до 100. */

// function randomNumber(max, min) {
// 	return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(randomNumber(100, 1))

/* С помощью цикла заполните массив 10-ю случайными целыми числами. */

// let arr = []

// for (let i = 0; i < 10; i++) {
// 	function randomNumber(max, min) {
// 		return Math.floor(Math.random() * (max - min + 1) + min)
// 	}

// 	arr.push(randomNumber(100, 1))
// }

// console.log(arr)

/* Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b. */

// let a = -250
// let b = 5

// console.log(Math.abs(a), Math.abs(b))

/* Дана строка 'js'. Сделайте из нее строку 'JS'. */

// let str = 'js'

// console.log(str.toUpperCase())

/* Дана строка 'JS'. Сделайте из нее строку 'js'. */

// let str = 'JS'

// console.log(str.toLowerCase())

/* Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). */

// let str = 'я учу javascript!'

// console.log(str.substr(1, 5) + ' ' + str.substr(6))
// console.log(str.substring(1, 5) + ' ' + str.substring(5))

/* Дана строка. Проверьте, начинается ли эта строка на 'http://'. */

// let str = 'http://'
// let res = str.startsWith('http')

// console.log(res)

/* Дана строка. Проверьте, заканчивается ли эта строка на '.html'. */

// let str = 'dfsgbdfgjbdghtml'
// let res = str.endsWith('html')
// console.log(res)

/* Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки. */
// let str = '1-2-3-4-5'
// let elem = '-'

// while (str.includes(elem)) {
// 	str = str.replace(elem, '.')
// }

// console.log(str)

/* Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива. */

// let str = '1-2-3-4-5'
// let res = str.split('-')

// console.log(res)

/* Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива. */

// let str = '12345'
// let res = str.split('')

// console.log(res)

/* Дан следующий массив:

let arr = [1, 2, 3, 4, 5];
С помощью метода join слейте его в строку '1-2-3-4-5'. */
// let arr = [1, 2, 3, 4, 5]
// let res = arr.join('-')

// console.log(res)

/* Дан следующий массив:

[1, 2, 3]
Выведите на экран первый элемент этого массива. */

// let arr = [1, 2, 3]
// let el = arr.shift()

// console.log(el)

/* Дан следующий массив:

[1, 2, 3]
Выведите на экран последний элемент этого массива. */

// let arr = [1, 2, 3]
// let el = arr.pop()

// console.log(el)

/* Дан следующий массив:

[1, 2, 3]
Добавьте ему в начало элементы 4, 5, 6. */
// let arr = [1, 2, 3]
// arr.unshift(4, 5, 6)

// console.log(arr)

/* Дан следующий массив:

[1, 2, 3, 4, 5]
Сделайте из этого массива следующий:

[1, 2, 3] */

// let arr = [1, 2, 3, 4, 5]
// let res = arr.slice(0, 3)
// console.log(res)

/* Дан следующий массив:

[1, 2, 3, 4, 5]
Используя этот массив, запишите в новую переменную следующий массив:

[4, 5] */

// let arr = [1, 2, 3, 4, 5]
// let res = arr.slice(3)
// console.log(res)

/* Дан следующий массив:

[1, 2, 3, 4, 5]
С помощью метода splice преобразуйте массив в следующий:

[1, 4, 5] */

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)

// console.log(arr)

/* Дан следующий массив:

[1, 2, 3, 4, 5]
С помощью метода splice сделайте из него массив:

[1, 2, 3, 'a', 'b', 'c', 4, 5] */

// let arr = [1, 2, 3, 4, 5]

// arr.splice(3, 0, 'a', 'b', 'c')

// console.log(arr)

/* Дан следующий массив:

[1, 2, 3, 4, 5]
С помощью метода splice сделайте из него массив:

[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'] */

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')

// console.log(arr)

/* Дан следующий массив:

[1, 2, 3, 4, 5]
Проверьте, есть ли в этом массиве число 3. */

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.includes(3))

/* Дан объект:

let obj = {a: 1, b: 2, c: 3};
Получите массив его ключей. */
// let obj = { a: 1, b: 2, c: 3 }
// console.log(Object.keys(obj))

/* Код должен найти сумму цифр числа:

let num = 12345;
let arr = num.split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}

console.log(sum); */

// let num = '12345'
// let arr = num.split('')

// let sum = 0
// for (let digit of arr) {
// 	sum += +digit
// }

// console.log(sum)

// let num = 12345
// let arr = String(num).split('')

// let sum = 0
// for (let digit of arr) {
// 	sum += +digit
// }

// console.log(sum)

// let num = 12345
// let arr = String(num).split('')

// let sum = 0
// for (let digit of arr) {
// 	sum += Number(digit)
// }

// console.log(sum) // почему-то выводит 5, а не 15

// let num = 12345
// let arr = String(num).split('')

// let sum = 0
// for (let digit of arr) {
// 	sum += Number(digit)
// }

// console.log(sum)

// let num = 12345
// let arr = String(num).split('')

// let prod = 1
// for (let digit of arr) {
// 	prod *= digit
// }

// console.log(prod)

/* Сделайте функцию, выводящую в консоль ваше имя. */

// function firstName() {
// 	console.log('Lesha')
// }

// firstName()

/* Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100. */

// function number() {
// 	let res = 0
// 	for (let i = 1; i <= 100; i++) {
// 		res += i
// 	}
// 	console.log(res)
// }
// number()

// function kyb(num) {
// 	console.log(num ** 3)
// }

// kyb(2)

/* Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'. */

// function checkNum(num) {
// 	if (num >= 0) {
// 		console.log('+++')
// 	} else {
// 		console.log('---')
// 	}
// }

// checkNum(2)

/* Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел. */

// function number(num1, num2, num3) {
// 	console.log(num1 + num2 + num3)
// }

// number(1, 2, 3)

/* Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму. Пусть даны 3 переменные с числами:

let param1 = 1;
let param2 = 2;
let param3 = 3;
С помощью созданной вами функции выведите в консоль сумму значений эти переменных. */

// let param1 = 1
// let param2 = 2
// let param3 = 3

// function amout(num1, num2, num3) {
// 	console.log(num1 + num2 + num3)
// }

// amout(param1, param2, param3)

/* Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res. */

// function number(num) {
// 	return num ** 3
// }

// let res = number(3)
// console.log(res)

/* Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль. */
// function number(num) {
// 	return Math.sqrt(num)
// }
// let res = number(3) + number(4)

// console.log(res)

/* Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части. */

// function sqrt(num) {
// 	return Math.sqrt(num)
// }

// function round(num) {
// 	return num.toFixed(3)
// }

// let res = round(sqrt(2))

// console.log(res)

/* Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res. */

// function sqrt(num) {
// 	return Math.sqrt(num)
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3
// }

// let res = sum(sqrt(2), sqrt(3), sqrt(4))

// console.log(res)

/* Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

function round(num) {
	return num.toFixed(3);
}
С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную res записывалась дробь, округленная до 3-х знаков в дробной части. */

// function sqrt(num) {
// 	return Math.sqrt(num)
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3
// }

// function round(num) {
// 	return num.toFixed(3)
// }
// let res = round(sum(sqrt(2), sqrt(3), sqrt(4)))

// console.log(res)

/* Что выведется в консоль в результате выполнения следующего кода:

function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		return sum;
	}
}

console.log( func(5) );
Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора. */

// function func(num) {
// 	let sum = 0

// 	for (let i = 1; i <= num; i++) {
// 		sum += i
// 	}
// 	return sum
// }

// console.log(func(5))

/* Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата. */

// function func(num) {
// 	let res = num,
// 		i = 1,
// 		sum = 0

// 	while (true) {
// 		res /= 2
// 		sum += i

// 		if (res < 10) {
// 			console.log(sum)
// 			return res
// 		}
// 	}
// }
// func(1000)

/* Дана следующая функция:

function func(num1, num2) {
	let res;
	
	if (num1 > 0 && num2 > 0) {
		res = num1 * num2;
	} else {
		res = num1 - num2;
	}
	
	return res;
}

console.log(func(3, 4));
Перепишите ее в сокращенной форме согласно изученной теории. */

// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2
// 	} else {
// 		return num1 - num2
// 	}
// }

// console.log(func(3, 4))

/* Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами. */

// function check(arr) {
// 	for (let el of arr) {
// 		if (el % 2 !== 0) {
// 			return false
// 		}
// 	}

// 	return true
// }

// console.log(check([2, 4, 6, 8, ]))

/* Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными. */

// function check(num) {
// 	num = String(num)
// 	for (let i = 0; i <= num.length; i++) {
// 		if (+num % 2 !== 0) {
// 			return true
// 		}
// 	}
// 	return false
// }

// console.log(check(377))

/* Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд. */

// function check(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == arr[i + 1]) {
// 			return false
// 		}
// 	}
// 	return true
// }

// console.log(check([1, 2, 3, 4, 5]))

/* Дана следующая функция:

function func(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории. */

// function func(a, b) {
// 	return a == b
// }

/* Дана следующая функция:

function func(a, b) {
	if (a != b) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории. */

// function func(a, b) {
// 	return a != b
// }

/* function func(a, b) {
	if (a + b >= 10) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории. */

// function func(a, b) {
// 	return a + b >= 10
// }

// console.log(func(9, 1));

/* Дана следующая функция:

function func(num) {
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории. */

// function func(num) {
// 	return num >= 0
// }

/* Напишите, какие недостатки у следующего кода, и исправьте их:

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res / arr.length;
} */

// function sum(arr) {
// 	let res = 0

// 	for (let elem of arr) {
// 		res += elem
// 	}

// 	return res / arr.length
// }

// console.log(sum([1, 2, 3, 4, 5]))

/* Напишите, какие недостатки у следующего кода, и исправьте их:

function func(arr1, arr2) {
	let res1 = 0;
	
	for (let elem of arr) {
		res1 += elem;
	}
	
	let res2 = 0;
	
	for (let elem of arr) {
		res2 += elem;
	}
	
	return res1 / res2;
} */

// function arrayCalc(arr1, arr2) {
// 	let res1 = 0
// 	let res2 = 0

// 	for (let elem of arr1) {
// 		res1 += elem
// 	}
// 	for (let elem of arr2) {
// 		res2 += elem
// 	}

// 	return res1 / res2
// }

// console.log(arrayCalc([1,2,3,4,5], [1,2,3,4,5]))

/* Напишите, какие недостатки у следующего кода, и исправьте их:

function getSum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res *= elem;
	}
	
	return res;
} */
// function arrayMulti(arr) {
// 	let res = 1

// 	for (let elem of arr) {
// 		res *= elem
// 	}

// 	return res
// }

// console.log(arrayMulti([1, 2, 3, 4, 5]))

/* Код должен найти сумму результатов работы двух функций:

function func1() {
	console.log(3);
}
function func2() {
	console.log(5);
}

console.log( func1() + func2() ); */

// function func1() {
// 	return 3
// }
// function func2() {
// 	return 5
// }

// console.log(func1() + func2())

/* Код должен найти сумму элементов массива:

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
		return res;
	}
}

console.log(sum([1, 2, 3, 4, 5])); */

// function sum(arr) {
// 	let res = 0

// 	for (let elem of arr) {
// 		res += elem
// 	}
// 	return res
// }

// console.log(sum([1, 2, 3, 4, 5]))

/* Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:

let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	console.log(res);
} */

// function arraySum(arr) {
// 	let res = 0

// 	for (let elem of arr) {
// 		res += elem
// 	}

// 	return res
// }

// console.log(arraySum([1, 2, 3, 4, 5]))

/* Код должен найти сумму результатов работы двух функций:

function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1 + func2 ); */

// function func1() {
// 	return 3
// }
// function func2() {
// 	return 5
// }

// console.log(func1() + func2())

/* Код должен найти сумму элементов массива:

let sum = sum([1, 2, 3, 4, 5]);
console.log(sum);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return elem;
} */

// console.log(sum([1, 2, 3, 4, 5]))

// function sum(arr) {
// 	let sum = 0

// 	for (let elem of arr) {
// 		sum += elem
// 	}

// 	return sum
// }

/* Код должен найти сумму элементов массива:

let res = sum([1, 2, 3, 4, 5]);
console.log(res);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
} */

// console.log(sum([1, 2, 3, 4, 5]))

// function sum(arr) {
// 	let sum = 0

// 	for (let elem of arr) {
// 		sum += elem
// 	}
// 	return sum
// }

/* Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:

function add(num) {
	if (num <= 9) {
		return '0' + num;
	}
} */

// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num
// 	}
// 	return num
// }

// console.log(add(7))

/* Код должен найти сумму элементов массива:

let arr = [1, 2, 3, 4, 5];
let sum = sum(arr);
console.log(sum);

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
} */

// console.log(sum([1, 2, 3, 4, 5]))

// function sum(arr) {
// 	let res = 0

// 	for (let elem of arr) {
// 		res += elem
// 	}

// 	return res
// }

/* Код должен найти сумму цифр числа:

let num = 12345;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
	let arr = num.split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
} */

// let num = 12345
// let res = getDigitsSum(num)
// console.log(res)

// function getDigitsSum(num) {
// 	num = String(num)
// 	let arr = num.split('')
// 	let sum = 0

// 	for (let elem of arr) {
// 		sum += +elem
// 	}

// 	return sum
// }

/* Код должен проверить число на то, что оно является простым:

console.log(isPrime(13)); // должен вывести true

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i !== 0) {
			return true;
		} else {
			return false;
		}
	}
} */

// console.log(isPrime(13)) // должен вывести true

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		return num % i !== 0 ? true : false
// 	}
// }

/* Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов. */

// function sumElementArray(arr) {
// 	let res = 0
// 	for(let el of arr){
// 		res += el
// 	}
// 	return res
// }

// console.log(sumElementArray([1,2,3,4,5]));

/* Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей. */

// function func(num) {
// 	let arr = []

// 	for (let i = 1; i <= num; i++) {
// 		if (num % i == 0) {
// 			arr.push(i)
// 		}
// 	}
// 	return arr
// }

// console.log(func(56))

/* Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов. */

// function array(str) {
// 	let arr = str.split('')
// 	return arr
// }

// console.log(array('12345'));

/* Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. */

// function reversStr(str) {
// 	let res
// 	for (let i = str.length; i > 0; i--) {
// 		res = i
// 		console.log(i)
// 	}
// 	return res
// }

// console.log(reversStr('12345'))

/* Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки. */

// function apperCaseStr(str) {
// 	let res = str.slice(0, 1).toUpperCase() + str.slice(1)
// 	return res
// }

// console.log(apperCaseStr('abcd'))

/* Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки. */

// function upperCaseStr(str) {
// 	let res = str.split(' ')
// 	let arr = []
// 	for (let i = 0; i < res.length; i++) {
// 		let word = res[i]
// 		let result = word.charAt(0).toUpperCase() + word.slice(1)
// 		arr.push(result)
// 	}
// 	let string = arr.join(' ')
// 	return string
// }

// console.log(upperCaseStr('abcd abcd abcd'))

/* Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. */

// function addNum(num) {
// 	let arr = []
// 	for (let i = 0; i < num; i++) {
// 		arr.push(i + 1)
// 	}
// 	return arr
// }

// console.log(addNum(25))

/* Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр. */

// function sumNumbers(num) {
// 	let str = String(num)
// 	let sum = 0
// 	for (let i = 0; i < str.length; i++) {
// 		sum += +str[i]
// 	}

// 	return sum
// }

// console.log(sumNumbers(12345))

/* Сделайте функцию, которая параметром будет год и проверять, високосный он или нет. */

// function checkYears(years) {
// 	if (years % 4 == 0) {
// 		if (years % 100 == 0) {
// 			if (years % 400 == 0) {
// 				return true
// 			} else {
// 				return false
// 			}
// 		} else {
// 			return true
// 		}
// 	} else {
// 		return false
// 	}
// }

// console.log(checkYears(2024))

/* Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам. */

// function day(sec) {
// 	let seconds = 86400,
// 		days = sec / seconds

// 	return days
// }

// console.log(day(172800))

/* Сделайте функцию, которая будет возвращать случайный элемент из массива. */

// function randomElements(arr) {
// 	let random
// 	for (let i = 0; i < arr.length; i++) {
// 		random = arr[Math.floor(Math.random() * i)]
// 	}
// 	return random
// }

// console.log(randomElements([1, 2, 3, 4, 5]))

/* Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет. */

// function easNumber(num) {
// 	if (num < 2) {
// 		return false
// 	} else {
// 		for (let i = 2; i <= Math.sqrt(num); i++) {
// 			if (num % i == 0) {
// 				return false
// 			}
// 		}
// 	}
// 	return true
// }

// console.log(easNumber(33))

/* Сделайте функцию func, которая будет возвращать через return какую-либо строку. */

// function func() {
// 	return 'string'
// }

// console.log(func())

/* Выведите исходный код функции func в консоль. */

// console.log(func)

/* Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль. */

// func = 123
// console.log(func);

/* Сделайте функцию func1, которая будет возвращать через return число 3. */

// function func1() {
// 	return 3
// }
/* Скопируйте исходный код функции func1, в переменную func2. */
// let func2 = func1

// console.log(func1() + func2())

/* Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1. */

// let func1 = function () {
// 	return 1
// }
/* Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2. */

// let func2 = function () {
// 	return 2
// }

// console.log(func1() + func2())
// alert(func1() + func2())

/* Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления. */
// console.log(func());
// function func() {
// 	return 3
// }

/* Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления. */
// console.log(func());
// let func = function(){
// 	return 1
// }

/* Расставьте точки с запятой во всех необходимых местах:

let func1 = function() {console.log('!')}
let func2 = function() {
	console.log('!')
}
function func3() {
	console.log('!')
} */

// let func1 = function () {
// 	console.log('!');
// };
// let func2 = function () {
// 	console.log('!');
// };
// function func3() {
// 	console.log('!');
// }

/* Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. */
/* Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль. */
// let arr = [
// 	function () {
// 		return 1
// 	},
// 	function () {
// 		return 2
// 	},
// 	function () {
// 		return 3
// 	},
// ]

// for(let func of arr){
// 	console.log(func());
// }

/* Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию. */

// console.log(arr[2]());

/* Используя созданный вами массив arr найдите сумму результатов функций (без цикла). */

// console.log(arr[0]() + arr[1]() + arr[2]())

/* Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел. */

// let obj = {
// 	func1: function () {
// 		return 1
// 	},
// 	func2: function () {
// 		return 2
// 	},
// 	func3: function () {
// 		return 3
// 	},
// }

// console.log(obj.func1() + obj.func2() + obj.func3())

// for (let func in obj) {
// 	console.log(obj[func]())
// }

/* Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов. */

// let obj = {
// 	sum: function (arr) {
// 		let res = 0
// 		for (let el of arr) {
// 			res += el
// 		}
// 		return res
// 	},
// 	cquare: function (arr) {
// 		let res = 1

// 		for (let el of arr) {
// 			res += el ** 2
// 		}
// 		return res
// 	},
// 	cube: function (arr) {
// 		let res = 1

// 		for (let el of arr) {
// 			res += el ** 3
// 		}
// 		return res
// 	},
// }

// console.log(`сумма: ${obj.sum([1,2,3,4,5])}, сумма квадрат: ${obj.cquare([1,2,3,4,5])}, сумма куба: ${obj.cube([1,2,3,4,5])}`);

// function test(func1, func2, func3) {
// 	console.log(func1() + func2() + func3())
// }

// test(
// 	function(){
// 		return 1
// 	},
// 	function(){
// 		return 2
// 	},
// 	function(){
// 		return 3
// 	}
// )

// console.log(test());

/* Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций. */

// function func1() {
// 	return 1
// }
// function func2() {
// 	return 2
// }
// function func3() {
// 	return 3
// }

// function test(el1, el2, el3) {
// 	return el1() + el2() + el3()
// }

// console.log(test(func1, func2, func3))

/* Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи. */
// function func1() {
// 	return 1
// }
// function func2() {
// 	return 2
// }
// function func3() {
// 	return 3
// }

// function test(el1, el2, el3) {
// 	console.log(el1() + el2() + el3())
// }

// test(func1, func2, func3)

/* Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами. */

// let func1 = function() {
// 	return 1
// }
// let func2 = function() {
// 	return 2
// }
// let func3 = function() {
// 	return 3
// }

// function test(el1, el2, el3) {
// 	console.log(el1() + el2() + el3())
// }

// test(func1, func2, func3)

/* Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб. */
/* Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func. */
// test(function func(num) {
// 	return num ** 3
// })

// function test(func) {
// 	console.log(func(3))
// }

/* Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат. */

// function test(func1, func2) {
// 	alert(func1(2) + func2(3))
// }

// test(
// 	function (num1) {
// 		return num1
// 	},
// 	function (num2) {
// 		return num2
// 	}
// )

/* Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа. Пусть функция test возвращает сумму результатов переданных функций:

function test(num, func1, func2) {
	return func1(num) + func2(num);
}
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль. */

// function test(num, func1, func2) {
// 	return func1(num) + func2(num)
// }

// console.log(test(3, function(num){
// 	return num ** 2
// },
// function(num){
// 	return num ** 3
// }));

/* Не подсматривая в мой код реализуйте такую же функцию test самостоятельно. */

// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i])
// 	}
// 	return arr
// }

// let result = test([1, 2, 3], function (num) {
// 	return num * num
// })

// console.log(result)

/* Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел. */

// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i])
// 	}
// 	return arr
// }

// let result = test([1, 2, 3], function (num) {
// 	return num ** 3
// })

// console.log(result)

/* Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб. */

// function func(num1, num2) {
// 	function square(num) {
// 		return num ** 2
// 	}
// 	function cube(num) {
// 		return num ** 3
// 	}

// 	return square(num1) + cube(num2)
// }

// console.log(func(2, 3))

/* Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций. */

// function func1(){
// 	return function(){
// 		return 1
// 	}
// }
// function func2() {
// 	return function () {
// 		return 2
// 	}
// }

// console.log(func1()() + func2()());

/* лайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'. */

// function func() {
// 	return function () {
// 		return function () {
// 			return function () {
// 				return function () {
// 					return '!'
// 				}
// 			}
// 		}
// 	}
// }

// console.log(func()()()()())

/* Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел. */

// function func(num1) {
// 	return function (num2) {
// 		return function (num3) {
// 			return num1 + num2 + num3
// 		}
// 	}
// }
// console.log(func(2)(3)(4))

/* Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел. */

// function func(num) {
// 	return function (num2) {
// 		return function (num3) {
// 			return function (num4) {
// 				return function () {
// 					let arr = []
// 					arr.push(num, num2, num3, num4)
// 					return arr
// 				}
// 			}
// 		}
// 	}
// }

// console.log(func(2)(3)(4)(5)())

/* Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза. */

// function each(arr, callback) {
// 	let result = []

// 	for (let elem of arr) {
// 		result.push(callback(elem)) // вызываем функцию-коллбэк
// 	}

// 	return result
// }

// let res = each([1, 2, 3, 4, 5], function (num) {
// 	return num * 2
// })

// console.log(res)

/* Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке. */

// function each(arr, callback) {
// 	let result = []

// 	for (let elem of arr) {
// 		result.push(callback(elem)) // вызываем функцию-коллбэк
// 	}

// 	return result
// }

// let res = each(['1', '2', '3', '4', '5'], function (num) {
// 	return num
// })

// console.log(res.reverse())

/* Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки. */

// function each(arr, callback) {
// 	let result = []

// 	for (let elem of arr) {
// 		result.push(callback(elem)) // вызываем функцию-коллбэк
// 	}

// 	return result
// }

// let res = each(['abcd', 'abcd', 'abcd', 'abcd', 'abcd'], function (num) {
// 	let result
// 	for (let i = 0; i < num.length; i++) {
// 		result = num.charAt(0).slice(0, 1).toUpperCase() + num.slice(1)
// 	}
// 	return result
// })

// console.log(res)
// 	let res = str.slice(0, 1).toUpperCase() + str.slice(1)

/*  */

// function each(arr, callback) {
// 	let result = []

// 	for (let elem of arr) {
// 		result.push(callback(elem)) // вызываем функцию-коллбэк
// 	}

// 	return result
// }

// function cube(num) {
// 	return num ** 3
// }

// let res = each([1, 2, 3, 4, 5], cube)

// console.log(res)

/* Дана следующая функция с коллбэком:

let result = filter([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
Упростите коллбэк через стрелочную функцию. */

// function filter(arr, callback) {
// 	let res = [];

// 	for (let elem of arr) {
// 		if ( callback(elem) === true ) {
// 			res.push(elem);
// 		}
// 	}

// 	return res;
// }

// let result = filter([-1, 1, 2, 3, 4, 5], elem => (elem > 0)  ? true : false);

// console.log(result);

/* Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях. */

// function test(){
// 	let num = 1
// 	return function(){
// 		console.log(num);
// 		num++
// 	}
// }

// let func = test()
// func()
// func()
// func()

// let func2 = test()
// func2()
// func2()

/* Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число. */
// function test(){
// 	let num = 10
// 	return function(){
// 		console.log(num);
// 		num--
// 	}
// }

// let func = test()
// func()
// func()
// func()

// let func2 = test()
// func2()
// func2()

/* Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен. */
// function test(){
// 	let num = 10
// 	return function(){
// 		console.log(num);
// 		if(num <= 0){
// 			console.log('Ends');
// 		} else{
// 			num--
// 		}
// 	}
// }

// let func = test()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()

/* 262 */

/* Дана следующая функция с коллбэком:

let result = filter([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
Упростите коллбэк через стрелочную функцию. */

// function filter(arr, callback) {
// 	let res = []

// 	for (let elem of arr) {
// 		if (callback(elem)) {
// 			res.push(elem)
// 		}
// 	}

// 	return res
// }

// let result = filter([1, 2, 3, 4, 5], elem => (elem > 0 ? true : false))
// console.log(result)

/* Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.  */

// function test() {
// 	let num = 1

// 	return function(){
// 		console.log(num);
// 		num++
// 	}
// }

// let result = test()
// result()
// result()
// let result2 = test()
// result2()
// result2()

/* Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число. */

// function func() {
// 	let num = 10
// 	return function () {
// 		console.log(num)
// 		num--
// 	}
// }

// let res = func()
// res()
// res()
// res()
// res()
// res()

/* Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен. */

// function func() {
// 	let num = 0
// 	return function () {
// 		for (let i = 10; i >= num; i--) {
// 			console.log(i)
// 			if (i == 0) {
// 				num = 'end'
// 				console.log(num)
// 			}
// 		}
// 	}
// }

// let res = func()
// res()
// res()
// res()

/* Допишите следующий код так, чтобы его запуск алертом выводил '!':

(function() {
	// какой-то код
})()()(); */

// (function() {
// 	return function(){
// 		return function(){
// 			console.log('!');
// 		};
// 	};
// })()()()

/* Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function() {
	// какой-то код
})(1)(2); */

// (function(num1) {
// 	return function(num2){
// 		console.log(num1 + num2);
// 	}
// })(1)(2);

/* Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function() {
	// какой-то код
})(1)(2)(3); */

// (function (num1) {
// 	return function (num2) {
// 		return function (num3) {
// 			console.log(num1 + num2 + num3);
// 		}
// 	}
// })(1)(2)(3)

/* Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик. */

// let func = (function () {
// 	let num = 1

// 	return function () {
// 		console.log(num)
// 		num++

// 		if (num == 6) {
// 			num = 1
// 		}
// 	}
// })()

// for (let i = 1; i <= 10; i++) {
// 	func()
// }

/* Дан массив:

let arr = [1, 2, 3, 4, 5];
С помощью рекурсии выведите элементы этого массива в консоль. */

// let arr = [1, 2, 3, 4, 5]

// function printArr(arr, index) {
// 	if (index < arr.length) {
// 		console.log(arr[index])
// 		printArr(arr, index + 1)
// 	}
// }
// printArr(arr, 0)

/* Дан массив:

let arr = [1, 2, 3, 4, 5];
С помощью рекурсии найдите сумму квадратов элементов этого массива. */

// let arr = [1, 2, 3, 4, 5]

// function sumArr(arr) {
// 	let sum = arr.shift()**2

// 	if (arr.length !== 0) {
// 		sum += sumArr(arr)
// 	}
// 	return sum
// }

// console.log(sumArr(arr))

/* Дан многомерный объект произвольного уровня вложенности, например, такой:

{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
С помощью рекурсии выведите все примитивные элементы этого объекта в консоль. */

// function func(arr){
// 	for(let elem in arr){
// 		if(typeof elem == 'object'){
// 			func(elem)
// 		} else{
// 			console.log(elem);
// 		}
// 	}
// }

// func(
// 	{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// )

/* Дан многомерный массив произвольного уровня вложенности, например, такой:

[1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:

[1, 2, 7, 8, 3, 4, 5, 6, 7] */

// let arrays = []

// function func(arr) {
// 	for (let elem of arr) {
// 		typeof elem == 'object' ? func(elem) : arrays.push(elem)
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]])

// console.log(arrays)

/* Дан многомерный объект произвольного уровня вложенности, например, такой:

{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
С помощью рекурсии найдите сумму элементов этого объекта. */

// let sum = 0
// let arrays = []
// function func(arr) {
// 	for (let elem in arr) {
// 		if (typeof elem == 'object') {
// 			func(arr)
// 		} else {
// 			// console.log(arrays)
// 			arrays.push(arr[elem])
// 		}
// 		for (let i = 0; i < arrays.length; i++) {
// 			// console.log(arrays[i])
// 			for (let j in arrays[i]) {
// 				// console.log(arrays[i][j])
// 				// arrays.push(arrays[i][j])
// 				for (let k in arrays[i][j]) {
// 					// console.log(arrays[i][j][k])
// 					arrays.push(arrays[i][k])

// 					for (let g in arrays[i][j][k]) {
// 						arrays.push(arrays[i][j][k][g])
// 						// console.log(arrays[i][j][k][g])
// 					}
// 				}
// 			}
// 		}
// 	}
// 	console.log(arrays)
// 	return sum
// }

// func({
// 	a: 1,
// 	b: { c: 2, d: 3, e: 4 },
// 	f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
// })

/* Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:

['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
С помощью рекурсии слейте элементы этого массива в одну строку:

'abcdefgjk' */

// let result = ''
// function func(arr) {
// 	for (let el of arr) {
// 		if (typeof el == 'object') {
// 			func(el)
// 		} else {
// 			result += el
// 			console.log(result)
// 		}
// 	}
// }
// func(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])
