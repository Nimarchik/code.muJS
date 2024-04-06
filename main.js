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

/*  */