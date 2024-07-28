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

/* Дан многомерный массив произвольного уровня вложенности, например, такой:

[1, [2, 7, 8], [3, 4], [5, [6, 7]]]
Возведите все элементы-числа этого массива в квадрат. */

function func(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] == 'object') {
			arr[i] = func(arr[i])
		} else {
			arr[i] += '!'
		}
	}

	return arr
}

let funcc = func([1, [2, 7, 8], [3, 4], [5, [6, 7]]])
console.log(funcc)
