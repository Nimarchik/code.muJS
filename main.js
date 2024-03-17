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

